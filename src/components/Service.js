import React, {Component} from 'react';
import '../App.css'
import {data} from '../services-data.js'
import {Link} from "react-router-dom"

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
    document.title = `Veva - ${key.service}`
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
          <h3>{service.name}</h3>
        </div></Link>
      )
    })
  }

  render(){
    return(
      <div>
        <div class='services-wrapper'>
          <button class='toggle-nav' onClick={this.toggleNav}>
            <div class='tog-bar'></div>
            <div class='tog-bar'></div>
            <div class='tog-bar'></div>
          </button>
          <div style={{height:'60vh'}}>
            <h1>{this.state.service.name}</h1>
            <p style={{width:'60%',margin:'auto',lineHeight:'2em'}}>{this.state.service.desc}</p>
          </div>
          <h1>Find out more about</h1>
          {this.showOthers()}
        </div>
      </div>
    )
  }
}

export default Service
