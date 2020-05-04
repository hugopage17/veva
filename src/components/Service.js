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
    const key = this.props.match.params
    for (var i = 0; i < data.length; i++) {
      if(key.service === data[i].name){
        console.log(data[i].name);
        this.setState({service:data[i]})
      }
    }
  }


  render(){
    return(
      <div class='services-wrapper'>
        <h1>{this.state.service.name}</h1>
        <p>This section can include further in depth Information
        about the particular service we offer (marketing, Business Dev and Web design)</p>
      </div>
    )
  }
}

export default Service
