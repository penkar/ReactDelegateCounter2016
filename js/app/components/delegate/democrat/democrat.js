import React from 'react';
import { connect } from 'react-redux';

class Democrat extends React.Component{
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
        Democrats
      </div>
    )
  }
}

function mapStateToProps(state){
	return ({
		delegates: state.redStateDelegates,
    candidates: state.republicanDelegates
	})
}

export default connect(mapStateToProps)(Democrat);
