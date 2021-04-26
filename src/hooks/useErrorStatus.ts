import { useMemo, useState } from 'react'

interface ErrorStatus {
  error: boolean
  message: string
}
interface Handlers {
  resetMessage: () => void
  setErrorStatus: (e: ErrorStatus) => void
}

export function useErrorStatus(
  initialState: ErrorStatus = { error: false, message: '' }
): [ErrorStatus, Handlers] {
  const [state, setState] = useState<ErrorStatus>(initialState)

  const handlers = useMemo(
    () => ({
      resetMessage: () => {
        setState({ error: false, message: '' })
      },
      setErrorStatus: (errorStatus: ErrorStatus) => {
        setState(errorStatus)
      },
    }),
    []
  )

  return [state, handlers]
}
