import React, {Component} from 'react';
import { Link } from "react-router-dom";
import '../App.css'

class Navbar extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  toggleNav = () => {
    document.getElementById('navbar').style.display = 'none'
  }

  render(){
    return (
      <div id='navbar'>
        <ul class='main-nav'>
          <button class='toggle-nav' onClick={this.toggleNav}>
            <div class='tog-bar'></div>
            <div class='tog-bar'></div>
            <div class='tog-bar'></div>
          </button>
          <Link to='/' class='route-link'><li class='main-nav-li'><img src={require('../images/veva-1.png')} style={{width:32}} alt='Home'/></li></Link>
          <Link to='/About' class='route-link'><li class='main-nav-li'>About</li></Link>
          <Link to='/Services' class='route-link'>
            <li class='main-nav-li' id='service-title'>Services</li>
            <ul class='service-menu'>
              <li>Marketing</li>
              <li>Sales</li>
              <li>Information Technology</li>
            </ul>
          </Link>
          <Link to='/Contact' class='route-link'><li class='main-nav-li'>Contact</li></Link>
          <Link to='/OurTeam' class='route-link'><li class='main-nav-li'>Our Team</li></Link>
        </ul>
      </div>
    )
  }
}


export default Navbar;
