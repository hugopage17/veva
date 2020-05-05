import React, {Component} from 'react';
import '../App.css'
import {data} from '../services-data.js'

class Service extends Component{
  constructor(props){
    super(props)
    this.state = {
      service:{}
    }
  }

  componentDidMount(){
    window.scrollTo(0, 0);
    if(window.screen.width <= 560){
      document.getElementById('navbar').style.display = 'none'
    }
    const key = this.props.match.params
    for (var i = 0; i < data.length; i++) {
      if(key.service === data[i].name){
        console.log(data[i].name);
        this.setState({service:data[i]})
      }
    }
  }

  toggleNav = () => {
    document.getElementById('navbar').style.display = 'block'
  }

  render(){
    return(
      <div class='services-wrapper'>
        <button class='toggle-nav' onClick={this.toggleNav}>
          <div class='tog-bar'></div>
          <div class='tog-bar'></div>
          <div class='tog-bar'></div>
        </button>
        <h1>{this.state.service.name}</h1>
        <p>This section can include further in depth Information
        about the particular service we offer (marketing, Business Dev and Web design)</p>
      </div>
    )
  }
}

export default Service
