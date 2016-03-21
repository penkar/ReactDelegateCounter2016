import React from 'react';
import { connect } from 'react-redux';
import StateRow from './staterow.js';

class Democrat extends React.Component{
  constructor(props){
    super(props)
    this.state = {sort:'state', reverse: false}
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
    window.aaa = keys;
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
      array.push(<StateRow data={state} key={state.state}/>)
    }
    return array;
  }

  render() {
    return (
      <div>
        <table className="pure-table" style={{margin:'auto'}}>
          <thead>
            <tr>
              <th id='state' onClick={::this._sort}>State</th>
              <th id='date' onClick={::this._sort}>Date</th>
              <th id='delegates' onClick={::this._sort}>Delegates</th>
              <th id='superdelegates' onClick={::this._sort}>Super Delegates</th>
              <th id='open' onClick={::this._sort}>Open / Closed</th>
              <th id='clinton' onClick={::this._sort}>Clinton</th>
              <th id='sanders' onClick={::this._sort}>Sanders</th>
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
    candidates: state.democratDelegates
	})
}

export default connect(mapStateToProps)(Democrat);
