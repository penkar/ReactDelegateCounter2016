import React from 'react';

class Delegate extends React.Component{
  constructor(props){
    super(props)
  }

  render() { console.log(this.props);
    return (
      <div>
        Delegates
      </div>
    )
  }
}

export default Delegate
