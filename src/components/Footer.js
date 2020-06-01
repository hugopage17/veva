import React, {Component} from 'react';
import { Link } from "react-router-dom";
import '../App.css'
import {FaFacebookSquare, FaLinkedin} from 'react-icons/fa';

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

          </ul>
          <div class='footer-logo-div'>
            <img src={require('../images/veva-1.png')} style={{width:'64px',margin:'auto'}} id='footer-v-img' alt='Veva'/>
            <label style={{textAlign:'center'}}>Veva Development &#169;</label>
          </div>
          <ul class='contact-ul-footer'>
            <li><a href="mailto:contact@vevadev.co.nz" id='mail-link'>contact@vevadev.co.nz</a></li><br/>
            <li class='social-links'><a href='https://www.facebook.com/vevadevnz/' target='_blank' rel="noopener noreferrer"><FaFacebookSquare size='3em' color='#0E1938' class='social-img'/></a></li>
            <li class='social-links'><a href='https://www.linkedin.com/company/veva-development-nz/' target='_blank' rel="noopener noreferrer"><FaLinkedin size='3em' color='#0E1938' class='social-img'/></a></li>
          </ul>

        </div>
        <div id='footer-gradient-tag'></div>
      </div>
    )
  }
}


export default Footer;
