import React from 'react';
import Democrat from './democrat/democrat.js'
import Republican from './republican/republican.js'
import Switch from './switches/switch.js'

class Delegate extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      democrat: true
    }
  }

  _switch(bool) {
    this.setState({democrat: bool});
  }

  _body() {
    if(this.state.democrat){
      return <Democrat />
    }
    return <Republican />
  }

  render() {
    return (
      <div style={{textAlign:'center'}}>
        <Switch bool={this.state.democrat} switch={::this._switch}/>
        <br/>
        {::this._body()}
      </div>
    )
  }
}

export default Delegate
