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
          <Link to='/' class='route-link'><li class='main-nav-li'><img id='home-logo' style={{width:32}} src={require('../images/veva-1.png')} alt='V' class='v-logo-nav'/><img id='home-logo' style={{margin:'0 auto',display:'inline'}} src={require('../images/veva-4.png')} alt='Veva'/></li></Link>
          <span id='right-side-nav'>
            <Link to='/About' class='route-link'><li class='main-nav-li'>ABOUT</li></Link>
            <Link to='/Services' class='route-link'>
              <li class='main-nav-li' id='service-title'>SERVICES</li>
            </Link>
            <Link to='/OurTeam' class='route-link'><li class='main-nav-li'>TEAM</li></Link>
            <Link to='/Contact' class='route-link'><li class='main-nav-li'>CONTACT</li></Link>
          </span>
        </ul>
      </div>
    )
  }
}


export default Navbar;
