import React, {Component} from 'react';
import '../App.css'
import {data} from '../services-data.js'
import { Link} from "react-router-dom";

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

  toggleNav = () => {
    document.getElementById('navbar').style.display = 'block'
  }

  showServices(){
    return data.map((service)=>{
      const index = data.indexOf(service)
      return(
        <div class='each-service' id={`index-${index}`}>
          <div style={{float:'left',width:'60%',margin:'auto'}}>
            <h3>{service.name}</h3>
            {service.keyPoints.map((point)=>{
              return <li>{point}</li>
            })}
          </div>
          <div style={{float:'right'}}>
            <img src={require(`../images/${service.img}`)} alt={service.name}/><br/>
            <Link to={`Services/${service.name}`}><button>Find out More</button></Link>
          </div>
        </div>
      )
    })
  }

  render(){
    return (
      <div class='home-wrapper'>
        <div class='home-top-sec'>
          <button class='toggle-nav' onClick={this.toggleNav}>
            <div class='tog-bar'></div>
            <div class='tog-bar'></div>
            <div class='tog-bar'></div>
          </button>
          <div class='home-inner-sec' style={{overflow:'auto',width:'80%',margin:'auto',alignItems:'center',paddingTop:10}}>
            <div style={{float:'left',textAlign:'center'}} class='intro-blurb'>
              <p class='fadein'>Blurb introducing Veva Development</p>
            </div>
            <div style={{float:'right'}}>
              <img class='fadein' src={require('../images/veva-3.png')} style={{width:'80%'}} alt='Veva'/>
            </div>
          </div>
        </div>
        <div class='home-mid-sec'>
          <h1 style={{textAlign:'center',fontWeight:400}}>What we offer</h1>
          <div class='home-inner-sec' id='middle-inner'>
            {this.showServices()}
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
