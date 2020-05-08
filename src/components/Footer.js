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
            <img src={require('../images/veva-1.png')} style={{width:'96px',margin:'auto'}} id='footer-v-img' alt='Veva'/>
            <div style={{width:'50%',margin:'auto'}}>
              <ul class='bottom-nav' style={{textAlign:'center',float:'right'}}>
                <li><a href="mailto:contact@vevadev.co.nz" id='mail-link'>contact@vevadev.co.nz</a></li>
              </ul>
              <ul  style={{float:'left'}}>
                <Link to='/About' class='route-link-bottom'><li>About</li></Link>
                <Link to='/Services' class='route-link-bottom'><li>Services</li></Link>
                <Link to='/Contact' class='route-link-bottom'><li>Contact</li></Link>
                <Link to='/OurTeam' class='route-link-bottom'><li>Our Team</li></Link>
              </ul>
            </div>
          </div>
        </div>
        <p style={{textAlign:'center'}} class='copyright-tag'>Veva Development &#169;</p>
        <div class='footer-bottom'>
          <ul class='social-tags'>
            <SocialMediaIconsReact icon="linkedin" backgroundColor='none' roundness={0} class='social-link'/>
            <SocialMediaIconsReact icon="facebook" backgroundColor='none' roundness={0} class='social-link'/>
            <SocialMediaIconsReact icon="instagram" backgroundColor='none' roundness={0} class='social-link'/>
          </ul>
        </div>
      </div>
    )
  }
}


export default Footer;
