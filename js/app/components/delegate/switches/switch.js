import React, {PropTypes} from 'react'
import { connect } from 'react-redux'

class Switch extends React.Component{
  static propTypes = {
    bool: PropTypes.bool
  }

  constructor(props){
    super(props)
  }

  _switchD() {
    this.props.switch(true)
  }

  _switchR() {
    this.props.switch(false)
  }

  _styleD(bool) {
    if(bool){
      return {backgroundColor:'rgba(0,120,231,0.5)'}
    } else {
      return {backgroundColor:'rgba(0,120,231,1.0)'}
    }
  }

  _styleR(bool) {
    if(bool){
      return {backgroundColor:'rgba(202,60,60,0.5)'}
    } else {
      return {backgroundColor:'rgba(202,60,60,1.0)'}
    }
  }

  render() {
    let bool = this.props.bool
    return (
      <div>
        <button className="pure-button" onClick={::this._switchD} style={::this._styleD(bool)}>
          Democratic Race
        </button>&nbsp;
        <button className="pure-button" onClick={::this._switchR} style={::this._styleR(!bool)}>
          Republican Race
        </button>
      </div>
    )

  }
}

export default connect()(Switch);
