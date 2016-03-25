import React from 'react';
import Democrat from './democrat/democrat.js'
import Republican from './republican/republican.js'
import Switch from './switches/switch.js'
import { connect } from 'react-redux'

class Delegate extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      democrat: true
    }
  }

  _escape(e){
    const {dispatch} = this.props;
    let key = e.keyCode;
    if(key === 27 || key === 13){
      return dispatch({type:'CANCEL_EDIT'})
    }
    return null;
  }

  componentDidMount() {
    document.addEventListener('keyup', ::this._escape)
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

function mapStateToProps(state){
	return ({
    settings: state.settings
	})
}

export default connect(mapStateToProps)(Delegate)
