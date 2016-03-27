import React from 'react'
import Input from './input.js'

class StateRow extends React.Component{
  constructor(props){
    super(props)
  }

  _update(e) {
    let candidate = e.target.id
    let state = this.props.data.state;
    this.props.dispatch({type:'SET_EDIT', state, candidate})
  }

  _delegateAdd(data) {
    let total = data.candidates.clinton + data.candidates.sanders;
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
    const contenders = ['clinton', 'sanders']
    let { data, settings, dispatch } = this.props;
    for(var i = 0; i < contenders.length; i++){
      let contender = contenders[i];
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
        <td>{data.superdelegates}</td>
        <td>{data.class}</td>
        {::this._cols()}
      </tr>
    )
  }
}

export default StateRow;
