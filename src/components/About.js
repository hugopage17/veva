import React, {Component} from 'react';
import '../App.css'
import Navbar from './Navbar.js'

class About extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount(){
    window.scrollTo(0, 0);
    if(window.screen.width <= 560){
      document.getElementById('navbar').style.display = 'none'
    }
  }

  toggleNav = () => {
    document.getElementById('navbar').style.display = 'block'
  }

  render(){
    return (
      <div class='about-wrapper'>
      <Navbar/>
      <button class='toggle-nav' onClick={this.toggleNav}>
        <div class='tog-bar'></div>
        <div class='tog-bar'></div>
        <div class='tog-bar'></div>
      </button>
        <video height="420" id='veva-video' controls>
          <source src="https://promo-video-veva.s3.amazonaws.com/Veva+Development+intro.mp4" type="video/mp4"/>
        </video>
        <p class='about-panel'>Description of Veva and our services here</p>
      </div>
    )
  }
}


export default About;
