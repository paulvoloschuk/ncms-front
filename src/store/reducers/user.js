import {triggerAction} from '../../helpers'
import actions from 'store/actions/user'

export const initialState = {
  rank: 0
}

export default (state = initialState, action) => triggerAction(state, action, actions, 'user')
