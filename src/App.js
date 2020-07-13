import React, {Component} from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Home from './components/Home.js'
import Footer from './components/Footer.js'
import About from './components/About.js'
import Contact from './components/Contact.js'
import Team from './components/Team.js'
import Services from './components/Services.js'
import Service from './components/Service.js'
import Error from './components/Error.js'
import Navbar from './components/Navbar.js'
import Careers from './components/Careers.js'
import CareerPost from './components/CareerPost.js'
import './App.css'
import './stylesheet.css'
import './slider.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  toggleNav = () => {
    document.getElementById('navbar').style.display = 'block'
  }

  render(){
    return (
      <BrowserRouter>
        <div>
          <Navbar/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/About' component={About}/>
            <Route exact path='/Services' component={Services}/>
            <Route exact path='/Services/:service' component={Service}/>
            <Route exact path='/Contact' component={Contact}/>
            <Route exact path='/OurTeam' component={Team}/>
            <Route exact path='/Careers' component={Careers}/>
            <Route exact path='/Careers/ApplicationSent' component={CareerPost}/>
            <Route component={Error}/>
          </Switch>
          <Footer/>
        </div>
      </BrowserRouter>
    )
  }
}


export default App;
