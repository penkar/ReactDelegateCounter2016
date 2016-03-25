let origin = {
  edit: false,
  state: false,
  candidate: false
}

const settings = (state = origin, action) => {
  switch (action.type) {
    case 'SET_EDIT':
      return {...state, edit:true, state:action.state, candidate:action.candidate}
    case 'CANCEL_EDIT':
      return {edit:false, state:false, candidate:false};
    default:
      return state
  }
}

export default settings
