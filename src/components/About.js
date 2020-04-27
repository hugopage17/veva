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

  render(){
    return (
      <div class='about-wrapper'>
        <h1>About Veva</h1>
        <div class='about-panel'>
          <p>Insert description of Veva and our services here</p>
        </div>
      </div>
    )
  }
}


export default About;
