import API from '../../modules/API'

export function login(data) {
  return dispatch => {
    dispatch({type:'user/LOGIN_START'})
    API.post('/', data)
      .then(response => response.json())
      .then(response => dispatch({type: 'user/LOGIN_SUCCESS', payload: response}))
      .catch(error => dispatch({type: 'user/LOGIN_FAIL', payload: error}))
  }
}


export default {
  login: login
}
