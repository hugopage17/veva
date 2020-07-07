import React, {Component} from 'react';
import '../App.css'
import {data} from '../services-data.js'
import {Link} from "react-router-dom"
import MetaTags from 'react-meta-tags'
import fire from './Fire.js'

class Service extends Component{
  constructor(props){
    super(props)
    this.state = {
      service:{},
      otherServices:[]
    }
  }

  componentDidMount(){
    const key = this.props.match.params
    fire.analytics().logEvent(`${key.service} service was viewed`)
    window.scrollTo(0, 0);
    if(window.screen.width <= 560){
      document.getElementById('navbar').style.display = 'none'
    }
    var otherServices = []
    for (var i = 0; i < data.length; i++) {
      if(data[i].name !== key.service){
        otherServices.push(data[i])
      }
      else{
        this.setState({service:data[i]})
      }
    }
    this.setState({otherServices})
  }

  toggleNav = () => {
    document.getElementById('navbar').style.display = 'block'
  }

  showOthers(){
    const services = this.state.otherServices
    return services.map((service)=>{
      return (
        <Link to={`/Services/${service.name}`} class='route-link' target="_blank"><div class='rounded-services'>
          <img src={require(`../images/${service.img}`)} alt={service.name}/>
          <h3 >{service.name}</h3>
        </div></Link>
      )
    })
  }

  render(){
    return(
      <div>
        <MetaTags>
          <title>{this.state.service.name}</title>
          <meta name={this.state.service.name} content={this.state.service.desc}/>
        </MetaTags>
        <div class='services-wrapper'>
          <button class='toggle-nav' onClick={this.toggleNav}>
            <div class='tog-bar'></div>
            <div class='tog-bar'></div>
            <div class='tog-bar'></div>
          </button>
          <div style={{marginBottom:100}}>
            <h1 class='text-gradient' style={{fontWeight:'bold'}}>{this.state.service.name}</h1>
            <p class='service-desc'>{this.state.service.desc} <a href="mailto:contact@vevadev.co.nz" id='mail-link' class='text-gradient'>Contact us for more information</a></p>
          </div>
          <h1 style={{fontWeight:'bold'}}>Find out more about</h1>
          <div>
            {this.showOthers()}
          </div>
        </div>
      </div>
    )
  }
}

export default Service
