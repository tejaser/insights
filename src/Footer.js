import React, {Component} from 'react';

class Footer extends Component{
  render(){
    return(
      <nav className="navbar navbar-expand bg-light border-dark border-top" style={{minHeight:'28px '}}>
  <ul className="navbar-nav">
    <li className="nav-item pt-2 ">
      <p>&copy; 2017 - 2018 NetElixir Inc.</p>
    </li>
  </ul>
</nav>
    )
  }
}

export default Footer;