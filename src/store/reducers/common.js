import {insertData} from '../../helpers'
import notifications from '../../helpers/interpretation'
import API from '../../modules/API'

const initialState = {
  processing: false,
  notifications: {
    msg: 'example',
    dateTime: new Date
  }
}

export default (state = initialState, action) => {
  let oldStatus = state.processing,
      newStatus

  // load indicator viewer
  let match = action.type.match(/^(\w+)\/.+_(\w+)$/)
  if (match && match.length <= 3 && ['START', 'SUCCESS', 'FAIL'].indexOf(match[2]) + 1) {
    if (match[2] === 'START')
      newStatus = true
    if (match[2] === 'SUCCESS' || match[2] === 'FAIL')
      newStatus = false
    if (oldStatus !== newStatus) state.processing = newStatus
  }

  // set x-auth-token
  if(action.type === 'user/LOGIN_SUCCESS')
    API.defaults.headers.common['x-access-token'] = action.payload.data.token
  if(action.type === 'user/LOGOUT')
    API.defaults.headers.common['x-access-token'] = null

  // showing notifications
  if(notifications[action.type])
    state.notification = {
      msg: insertData(action),
      dateTime: new Date()
    }


  return {...state}
}
