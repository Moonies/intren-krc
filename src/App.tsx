import AppLoading from 'components/AppLoading'
import React from 'react'
import { Provider } from 'react-redux'

import store from 'store'
import './App.css'
import Router from './navigation'

export default function App() {
  return (
    <div className="App">
      <Provider store={store.store}>
        <AppLoading>
          <Router></Router>
        </AppLoading>
      </Provider>
    </div>
  )
}
