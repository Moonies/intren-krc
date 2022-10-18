import createSagaMiddleware from 'redux-saga'
import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
} from 'redux'
import loadingActionReducer, {
  LoadingState,
} from 'components/AppLoading/store/reducer'
import UserReducer, { UserState } from './user/reducer'

export type RootState = {
  loading: LoadingState
  user: UserState
}
const rootReducer = combineReducers({
  loading: loadingActionReducer,
  user: UserReducer,
})

export const create = () => {
  const sagaMiddleware = createSagaMiddleware()
  const middleware = [sagaMiddleware]

  const store = createStore(rootReducer, applyMiddleware(...middleware))

  sagaMiddleware.run
  return { store }
}

export default create()
