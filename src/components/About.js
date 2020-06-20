import React, {Component} from 'react'
import '../App.css'
import MetaTags from 'react-meta-tags'
import {data} from '../services-data.js'
import { Link} from "react-router-dom"
import ScrollAnimation from 'react-animate-on-scroll'

class About extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount(){
    document.title = 'Veva - About'
    window.scrollTo(0, 0);
    if(window.screen.width <= 560){
      document.getElementById('navbar').style.display = 'none'
    }
  }

  toggleNav = () => {
    document.getElementById('navbar').style.display = 'block'
  }

  showServices(){
    return(
      <div class='about-ser-wrapper'>
        {data.map((d)=>{
          var index = data.indexOf(d)
          let padding
          if(index === 1){
            padding = '42px'
          }
          return(
            <Link style={{color:'white'}} to={`Services/${d.name}`} target="_blank"><div class='each-ser-about'>
              <img src={require(`../images/${d.img}`)} alt={d.name} style={{paddingBottom:padding}}/><br/>
              <h3>{d.name}</h3>
            </div></Link>
          )
        })}
      </div>
    )
  }

  render(){
    return (
      <div>
        <MetaTags>
          <title>About</title>
          <meta name='About' content='Veva Development was founded in 2020 with a single mission: to be the most successful, creative and ground-breaking development and investment company in New Zealand. We approach each of our clients with fresh eyes to develop customized, unique strategies.'/>
        </MetaTags>
        <div class='about-wrapper'>
        <button class='toggle-nav' onClick={this.toggleNav}>
          <div class='tog-bar'></div>
          <div class='tog-bar'></div>
          <div class='tog-bar'></div>
        </button>
          <video height="420" id='veva-video' controls>
            <source src="https://promo-video-veva.s3.amazonaws.com/Veva+Development+intro.mp4" type="video/mp4"/>
          </video>
          <div class='about-panel'>
            <h1 class='about-h1 text-gradient'>Who We Are</h1>
            <p>
            Founded in 2020, Veva Development leads with a vision to be the most successful, creative, and ground-breaking development and investment company in
            New Zealand. We approach each business plan with fresh eyes and use our ability to carve out potential to develop customised strategies for each
            business.
            </p>
            <p>
            Innovators ourselves, we’re always uncovering new ways of building a business here in New Zealand. We think the best is yet to come.
            Are you ready to set your brand or business on the path to success? Give us a call today and find out what we can do for you.
            </p>
          </div>
          <div>
          <div class='solutions-about'>
            <h1 class='about-h1 text-gradient'>Solutions for Success</h1>
            <p>
            At Veva Development, we know that the path to change is one step at a time. With over 35 years of combined experience,
            our diverse background enables us to work with your vision for the future and turn it into a reality.
            </p>
            <p>
            Our team maps out the future of your business so you can continue to focus on the areas you enjoy.
            Allow us to step up and work with you to help advance your company. We can even help bring in investment to build your
            brand and portfolio further. By working alongside you, we’ll help you get the big break you need.
            </p>
          </div>
          </div>
        </div>
        <div>
          <div class='about-services-gradient'>
          </div>
          <div class='about-services-block'>
            <h1 class='text-gradient' style={{fontWeight:'bold'}}>Find out more about</h1>
            <ScrollAnimation animateIn='fadeInLeft'>
              {this.showServices()}
            </ScrollAnimation>
          </div>
        </div>
      </div>
    )
  }
}


export default About;
