import React, {Component} from 'react';
import '../App.css'
import {data} from '../services-data.js'
import { Link} from "react-router-dom";

class Services extends Component{
  constructor(props){
    super(props)
    this.state = {
    }
  }

  showServices(){
    return data.map((service)=>{
      return(
        <Link to={`Services/${service.name}`}><div class='rounded-services'>
          <img src={require(`../images/${service.img}`)} alt={service.name}/>
          <h3>{service.name}</h3>
        </div></Link>
      )
    })
  }

  render(){
    return(
      <div class='services-wrapper'>
        <h1>Find out about our Services below</h1>
        <div class='all-services'>
          {this.showServices()}
        </div>
      </div>
    )
  }
}

export default Services
