import React from 'react';
import { connect } from 'react-redux';
import StateRow from './staterow.js';

class Democrat extends React.Component{
  constructor(props){
    super(props)
    this.state = {sort:'date', reverse: false}
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
        case 'clinton':
          return (x.candidates.clinton > y.candidates.clinton) ? 1 : -1
        case 'sanders':
          return x.candidates.sanders > y.candidates.sanders ? 1 : -1
        case 'open':
          return x.class > y.class ? 1 : -1
        case 'superdelegates':
          return x.superdelegates > y.superdelegates ? 1 : -1
        case 'delegates':
          return x.delegates > y.delegates ? 1 : -1
        default:
          return 1;
      }
    })
    return keys
  }

  _rows() {
    const array = [], states = ::this._sorter();
    for( let val in states){
      let state = states[val];
      array.push(<StateRow data={state} key={state.state} dispatch={this.props.dispatch} settings={this.props.settings}/>)
    }
    return array;
  }

  _thState(id) {
    if(id === this.state.sort){
      return {backgroundColor:'#33A703'}
    }
    return {}
  }

  render() {
    return (
      <div>
        <table className="pure-table" style={{margin:'auto'}}>
          <thead>
            <tr style={{cursor:'pointer'}}>
              <th style={::this._thState('state')} id='state' onClick={::this._sort}>State</th>
              <th style={::this._thState('date')}  id='date' onClick={::this._sort}>Date</th>
              <th style={::this._thState('delegates')}  id='delegates' onClick={::this._sort}>Delegates</th>
              <th style={::this._thState('superdelegates')}  id='superdelegates' onClick={::this._sort}>Super Delegates</th>
              <th style={::this._thState('open')}  id='open' onClick={::this._sort}>Open / Closed</th>
              <th style={::this._thState('clinton')}  id='clinton' onClick={::this._sort}>Clinton</th>
              <th style={::this._thState('sanders')}  id='sanders' onClick={::this._sort}>Sanders</th>
            </tr>
          </thead>
          <tbody>
            {::this._rows()}
          </tbody>
        </table>
      </div>
    )
  }
}

function mapStateToProps(state){
	return ({
		delegates: state.blueStateDelegates,
    settings: state.settings
	})
}

export default connect(mapStateToProps)(Democrat);