import React, {Component} from 'react';
import '../App.css'
import '../stylesheet.css'
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
            <div style={{overflow:'auto',width:'90%',margin:'auto',alignItems:'center',paddingTop:10}}>
              <div id='first-div-top' class='intro-blurb'>
                <p id='blurb-id'>It's our business to grow your business</p>
                <p style={{width:'100%',fontWeight:100}} class='blurb-para'>Founded in 2020 with a mission to be the most successful, creative and ground-breaking development and
                investment company in New Zealand</p>
                <p style={{width:'100%',fontWeight:100}}>We are a full-service business development company with years of expertise.
                Our dedicated team of professionals are all at the top of their fields and passionate about what they do.</p>
                <p style={{width:'100%',fontWeight:100}}>
                  Websites never looked so good. With a small team of graphic designers and developers at the ready we quickly put together high quality websites
                  that pop, and have the means to manage your investment and keep everything up to date.
                </p>
              </div>
              <div style={{overflow:'auto'}}>
                <img class='fadein' src={require('../images/Header-Image_Placeholder.png')} id='anim-img' alt='Veva' style={{overflow:'auto'}}/>
              </div>
            </div>
          </div>
        </div>
        <div class='home-mid-sec'>
          <video class='home-video' controls>
            <source src="https://promo-video-veva.s3.amazonaws.com/Veva+Development+intro.mp4" type="video/mp4"/>
          </video>
        </div>
        <div>
          <div class='home-inner-sec' id='services-wrapper'>
            <p id='second-header' style={{color:'white',textAlign:'center'}}>The "<span style={{textDecoration:'underline',textDecorationColor:'#18E69B'}}>one stop shop</span>" for all your business needs</p>
            <div id='middle-inner'>
            {this.showServices()}</div>
          </div>
        </div>
      </div>
    )
  }
}


export default Home;
