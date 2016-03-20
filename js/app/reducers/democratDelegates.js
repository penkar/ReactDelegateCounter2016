let origin = {
  lengths: 0,
  letters: 0,
  numbers: 0,
  specials: [],
  capitals: 0
}

const democratDelegates = (state = origin, action) => {
  switch (action.type) {
    case 'SET_VARIABLE':
      return {...state, [action.variable]:action.val}
    default:
      return state
  }
}

export default democratDelegates
