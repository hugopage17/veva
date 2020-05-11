import React, {Component} from 'react';
import '../App.css'
import {data} from '../services-data.js'
import { Link} from "react-router-dom";
import Navbar from './Navbar.js'

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      serviceIndex:0,
      isMobile:false
    }
  }

  componentDidMount(){
    document.title = 'Veva'
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
          <Link to={`Services/${service.name}`} class='route-link' style={{color:'white'}}><h3>{service.name}</h3></Link>
          {service.keyPoints.map((point)=>{
            return <li>{point}</li>
          })}
          <img src={require(`../images/${service.img}`)} alt={service.name}/><br/>
        </div>
    )
  }

  showServices(){
    return data.map((service)=>{
      const index = data.indexOf(service)
      return(
        <div class='each-service' id={`index-${index}`}>
          <Link style={{color:'white'}} to={`Services/${service.name}`}><img src={require(`../images/${service.img}`)} alt={service.name}/></Link><br/>
          <Link style={{color:'white'}} to={`Services/${service.name}`}><h3>{service.name}</h3></Link>
          <div id='key-points-list'>
            {service.keyPoints.map((point)=>{
              return <li>{point}</li>
            })}
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
          <div class='home-inner-sec'>
            <Navbar/>
            <div style={{overflow:'auto',width:'30%',margin:'auto',alignItems:'center',paddingTop:10}}>
              <div id='first-div-top' class='intro-blurb'>
                <p class='fadein' id='blurb-id'>It's our business to grow your business</p>
                <p style={{width:'50%',fontWeight:100}} class='blurb-para'>Founded in 2020 with a mission to be the most successful, creative and ground-breaking development and
                investment company in New Zealand</p>
                <Link to='/About'>
                  <button id='watch-but'>WATCH WHAT WE DO</button>
                </Link>
              </div>
              <div style={{float:'right',bottom:'40%',position:'absolute'}}>
                <img class='fadein' src={require('../images/Header-Image_Placeholder.png')} id='anim-img' style={{width:'80%'}} alt='Veva'/>
              </div>
            </div>
          </div>
        </div>
        <div class='home-mid-sec'>
        <div style={{width:'80%',overflow:'auto',margin:'auto'}}>
          <div style={{float:'left'}}>
            <img class='fadein' id='anim-img' src={require('../images/One-stop-shop_Placeholder.png')} style={{width:'80%'}} alt='Veva'/>
          </div>
          <div id='home-mid-sec-brief'>
            <p id='second-header'>The "<span style={{textDecoration:'underline',textDecorationColor:'#18E69B'}}>one stop shop</span>" for all your business needs</p>
            <p>We are a full-service business development company with years of expertise.
            Our dedicated team of professionals are all at the top of their fields and passionate about what
            they do</p>
          </div>
        </div>
        </div>
        <div style={{backgroundColor:'#14234C'}}>
          <div class='home-inner-sec' id='services-wrapper'>
            {this.state.isMobile ?(this.scrollServices()):(<div id='middle-inner'>{this.showServices()}</div>)}
          </div>
        </div>
      </div>
    )
  }
}


export default Home;
