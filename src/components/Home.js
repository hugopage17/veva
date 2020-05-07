import React, {Component} from 'react';
import '../App.css'
import {data} from '../services-data.js'
import { Link} from "react-router-dom";

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      serviceIndex:0,
      isMobile:false
    }
  }

  componentDidMount(){
    window.scrollTo(0, 0);
    if(window.screen.width <= 560){
      document.getElementById('navbar').style.display = 'none'
      this.setState({isMobile:true})
      setInterval(()=>{
        var index = this.state.serviceIndex
        if(index < 2){
          index++
        }else if(index >= 2){
          index = 0
        }
        console.log(index);
        this.setState({serviceIndex:index})
      },3000)
    }
  }

  toggleNav = () => {
    document.getElementById('navbar').style.display = 'block'
  }

  scrollServices(){
    const index = this.state.serviceIndex
    const service = data[index]
    return(
        <div class='this-service' id={`index-${index}`}>
          <h3>{service.name}</h3>
          {service.keyPoints.map((point)=>{
            return <li>{point}</li>
          })}
          <img src={require(`../images/${service.img}`)} alt={service.name}/><br/>
          <Link to={`Services/${service.name}`} class='route-link'><button>Find out More</button></Link>
        </div>
    )
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
        <video width="100%" height="420" style={{margin:'auto 0',display:'block',outline:'none'}} controls>
          <source src="https://promo-video-veva.s3.amazonaws.com/Veva+Development+intro.mp4" type="video/mp4"/>
        </video>
          <h1 style={{textAlign:'center',fontWeight:400}}>What we offer</h1>
          <div class='home-inner-sec'>
            {this.state.isMobile ?(this.scrollServices()):(<div id='middle-inner'>{this.showServices()}</div>)}
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
