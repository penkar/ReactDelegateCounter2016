import React from 'react'
import Input from './input.js'

class StateRow extends React.Component{
  constructor(props){
    super(props)
  }

  _sanders(e) {
    ::this._update('sanders', e.target.value)
  }

  _clinton(e) {
    ::this._update('clinton', e.target.value)
  }

  _update(candidate, vote) {
    let state = this.props.data.state;
    this.props.dispatch({type:'SET_EDIT', state, candidate})
    // this.props.dispatch({type:'SET_DELEGATE', state, candidate, vote})
  }

  _clintonInput(data, settings, dispatch) {
    if(data.state === settings.state && settings.candidate === 'clinton'){
      return <Input count={data.candidates.clinton} dispatch={dispatch} candidate='clinton' state={data.state}/>
    }
    return data.candidates.clinton
  }

  _sandersInput(data, settings, dispatch) {
    if(data.state === settings.state && settings.candidate === 'sanders'){
      return <Input count={data.candidates.sanders} dispatch={dispatch} candidate='sanders' state={data.state}/>
    }
    return data.candidates.sanders
  }

  render() {
    let { data, settings, dispatch } = this.props
    let candidates = data.candidates;
    return (
      <tr>
        <td>{data.state}</td>
        <td>{data.date.toLocaleDateString()}</td>
        <td>{data.delegates}</td>
        <td>{data.superdelegates}</td>
        <td>{data.class}</td>
        <td onClick={::this._clinton}>{::this._clintonInput(data, settings, dispatch)}</td>
        <td onClick={::this._sanders}>{::this._sandersInput(data, settings, dispatch)}</td>
      </tr>
    )
  }
}

export default StateRow;
