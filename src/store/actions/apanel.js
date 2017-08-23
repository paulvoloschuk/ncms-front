export default {
  TOGGLE_STATE: state => {
    state.open = !state.open
    return state
  },
  TOGGLE_SECTION: (state, payload) => {
    state.module = (state.module && state.module === payload) ? null : payload
    return state
  }
}
