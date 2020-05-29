import React, {Component} from 'react';
import '../App.css'
import {data} from '../services-data.js'
import {Link} from "react-router-dom"

class Services extends Component{
  constructor(props){
    super(props)
    this.state = {
    }
  }

  componentDidMount(){
    document.title = 'Veva - Services'
    window.scrollTo(0, 0);
    if(window.screen.width <= 560){
      document.getElementById('navbar').style.display = 'none'
    }
  }

  showServices(){
    return data.map((service)=>{
      return(
        <Link to={`Services/${service.name}`} class='route-link'><div class='rounded-services'>
          <img src={require(`../images/${service.img}`)} alt={service.name}/>
          <h3>{service.name}</h3>
          <p>{service.brief}</p>
        </div></Link>
      )
    })
  }

  toggleNav = () => {
    document.getElementById('navbar').style.display = 'block'
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
          <h1 class='find-services'>Find out about our Services below</h1>
          <div class='all-services'>
            {this.showServices()}
          </div>
        </div>
      </div>
    )
  }
}

export default Services
