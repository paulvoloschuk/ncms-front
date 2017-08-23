import {triggerAction} from '../../helpers'

const initialState = {
  processing: false
}

export default (state = initialState, action) => {
  let oldStatus = state.processing,
      newStatus

  // load indicator viewer
  let match = action.type.match(/^(\w+)\/.+_(\w+)$/)
  if (match && match.length <= 3 && ['START', 'SUCCESS', 'ERROR'].indexOf(match[2]) + 1) {
    if (match[2] === 'START')
      newStatus = true
    if (match[2] === 'SUCCESS' || match[2] === 'ERROR')
      newStatus = false

    if (oldStatus !== newStatus) state.processing = newStatus
  }
  return {...state}
}
