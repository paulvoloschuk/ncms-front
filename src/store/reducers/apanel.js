import {triggerAction} from '../../helpers'
import actions from 'store/actions/apanel'

const initialState = {
  open: true,
  module: null,
  loading: true
}

export default (state = initialState, action) => triggerAction(state, action, actions, 'apanel')
