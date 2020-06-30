import React, {Component} from 'react'
import '../App.css'
import MetaTags from 'react-meta-tags'
import {data} from '../services-data.js'
import { Link} from "react-router-dom"
import ScrollAnimation from 'react-animate-on-scroll'

class About extends Component {
  constructor(props){
    super(props)
    this.state = {
      why:[
        'Our flat structure means fewer hoops to jump through and no limits to what we can accomplish by leaverging the knowledge and expertise of each other into every project we do',
        'Through our unique connections, theres no problem we cant solve. We approach each business plan with fresh eyes and utilise the strengths of our team to develop customised strategies that work',
        'Are you ready to set your brand or business on the path to sucess?\n \nGive us a call today and find out what we can do for you.'
      ]
    }
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

  whyUs(){
    const why = this.state.why
    return (
      <div>
        <h1 class='why-us-h1'>Why Work With Us</h1>
        <div class='why-us-container'>
          {why.map((w)=>{
            let id = ''
            let index = why.indexOf(w)
            if(index === 2){
              id = 'third-why'
            }
            return <p class='each-why-us' id={id}>{w}</p>
          })}
        </div>
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
          <div style={{height:'100vh'}}>
            <div class='about-panel'>
              <h1 class='about-h1 text-gradient'>Who We Are</h1>
              <br/>
              <p>
                Veva Development began as the result of passionate professionals from different fields coming together under a shared vision
                to do more for businesses. We already love what we do  but now we want to bring something new to the table.
              </p>
              <p>
              Innovators ourselves, we’re always uncovering new ways of building a thriving business here in New Zealand. We think the best is yet to come.
              </p>
            </div>
            <div>
              <img src={require('../images/about.png')} alt='About' class='about-img'/>
            </div>
          </div>
        </div>
        <div>
          <div class='why-us-wrapper'>
            {this.whyUs()}
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
