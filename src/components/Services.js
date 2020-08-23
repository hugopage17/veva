import React, {Component} from 'react';
import '../App.css'
import {data} from '../services-data.js'
import {Link} from "react-router-dom"
import MetaTags from 'react-meta-tags'
import ScrollAnimation from 'react-animate-on-scroll'

class Services extends Component{
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

  showServices(){
    return data.map((service)=>{
      const index = data.indexOf(service)
      let fade
      let floatDir
      if(index === 1){
        fade = 'fadeInRight'
        floatDir = 'service-pos-right'
      }else{
        fade = 'fadeInLeft'
        floatDir = 'service-pos-left'
      }
      return(
        <ScrollAnimation animateIn={fade} animateOnce={true}>
        <div class='rounded-services'>
          <div id={floatDir}>
            <h2>{service.name}</h2><br/>
            <p>{service.brief}</p><br/>
            <Link to={`Services/${service.name}`} class='route-link'><button class='but-1' style={{float:'left'}}>Find out More</button></Link>
          </div>
          <div id={floatDir}>
            <img src={require(`../images/${service.banner}`)} alt={service.name}/>
          </div>
        </div>
        </ScrollAnimation>
      )
    })
  }

  toggleNav = () => {
    document.getElementById('navbar').style.display = 'block'
  }

  render(){
    return(
      <div>
        <MetaTags>
          <title>Services</title>
          <meta name='Services' content='The one stop shop for all your business needs'/>
        </MetaTags>
        <div class='services-wrapper'>
          <button class='toggle-nav' onClick={this.toggleNav}>
            <div class='tog-bar'></div>
            <div class='tog-bar'></div>
            <div class='tog-bar'></div>
          </button>
          <div class='all-services'>
            {this.showServices()}
          </div>
        </div>
      </div>
    )
  }
}

export default Services
