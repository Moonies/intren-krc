import { ACTIONS } from './constants'

type Reducer = {
  type: ACTIONS
  payload: string
}

export type LoadingState = {
  isLoading: boolean
}

const initialState = {
  isLoading: false,
}
const loadingActionReducer = (
  state = initialState,
  { type, payload }: Reducer
) => {
  console.log({ type, payload })
  switch (type) {
    case ACTIONS.LOADER:
      return {
        ...state,
        isLoading: payload,
      }
    default:
      return state
  }
}

export default loadingActionReducer
