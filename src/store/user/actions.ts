import { ACTIONS } from './constants'
export type SetUser = {
  accessToken?: string
  email: string | null
  uid?: string
} | null

export function setUser(user: SetUser) {
  return {
    type: ACTIONS.SET_USER,
    payload: user,
  }
}
