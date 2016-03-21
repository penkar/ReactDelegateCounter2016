import React from 'react';
import Header from '../components/header/header.js';
import Delegate from '../components/delegate/delegate.js';

class App extends React.Component{
	constructor(props) {
    super(props);
  }

	render() {
		return (
			<div>
				<Header />
        <div style={{margin:'10px'}}>
					<Delegate props={this.props}/>
        </div>
			</div>
		)
	}
}

function mapStateToProps(state){
	return ({
		delegates: state
	})
}

export default App;
