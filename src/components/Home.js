import React, {Component} from 'react';
import '../App.css'

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      
    }
  }

  componentDidMount(){
    window.scrollTo(0, 0);
    if(window.screen.width <= 560){
      document.getElementById('navbar').style.display = 'none'
    }
  }

  render(){
    return (
      <div class='home-wrapper'>
        <div class='home-top-sec'>
          <div class='home-inner-sec' style={{overflow:'auto',width:'80%',margin:'auto',alignItems:'center'}}>
            <div style={{float:'left',textAlign:'center'}}>
              <h1 class='fadein'>Veva</h1>
              <p class='fadein'>Insert blurb introducing Veva Development here</p>
            </div>
          </div>
        </div>
        <div class='home-mid-sec'>
          <div class='home-inner-sec'>
            <p style={{textAlign:'center'}}>This section of the home page can have infomation
            around the three main services we offer with a brief description of
            each</p>
          </div>
        </div>
        <div class='home-bottom-sec'>
          <div class='home-inner-sec'>
            <p style={{textAlign:'center'}}>This section can showcase testimonials from clients we have</p>
          </div>
        </div>
      </div>
    )
  }
}


export default Home;
