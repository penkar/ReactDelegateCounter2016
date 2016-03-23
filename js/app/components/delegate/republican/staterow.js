import React from 'react'
import Input from './input.js'

class StateRow extends React.Component{
  constructor(props){
    super(props)
  }

  _trump(e) {
    ::this._update('trump', e.target.value)
  }

  _rubio(e) {
    ::this._update('rubio', e.target.value)
  }

  _cruz(e) {
    ::this._update('cruz', e.target.value)
  }

  _kasich(e) {
    ::this._update('kasich', e.target.value)
  }

  _update(candidate, vote) {
    let state = this.props.data.state;
    this.props.dispatch({type:'SET_EDIT', state, candidate})
  }

  _trumpInput(data, settings, dispatch) {
    if(data.state === settings.state && settings.candidate === 'trump'){
      return <Input count={data.candidates.trump} dispatch={dispatch} candidate='trump' state={data.state}/>
    }
    return data.candidates.trump
  }

  _rubioInput(data, settings, dispatch) {
    if(data.state === settings.state && settings.candidate === 'rubio'){
      return <Input count={data.candidates.rubio} dispatch={dispatch} candidate='rubio' state={data.state}/>
    }
    return data.candidates.rubio
  }

  _cruzInput(data, settings, dispatch) {
    if(data.state === settings.state && settings.candidate === 'cruz'){
      return <Input count={data.candidates.cruz} dispatch={dispatch} candidate='cruz' state={data.state}/>
    }
    return data.candidates.cruz
  }

  _kasichInput(data, settings, dispatch) {
    if(data.state === settings.state && settings.candidate === 'kasich'){
      return <Input count={data.candidates.kasich} dispatch={dispatch} candidate='kasich' state={data.state}/>
    }
    return data.candidates.kasich
  }

  _delegateAdd(data) {
    if(data.delegates < (data.candidates.clinton + data.candidates.sanders)){
      return {backgroundColor:'rgba(255,0,0,0.49)'};
    } else {
      return {};
    }
  }

  render() {
    let { data, settings, dispatch } = this.props
    let candidates = data.candidates;
    return (
      <tr style={::this._delegateAdd(data)}>
        <td>{data.state}</td>
        <td>{data.date.toLocaleDateString()}</td>
        <td>{data.delegates}</td>
        <td>{data.class}</td>
        <td onClick={::this._trump}>{::this._trumpInput(data, settings, dispatch)}</td>
        <td onClick={::this._rubio}>{::this._rubioInput(data, settings, dispatch)}</td>
        <td onClick={::this._cruz}>{::this._cruzInput(data, settings, dispatch)}</td>
        <td onClick={::this._kasich}>{::this._kasichInput(data, settings, dispatch)}</td>
      </tr>
    )
  }
}

export default StateRow;
