import React, {Component} from 'react';
import '../App.css'
import {data} from '../services-data.js'
import Navbar from './Navbar.js'

class Service extends Component{
  constructor(props){
    super(props)
    this.state = {
      service:{}
    }
  }

  componentDidMount(){
    const key = this.props.match.params
    document.title = `Veva - ${key.service}`
    window.scrollTo(0, 0);
    if(window.screen.width <= 560){
      document.getElementById('navbar').style.display = 'none'
    }
    for (var i = 0; i < data.length; i++) {
      if(key.service === data[i].name){
        this.setState({service:data[i]})
      }
    }
  }

  toggleNav = () => {
    document.getElementById('navbar').style.display = 'block'
  }

  render(){
    return(
      <div>
        <Navbar/>
        <div class='services-wrapper'>
          <button class='toggle-nav' onClick={this.toggleNav}>
            <div class='tog-bar'></div>
            <div class='tog-bar'></div>
            <div class='tog-bar'></div>
          </button>
          <div style={{height:'80vh'}}>
            <h1>{this.state.service.name}</h1>
            <p>{this.state.service.brief}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Service
