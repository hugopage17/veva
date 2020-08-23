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
        <button style={{float:'left',fontSize:26,paddingLeft:10,paddingRight:10,color:'#59B8D0',background:'none',border:'1px solid #59B8D0',borderRadius:'100%',margin:10}} onClick={this.toggleNav} class='close-nav-but'>X</button>
        <ul class='main-nav'>
          <Link to='/' class='route-link'><li class='main-nav-li left-nav-li'><img id='home-logo' style={{width:72}} src={require('../images/veva-top.png')} alt='V' class='v-logo-nav'/></li></Link>
          <span id='right-side-nav'>
            <Link to='/About' class='route-link'><li class='main-nav-li nav-link'>ABOUT</li></Link>
            <Link to='/Services' class='route-link'>
              <li class='main-nav-li nav-link' id='service-title'>SERVICES</li>
            </Link>
            <Link to='/OurTeam' class='route-link'><li class='main-nav-li nav-link'>TEAM</li></Link>
            <Link to='/Contact' class='route-link'><li class='main-nav-li nav-link'>CONTACT</li></Link>
            <Link to='/Careers' class='route-link'><li class='main-nav-li nav-link'>CAREERS</li></Link>
            <li class='main-nav-li'><a href='https://www.facebook.com/vevadevnz/' target='_blank' rel="noopener noreferrer"><img src={require('../images/Facebook.png')} alt='Facebook' class='nav-img'/></a></li>
            <li class='main-nav-li'><a href='https://www.linkedin.com/company/veva-development-nz/' target='_blank' rel="noopener noreferrer"><img src={require('../images/Linkedin.png')} alt='Facebook' class='nav-img'/></a></li>
          </span>
        </ul>
      </div>
    )
  }
}


export default Navbar;
