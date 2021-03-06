import React, {Component} from 'react';
import { Link } from "react-router-dom";
import '../App.css'

class Footer extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    return (
      <div class='footer-wrapper'>
        <div style={{backgroundColor:'white'}} class='footer-inner'>
          <ul class='first-ul-footer'>
            <Link to='/About'><li>ABOUT</li></Link>
            <Link to='/Services'>
              <li>SERVICES</li>
            </Link>
            <Link to='/OurTeam'><li>TEAM</li></Link>
            <Link to='/Contact'><li >CONTACT</li></Link>
            <Link to='/Careers'><li>CAREERS</li></Link>
          </ul>
          <div class='footer-logo-div'>
            <img src={require('../images/veva-1.png')} style={{width:'64px',margin:'auto'}} id='footer-v-img' alt='Veva'/>
            <label style={{textAlign:'center'}}>Veva Development &#169;</label>
          </div>
          <ul class='contact-ul-footer'>
            <li><img src={require('../images/mail.png')} alt='mail' width={24} id='mail-link' style={{verticalAlign:'middle',marginRight:5}}/><a href="mailto:contact@vevadev.co.nz" id='mail-link' style={{verticalAlign:'middle'}}>contact@vevadev.co.nz</a></li>
          </ul>
        </div>
        <div id='footer-gradient-tag'></div>
      </div>
    )
  }
}


export default Footer;
