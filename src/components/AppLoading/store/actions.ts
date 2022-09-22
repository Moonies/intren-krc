import { ACTIONS } from './constants'
export function setLoader(loading: boolean) {
  return {
    type: ACTIONS.LOADER,
    payload: loading,
  }
}
