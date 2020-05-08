import React, {Component} from 'react';
import Navbar from './Navbar.js'

class Video extends Component {
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
      <div class='video-wrapper'>
        <Navbar/>
        <button class='toggle-nav' onClick={this.toggleNav}>
          <div class='tog-bar'></div>
          <div class='tog-bar'></div>
          <div class='tog-bar'></div>
        </button>
        <video width="100%" height="420" style={{margin:'auto 0',display:'block',outline:'none'}} controls>
          <source src="https://promo-video-veva.s3.amazonaws.com/Veva+Development+intro.mp4" type="video/mp4"/>
        </video>
      </div>
    )
  }
}


export default Video;
