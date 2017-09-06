import API from '../../modules/API'
import axios from 'axios'

export function login(data) {
  return dispatch => {
    dispatch({type:'user/LOGIN_START'})
    axios.post('http://localhost:3002/user', data)
      .then(response => dispatch({type: 'user/LOGIN_SUCCESS', payload: response}))
      .catch(error => dispatch({type: 'user/LOGIN_FAIL', payload: error}))
  }
}


export default {
  login: login,
  LOGIN_SUCCESS: (state, action) => {
    
    return state
  },
  LOGIN_FAIL: (state, action) => {
    console.log('FAIL БЛЯ', action)
    return state
  }
}
