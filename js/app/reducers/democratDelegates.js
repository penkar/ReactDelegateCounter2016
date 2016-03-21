let origin = {}

const democratDelegates = (state = origin, action) => {
  switch (action.type) {
    case 'SET_VARIABLE':
      return {...state, [action.variable]:action.val}
    default:
      return state
  }
}

export default democratDelegates
