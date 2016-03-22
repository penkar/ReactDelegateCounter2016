import React from 'react'

class input extends React.Component{
  componentDidMount() {

  }

  componentWillUnmount() {

  }

  _change(e) {
    const { dispatch, state, candidate } = this.props;
    let vote = parseInt(e.target.value) || 0;
    dispatch({type:'SET_DELEGATE', candidate, state, vote})
  }

  render() {
    return (
      <input value={this.props.count} style={{width:'45px'}} onChange={::this._change}/>
    )
  }
}

export default input
