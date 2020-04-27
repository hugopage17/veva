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
        <div style={{overflow:'auto',backgroundColor:'#0E1938'}}>
          <div class='footer-inner'>
            <div style={{float:'left'}}>
              <ul>
                <li>Email</li>
                <li>Phone Number</li>
              </ul>
            </div>
            <div style={{float:'right'}}>
              <ul class='bottom-nav'>
                <Link to='/About' class='route-link'><li>About</li></Link>
                <br/>
                <Link to='/Contact' class='route-link'><li>Contact</li></Link>
                <br/>
                <Link to='/OurTeam' class='route-link'><li>Our Team</li></Link>
              </ul>
            </div>
          </div>
        </div>
        <div class='footer-bottom'>
          <p style={{textAlign:'center'}} class='copyright-tag'>Veva Development &#169;</p>
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
