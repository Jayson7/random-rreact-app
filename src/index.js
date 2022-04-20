import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import NavbarsFunc from './components/navigation/nav'

import { createStore } from 'redux'
import { devToolsEnhancer } from '@redux-devtools/extension'
import loginFormReducer from './components/redux/reducers/loginFormReducer'
import RegFormReducer from './components/redux/reducers/registrationReducer'
import counterReducer from './components/redux/reducers/addCounter'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
  counterReducer,
  loginFormReducer,
  RegFormReducer,
})

const store = createStore(allReducers, devToolsEnhancer())

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <NavbarsFunc />
    </Provider>{' '}
  </React.StrictMode>,
)
