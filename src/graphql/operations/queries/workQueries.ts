import { gql } from 'graphql-request'

export const WORK_BASICS = gql`
  query WorkBasis {
    vacations: work_vacation_durations(order_by: { order: asc }) {
      value
    }
    workLocation: work_location_types(order_by: { order: asc }) {
      value
    }
    workStatus: work_status_types(order_by: { order: asc }) {
      value
    }
  }
`
