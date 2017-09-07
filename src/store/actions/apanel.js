import API from '../../modules/API'

export function getUsers() {
  return dispatch => {
    dispatch({type:'apanel/GET_USERS_START'})
    API.get('user')
      .then(response => dispatch({type: 'apanel/GET_USERS_SUCCESS', payload: response}))
      .catch(error => dispatch({type: 'apanel/GET_USERS_FAIL', payload: error}))
  }
}

export default {
  // Toggling
  TOGGLE_STATE: state => {
    state.open = !state.open
    return state
  },
  TOGGLE_SECTION: (state, payload) => {
    state.module = (state.module && state.module === payload) ? null : payload
    return state
  },
  // User fetching
  getUsers: getUsers,
  GET_USERS_SUCCESS: (state, payload) => {
    state.page.users = payload.data
    return state
  },
  GET_USERS_FAIL: (state, payload) => {
    state.page.users = null
    return state
  }
}
