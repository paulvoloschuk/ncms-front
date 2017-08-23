import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'

import common from './common'
import userReducer from './user'
import apanelReducer from './apanel'

// Fix: "React-Redux: Combining reducers: Unexpected Keys"
// http://stackoverflow.com/a/33678198/789076
const initialReducers = {
  counter: (state = 0) => state, // default value should be imported from the module/reducer
  async: (state = {}) => state, // default value should be imported from the module/reducer
  common: common,
  user: userReducer,
  apanel: apanelReducer
}

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    // Add sync reducers here
    router,
    ...initialReducers,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
