const todo = {
  list: []
}

const reducer = (state = todo, action) => {
  if(action.type === "ADD") {
    return {
      ...state,
      list: [
        ...state.list,
        action.value
      ]
    }
  }
  return state
}

export default reducer