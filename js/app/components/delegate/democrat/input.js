import React from 'react'

class input extends React.Component{
  constructor(props){
    super(props)
  }

  _end() {
    const {dispatch} = this.props
    dispatch({type:'CANCEL_EDIT'})
  }

  _change(e) {
    const { dispatch, state, candidate } = this.props;
    let vote = parseInt(e.target.value) || 0;
    dispatch({type:'SET_DELEGATE_DEMOCRAT', candidate, state, vote})
  }

  render() {
    return (
      <input value={this.props.count} style={{width:'45px'}} onChange={::this._change}/>
    )
  }
}

export default input
