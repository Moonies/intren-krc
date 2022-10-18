import { ACTIONS } from './constants'

type Reducer = {
  type: ACTIONS
  payload: string
}

export type UserState = {
  accessToken?: string
  email?: string
  uid?: string
} | null

const initialState: UserState = null

const UserReducer = (state = initialState, { type, payload }: Reducer) => {
  console.log({ type, payload })
  switch (type) {
    case ACTIONS.SET_USER:
      return {
        user: payload,
      }
    default:
      return state
  }
}

export default UserReducer
