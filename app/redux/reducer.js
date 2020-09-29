const todo = {
  list: []
}

const reducer = (state = todo, action) => {
  switch(action.type) {
    case 'ADD':
      console.log("value", action.value)
      return {
        ...state,
        list: [
          ...state.list,
          action.value
        ]
      }
    case 'DELETE':
      return {
        ...state,
        list: [
          ...state.list.slice(0, action.index),
          ...state.list.slice(action.index + 1)
        ]
      }
    default:
      return state
  }
}

export default reducer