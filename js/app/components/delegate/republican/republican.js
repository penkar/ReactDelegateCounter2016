import React from 'react';
import { connect } from 'react-redux';

class Repulican extends React.Component{
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
        Repulicans
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

export default connect(mapStateToProps)(Repulican)
