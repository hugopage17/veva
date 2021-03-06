import React, {Component} from 'react'
import {data} from '../services-data.js'
import { Link} from "react-router-dom"

import fire from './Fire.js'


class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      serviceIndex:0,
      isMobile:false,
      textSlide:[
        'At Veva Development, we can help take your company to the next level. We can even guide you through difficult times. We have the resources available to manage the businesses that require help and turn start-ups into corporate level businesses.',
        'Does your business need a rebrand? We can help you with that. Our diverse team of marketing professionals, developers, and graphic designers are available to complete a variety of jobs to help grow your business. At Veva Development, there are no limitations to what we can put together.',
        'With Veva Development, websites have never looked so good. Our team of graphic designers and developers put together seamless, high-quality websites that stand-out. Because websites are investments, we continually work with our clients to keep everything updated and running smoothly.'
      ],
      slideIndex:0,
      iconSize:'9em',
      clickedVideo:false
    }
  }

  componentDidMount(){
    document.title = 'Veva'
    window.scrollTo(0, 0);
    if(window.screen.width <= 560){
      document.getElementById('navbar').style.display = 'none'
      document.getElementById('mobile-logo').style.display = 'block'
      this.setState({iconSize:'3em'})
    }else{
      document.getElementById('mobile-logo').style.display = 'none'
    }
    var player = document.getElementById("home-video");
    player.addEventListener("play",  () => {
      this.videoAnalytics()
    });
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (var i = 0; i < slides.length; i++) {
       dots[i].className = dots[i].className.replace(" active", "");
      if(i === 0){
        slides[i].style.display = "block";
        dots[i].className += " active";
      }else{
        slides[i].style.display = "none";
      }
    }
    setInterval(()=>{
      this.changeTextSlide()
    },6500)
  }

  toggleNav = () => {
    document.getElementById('navbar').style.display = 'block'
  }

  renderText(){
    const text = this.state.textSlide
    return text.map((t)=>{
      return(
        <p class='mySlides'>{t}</p>
      )
    })
  }

  videoAnalytics = () => {
    if(this.state.clickedVideo === false){
      this.setState({clickedVideo:true})
      fire.analytics().logEvent('Home Video was viewed')
    }
  }

  showServices(){
    return data.map((service)=>{
      const index = data.indexOf(service)
      var leftUl = []
      var rightUl = []
      for (var i = 0; i <= 1; i++) {
        leftUl.push(service.keyPoints[i])
      }
      for (var j = 2; j <=3 ; j++) {
        rightUl.push(service.keyPoints[j])
      }
      let width
      let padding = 0
      if(index === 1){
        width = '100%'
        padding = 30
      }else{
        width = '100%'
      }
      return(
        <div class='each-service' id={`index-${index}`}>
          <Link style={{color:'white'}} to={`Services/${service.name}`}><img src={require(`../images/${service.img}`)} alt={service.name} style={{paddingBottom:padding}}/></Link><br/>
          <Link style={{color:'white'}} to={`Services/${service.name}`}><h3>{service.name}</h3></Link>
          <div id='key-points-list'>
            <p style={{fontSize:16,fontWeight:100,width:width,textAlign:'center',lineHeight:'2em',margin:'auto'}} >{service.brief}</p>
            <div class='key-points-left'>
              {leftUl.map((l)=>{
                return <p>{l}</p>
              })}
            </div>
            <div class='key-points-right'>
              {rightUl.map((l)=>{
                return <p>{l}</p>
              })}
            </div>
          </div>
        </div>
      )
    })
  }

  changeTextSlide = () => {
    var index = this.state.slideIndex
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (var i = 0; i < slides.length; i++) {
       dots[i].className = dots[i].className.replace(" active", "");
       dots[i].className = dots[i].className.replace(" fade", "");
      if(index === i){
        slides[i].style.display = "block";
        dots[i].className += " active";
        slides[i].className += " fade";
      }else{
        slides[i].style.display = "none";
      }
    }
    if(index === 2){
      index = 0
    }else{
      index++
    }
    this.setState({slideIndex:index})
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
            <div class='home-inner-sec-width'>
              <img src={require('../images/blue-logo.png')} id='mobile-logo' alt='logo-mobile'/>
              <div class='left-top-div'>
                <h1 id='blurb-id'>
                  We are a <span class='text-gradient'>company</span> that brings the <span class='text-gradient'>best</span> people in <span class='text-gradient'>New Zealand</span> to <span class='text-gradient'>develop/manage </span>
                  companies all across the country.
                </h1>
                <div id='first-div-top' class='intro-blurb'>
                  <div class='sliding-text-home'>
                    {this.renderText()}
                    <div class='three-dots'>
                      <span class="dot" onClick={this.changeTextSlide}></span>
                      <span class="dot" onClick={this.changeTextSlide}></span>
                      <span class="dot" onClick={this.changeTextSlide}></span>
                    </div>
                  </div>
                </div>
              </div>
              <div class='home-img-container'>
                <img class='fadein' src={require('../images/Header-Illustration.png')} id='anim-img' alt='Veva' style={{overflow:'auto'}}/>
              </div>
            </div>
          </div>
        </div>
        <div class='forth-panel'>
          <p class='four-panel-1'>We’re here to help businesses reach their goals and stay afloat during difficult times. We can work with you to make sure investment opportunities are the right decision.
          By leveraging our resources, we can work to bring you out of receivership and train you on how to run your business better.</p>
          <p class='four-panel-2'>From rebranding to building new systems, and from new logos to a full overhaul, we have the team to assist you in any
          endeavour. Our talented professionals have the experience and insight to make your business even better.</p>
        </div>
        <div class='home-mid-sec'>
          <video class='home-video' controls onClick={this.videoAnalytics} id='home-video'>
            <source src="https://promo-video-veva.s3.amazonaws.com/Veva+Development+intro.mp4" type="video/mp4"/>
          </video>
        </div>
        <div>
          <div class='home-inner-sec' id='services-wrapper'>
            <p id='second-header' style={{color:'white',textAlign:'center',paddingTop:20}}>The <span class='text-gradient'>one stop shop</span> for all your business needs</p>
            <div id='middle-inner'>
            {this.showServices()}</div>
          </div>
        </div>

      </div>
    )
  }
}


export default Home;
