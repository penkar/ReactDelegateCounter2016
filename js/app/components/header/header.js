import React from 'react';

class Header extends React.Component{
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="header" style={{backgroundColor:'#2d3e50', height:'50px'}}>
        <div className="pure-menu pure-menu-horizontal pure-menu-fixed">
          <span className="pure-menu-heading">Delegate Count</span>

        </div>
      </div>
    )
  }
}

export default Header
