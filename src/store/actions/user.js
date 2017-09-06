import API from '../../modules/API'
import {initialState} from '../reducers/user'
import notifications from 'react-materialui-notifications'

export function login(data) {
  return dispatch => {
    dispatch({type:'user/LOGIN_START'})
    API.post('user', data)
      .then(response => dispatch({type: 'user/LOGIN_SUCCESS', payload: response}))
      .catch(error => dispatch({type: 'user/LOGIN_FAIL', payload: error}))
  }
}

export default {
  login: login,
  LOGOUT: (state, action) => {

    return initialState
  },
  LOGIN_SUCCESS: (state, action) => {

    return action.data
  },
  LOGIN_FAIL: (state, action) => {


    return state
  }
}
