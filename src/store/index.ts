import createSagaMiddleware from 'redux-saga'
import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
} from 'redux'
import loadingActionReducer, {
  LoadingState,
} from 'components/AppLoading/store/reducer'

export type RootState = {
  loading: LoadingState
}
const rootReducer = combineReducers({
  loading: loadingActionReducer,
})

export const create = () => {
  const sagaMiddleware = createSagaMiddleware()
  const middlewares = [sagaMiddleware]

  const store = createStore(rootReducer, applyMiddleware(...middlewares))

  sagaMiddleware.run
  return { store }
}

export default create()
