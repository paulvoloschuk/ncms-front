
export const activeStateClass = (collection, name, state) => [collection[name], state ? collection[name + '--active'] : ''].join(' ')

export const triggerAction = (state, trowedAction, actions, reducerName) => {
  let match = trowedAction.type.split('/');
  if (match[0] === reducerName)
    if (actions[match[1]]) state = actions[match[1]]({...state}, trowedAction.payload)
  return state
}

export default {
  activeStateClass: activeStateClass,
  triggerAction: triggerAction
}
