import React, {Component} from 'react';
import '../App.css'
import MetaTags from 'react-meta-tags'
import {data} from '../services-data.js'
import { Link} from "react-router-dom";

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
            <h1 class='about-h1'>Who We Are</h1>
            <p>
            Veva Development was founded in 2020 with a single mission: to be the most successful, creative and ground-breaking development and investment company
            in New Zealand. We approach each of our clients with fresh eyes to develop customized, unique strategies.
            </p>
            <p>
            Though we're growing since our founding, we’re finding new ways of building business in NZ. Let us help make your dreams a reality.
            Are you ready to set your brand or business on the path to success? Give us a call today and see what we can do for you.
            </p>
          </div>
          <div>
          <div class='solutions-about'>
            <h1 class='about-h1'>Solutions for Success</h1>
            <p>
            We can change the world, one step at a time the little things in life can change. With over 35 years of combined experience,
            Veva Development will change the way businesses and companies will be inspired. The vision for the future is here,
            moving one step at a time we can take your dream and make it a reality.
            </p>
            <p>
            We are taking startups into the future.
            Having the best team at your disposal, we map out your future in a way that allows you to focus on the things that you are the best within your business.
            Allow us to step up, to work with you and to advance your dreams in reality. We help to bring in investments to build your brand and your
            marketing portfolio. We have a team of professionals that are the best in their field to get you that big break you need.
            </p>
          </div>
          </div>
        </div>
        <div>
          <div class='about-services-gradient'>
          </div>
          <div class='about-services-block'>
            <h1>Find out more about</h1>
            {this.showServices()}
          </div>
        </div>
      </div>
    )
  }
}


export default About;
