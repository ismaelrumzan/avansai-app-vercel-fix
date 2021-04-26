import { graphqlClient } from '../lib/graphqlClient'
import { Request, Response } from 'express'
import sgMail from '@sendgrid/mail'
import { gql } from 'graphql-request'
import { StatusCodes, getReasonPhrase } from 'http-status-codes'

const PROFILE_TYPE_CLIENT = 'CLIENT'

interface Message {
  from: string
  to: string
  subject: string
  text: string
  html: string
}

const FIND_USER_BY_ID = gql`
  query FindUserById($id: uuid!) {
    user: users_by_pk(id: $id) {
      displayName: display_name
      account {
        email
      }
    }
  }
`

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string)

export default async (req: Request, res: Response): Promise<void> => {
  const payload = req.body.event.data.new
  const { user } = await graphqlClient.request(FIND_USER_BY_ID, { id: payload.user_id })
  /*
    In order to avoid the team being notified when E2E tests run, check for the email
   */
  if (payload.profile_type === PROFILE_TYPE_CLIENT && user?.account.email !== 'cypress@test.com') {
    try {
      const msg: Message = {
        from: 'Avansai <do-not-reply@avansai.com>',
        to: 'new-client-notifications@avansai.com',
        subject: 'New client created an account',
        text: `Just to let you know that a new client created his account in Avansai.com and is expecting a call.
        Name: ${user.displayName}\t Email: ${user.account.email}\t Phone Number: ${payload.phone_number}
        `,
        html: `<div>
        <p>Just to let you know that a new client created his account in Avansai.com and is expecting a call.</p>
        <p>Name: ${user.displayName}<br />
        Email: ${user.account.email}<br />
        Phone Number: ${payload.phone_number}</p>
      </div>`,
      }
      await sgMail.send(msg)
      res.status(StatusCodes.OK).end()
    } catch (e) {
      console.warn('error', e)
      res.status(StatusCodes.BAD_REQUEST).send({ error: getReasonPhrase(StatusCodes.BAD_REQUEST) })
    }
  }
  res.status(StatusCodes.OK).end()
}
