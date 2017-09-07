import {triggerAction} from '../../helpers'
import actions from 'store/actions/apanel'
import privileges from '../../privileges'

const initialState = {
  open: true,
  module: null,
  loading: true,
  page: {}
}

export default (state = initialState, action) => {
  if(action.type === 'user/LOGIN_SUCCESS') state.module = privileges[action.payload.data.rank][0]
  if(action.type === 'user/LOGOUT') state.module = privileges[0][0]
  return triggerAction(state, action, actions, 'apanel')
}
