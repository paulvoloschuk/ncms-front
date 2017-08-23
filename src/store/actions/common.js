export default {
  PROCESSING: (state, action) => {
    state.processing = action.payload
    return state
  },
}
