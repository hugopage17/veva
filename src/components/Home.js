import React, {Component} from 'react';
import '../App.css'
import '../stylesheet.css'
import '../slider.css'
import {data} from '../services-data.js'
import { Link} from "react-router-dom"
import {FaFacebookSquare, FaLinkedin} from 'react-icons/fa'
import ScrollAnimation from 'react-animate-on-scroll';


class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      serviceIndex:0,
      isMobile:false,
      textSlide:[
        'We are a unique company that brings all the resources needed to build a company from a start-up to a corporate level. We can work to manage a business that requires help',
        'Maybe your business needs a rebrand, and we can help with that. There are no limitations to what we can put together and having such a diverse team in place means you get the best job possible in a very timely manner',
        'Websites never looked so good. With a small team of graphic designers and developers at the ready we quickly put together high quality websites that pop, and have the means to manage your investment and keep everything up to date.'
      ],
      slideIndex:0
    }
  }

  componentDidMount(){
    document.title = 'Veva'
    window.scrollTo(0, 0);
    if(window.screen.width <= 560){
      document.getElementById('navbar').style.display = 'none'
    }
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
    },5000)
  }

  toggleNav = () => {
    document.getElementById('navbar').style.display = 'block'
  }

  renderText(){
    const text = this.state.textSlide
    return text.map((t)=>{
      return(
        <p style={{width:'100%',fontWeight:100,lineHeight:'2em'}} class='mySlides'>{t}</p>
      )
    })
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
      return(
        <div class='each-service' id={`index-${index}`}>
          <Link style={{color:'white'}} to={`Services/${service.name}`}><img src={require(`../images/${service.img}`)} alt={service.name}/></Link><br/>
          <Link style={{color:'white'}} to={`Services/${service.name}`}><h3>{service.name}</h3></Link>
          <div id='key-points-list'>
            <p style={{fontSize:16,fontWeight:100,width:'100%',textAlign:'center',lineHeight:'2em'}}>{service.brief}</p>
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

  showSocials(){
    return(
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
      <div style={{position:'absolute',width:'60%',margin:'auto',left:'20%'}}>
        <a href='https://www.facebook.com/vevadevnz/' target='_blank' rel="noopener noreferrer" style={{float:'left'}} class='social-img-big'>
          <FaFacebookSquare size='9em' color='#0E1938'/><br/>
          <label>Follow Veva on Facebook</label>
        </a>
        <a href='https://www.linkedin.com/company/veva-development-nz/' target='_blank' rel="noopener noreferrer" class='social-img-big' style={{float:'right'}}>
          <FaLinkedin size='9em' color='#0E1938' roundness="50%"/><br/>
          <label>Connect with Veva on Linkedin</label>
        </a>
      </div>
      </ScrollAnimation>
    )
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
            <div style={{width:'90%',margin:'auto',alignItems:'center',paddingTop:10,overflow:'auto'}}>
              <div style={{float:'left',width:'40%'}}>
                <h1 id='blurb-id'><span class='text-gradient'>We are a company that brings the best people in New Zealand </span>
                  <span style={{color:'#0E1938'}}>to develop/manage companies all across the country.</span>
                </h1>
                <div id='first-div-top' class='intro-blurb'>
                  <img id='text-logo' src={require('../images/veva-4.png')} alt='Veva'/>
                  <div class='sliding-text-home'>
                    {this.renderText()}
                    <div style={{textAlign:'center',position:'absolute',bottom:0,left:'45%'}}>
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
        <div style={{padding:60,textAlign:'center'}}>
          <h1><span class='text-gradient'>Connect</span> on our other channels</h1>
          {this.showSocials()}
        </div>
        <div class='home-mid-sec'>
          <video class='home-video' controls>
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
        <div class='forth-panel'>
          <p class='four-panel-1'>We have people all over NZ ready at hand and can help 98% of business reach their goals.
              We can work with investment opportunities to make sure you're making the right decision and investing wisely.
              Working to bring you out of receivership, whether that's direct with you or the banks we can use our resources to pull you out of the mud and train you to run your business better.
          </p>
          <p class='four-panel-2'>Rebranding and building new systems, whether you just need a new logo or a full overhaul we have the team to make that the best investment you can make.
          Accounting, we have some very talented professionals that know their business. Making sure you have the right budget/advice in place can be vital to a company's success</p>
        </div>
      </div>
    )
  }
}


export default Home;
