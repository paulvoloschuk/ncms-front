import interpretation from './interpretation'

export const activeStateClass = (collection, name, state) => [collection[name], state ? collection[name + '--active'] : ''].join(' ')

export const triggerAction = (state, trowedAction, actions, reducerName) => {
  let match = trowedAction.type.split('/');
  if (match[0] === reducerName)
    if (actions[match[1]]) state = actions[match[1]]({...state}, trowedAction.payload)
  return state
}

export const insertData = action => {
  console.log(action);

  return interpretation[action.type]
    .replace(/\:(\w+)/g, (match, offset, string) => action.payload.data[offset] || '%undefined%')
}
  // query.replace(/\:(\w+)/g, () => {})

export default {
  activeStateClass: activeStateClass,
  triggerAction: triggerAction
}
