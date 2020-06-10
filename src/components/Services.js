import React, {Component} from 'react';
import '../App.css'
import {data} from '../services-data.js'
import {Link} from "react-router-dom"
import MetaTags from 'react-meta-tags'

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
      let padding
      if(index === 1){
        padding = 10
      }
      return(
        <Link to={`Services/${service.name}`} class='route-link'><div class='rounded-services'>
          <img src={require(`../images/${service.img}`)} alt={service.name}/>
          <h3>{service.name}</h3>
          <p style={{paddingTop:padding}}>{service.brief}</p>
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
          <h1 style={{fontWeight:'bold'}}>Find out about our <span class='text-gradient' >Services </span>below</h1>
          <div class='all-services'>
            {this.showServices()}
          </div>
        </div>
      </div>
    )
  }
}

export default Services
