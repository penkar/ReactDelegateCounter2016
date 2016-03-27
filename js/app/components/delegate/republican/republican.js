import React from 'react';
import { connect } from 'react-redux';
import StateRow from './staterow.js'

class Repulican extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      sort:'date',
      reverse: false,
      contenders: [['trump','Trump'],['kasich','Kasich'],['cruz','Cruz']]
    }
  }

  _expander() {
    if(this.state.contenders.length < 5){
      return <button style={{fontSize:'70%'}} className={'pure-button'} onClick={::this._expand}>More</button>
    } else {
      return <button style={{fontSize:'70%'}} className={'pure-button'} onClick={::this._expand}>Less</button>
    }
  }

  _expand() {
    if(this.state.contenders.length < 5){
      return this.setState({
        contenders:[['trump','Trump'],['rubio','Rubio'],['kasich','Kasich'],['cruz','Cruz'],['bush','Bush'],['carson','Carson'],['fiorina','Fiorina'],['huckabee','Huckabee'],['christie','Christie'],['santorum','Santorum'],['gilmore','Gilmore']]
      })
    } else {
      return this.setState({
        contenders:[['trump','Trump'],['rubio','Rubio'],['kasich','Kasich'],['cruz','Cruz']]
      })
    }
  }

  _sort(e) {
    let sort = e.target.id
    if(sort === this.state.sort){
      return this.setState({reverse: !this.state.reverse})
    }
    return this.setState({sort, reverse: true})
  }

  _sorter() {
    const states = this.props.delegates, sort=this.state.sort;
    let keys = Object.keys(states);
    keys = keys.map(x => {
      return states[x]
    })
    keys = keys.sort((x,y) => {
      if(this.state.reverse){
        let c = x; x = y; y = c;
      }
      switch (sort) {
        case 'state':
          return x.state > y.state ? 1 : -1
        case 'date':
          return x.date > y.date ? 1 : -1
        case 'open':
          return x.class > y.class ? 1 : -1
        case 'delegates':
          return x.delegates > y.delegates ? 1 : -1
        default:
          return (x.candidates[sort] > y.candidates[sort]) ? 1 : -1;
      }
    })
    return keys
  }

  _rows() {
    const array = [], states = ::this._sorter();
    for( let val in states){
      let state = states[val];
      array.push(<StateRow data={state} key={state.state} dispatch={this.props.dispatch} settings={this.props.settings} contenders={this.state.contenders}/>)
    }
    return array;
  }

  _thState(id) {
    if(id === this.state.sort){
      return {backgroundColor:'#33A703'}
    }
    return {}
  }

  _headers() {
    let contenders = this.state.contenders
    let array = contenders.map( (candidate, x) => {
      let lower = candidate[0]
      return <th key={x} style={::this._thState(lower)}  id={lower} onClick={::this._sort}>{candidate[1]}</th>
    })
    return array
  }

  _total() {
    const contenders = this.state.contenders
    const total = {trump: 0, rubio:0,kasich:0,cruz:0,bush:0,carson:0,fiorina:0,huckabee:0,christie:0,santorum:0,gilmore:0}

    let delegates = this.props.delegates
    for(var state in delegates){
      for( var can in total){
        total[can] += delegates[state].candidates[can];
      }
    }
    let array = [<td key='0'>Totals:</td>,<td key='1'></td>,<td key='2'></td>,<td key='3'></td>];
    for(var i = 0; i < contenders.length; i++){
      let contender = contenders[i][0]
      array.push(<td key={contender}>{total[contender]}</td>)
    }
    return (<tr>{array}</tr>)
  }

  render() {
    return (
      <div>
        <div>
          {::this._expander()}
        </div>
        <table className="pure-table" style={{margin:'auto'}}>
          <thead>
            <tr style={{cursor:'pointer'}}>
              <th style={::this._thState('state')} id='state' onClick={::this._sort}>State</th>
              <th style={::this._thState('date')}  id='date' onClick={::this._sort}>Date</th>
              <th style={::this._thState('delegates')}  id='delegates' onClick={::this._sort}>Delegates</th>
              <th style={::this._thState('open')}  id='open' onClick={::this._sort}>Open / Closed</th>
              {::this._headers()}
            </tr>
          </thead>
          <tbody>
            {::this._total()}
            {::this._rows()}
          </tbody>
        </table>
      </div>
    )
  }
}

function mapStateToProps(state){
	return ({
    delegates: state.redStateDelegates,
    settings: state.settings
	})
}

export default connect(mapStateToProps)(Repulican)
