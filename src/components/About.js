import React, {Component} from 'react';
import '../App.css'

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
      <button class='toggle-nav' onClick={this.toggleNav}>
        <div class='tog-bar'></div>
        <div class='tog-bar'></div>
        <div class='tog-bar'></div>
      </button>
        <h1>About Veva</h1>
        <div class='about-panel'>
          <p>Insert description of Veva and our services here</p>
        </div>
      </div>
    )
  }
}


export default About;
