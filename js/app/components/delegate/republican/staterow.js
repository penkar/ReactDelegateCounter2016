import React from 'react'
import Input from './input.js'

class StateRow extends React.Component{
  constructor(props){
    super(props)
  }

  _update(e) {
    let vote = e.target.value
    let candidate = e.target.id
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
      return
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
    let total = data.candidates.trump + data.candidates.kasich + data.candidates.rubio + data.candidates.cruz;
    let delegates = data.delegates;
    if(!total || (total === delegates)){
      return {}
    } else if(delegates < total){
      return {backgroundColor:'rgba(255,0,0,0.49)'};
    } else {
      return {backgroundColor: 'rgba(0, 86, 255, 0.3)'}
    }
  }

  _cols() {
    let array = [];
    let { data, contenders, settings, dispatch } = this.props;
    for(var i = 0; i < contenders.length; i++){
      let contender = contenders[i][0];
      if( data.state === settings.state && settings.candidate === contender ){
        array.push(
          <td key={contender}>
            <Input count={data.candidates[contender]} dispatch={dispatch} candidate={contender} state={data.state}/>
          </td>
        );
      } else {
        array.push(
          <td key={contender} id={contender} onClick={::this._update} style={{cursor:'pointer'}}>
            {data.candidates[contender]}
          </td>
        );
      }
    }
    return array
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
        {::this._cols()}
      </tr>
    )
  }
}

export default StateRow;
