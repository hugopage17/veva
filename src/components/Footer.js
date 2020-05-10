import React, {Component} from 'react';
import { Link } from "react-router-dom";
import '../App.css'
import {SocialMediaIconsReact} from 'social-media-icons-react';

class Footer extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    return (
      <div class='footer-wrapper'>
        <div style={{overflow:'auto',backgroundColor:'white'}}>
          <div class='footer-inner'>
            <div style={{width:'100%',margin:'auto'}}>
              <ul>
                <div id='footer-li-group-left'>
                  <Link to='/About'><li>ABOUT</li></Link>
                  <Link to='/Services'>
                    <li>SERVICES</li>
                  </Link>
                  <Link to='/OurTeam'><li>TEAM</li></Link>
                  <Link to='/OurTeam'><li >CONTACT</li></Link><br/><br/>
                  <li><a href="mailto:contact@vevadev.co.nz" id='mail-link'>contact@vevadev.co.nz</a></li><br/>
                  <li>0800 123 456</li>
                </div>
                <div id='footer-li-group-right'>
                  <li>
                    <label><img src={require('../images/veva-1.png')} style={{width:'64px',margin:'auto'}} id='footer-v-img' alt='Veva'/> Veva Development &#169;</label>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div id='footer-gradient-tag'></div>
      </div>
    )
  }
}


export default Footer;
