import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component{
	constructor(props) {
    super(props);
  }

	render() { console.log(this.props);
		return (
			<div>
        APP
			</div>
		)
	}
}

function mapStateToProps(state){
	return ({
		delegates: state
	})
}

export default connect(mapStateToProps)(App);
