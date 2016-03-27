import React from 'react';

class Header extends React.Component{
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="header" style={{backgroundColor:'#2d3e50', height:'90px'}}>
        <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
          <span className="pure-menu-heading" style={{fontSize:'1.5em'}}>2016 Delegate<br/> Count WIP</span>
          <ul className="pure-menu-list" style={{float:'right', marginTop:'20px'}}>
            <div style={{marginRight:'10px'}} className="pure-menu-item">
              <a style={{color:'black'}} href="https://github.com/penkar/ReactDelegateCounter2016">GitHub</a></div>
            <div style={{marginRight:'10px'}} className="pure-menu-item">
              <a style={{color:'black'}} href="http://jspenkar.com">Homepage</a>
            </div>
          </ul>
        </div>
      </div>
    )
  }
}

export default Header
