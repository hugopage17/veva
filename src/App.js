import React, {Component} from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Navbar from './components/Navbar.js'
import Home from './components/Home.js'
import Footer from './components/Footer.js'
import About from './components/About.js'
import Contact from './components/Contact.js'
import Team from './components/Team.js'
import Error from './components/Error.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }



  toggleNav = () => {
    document.getElementById('navbar').style.display = 'block'
  }

  render(){
    return (
      <BrowserRouter>
        <div>
          <Navbar/>
          <button class='toggle-nav' onClick={this.toggleNav}>
            <div class='tog-bar'></div>
            <div class='tog-bar'></div>
            <div class='tog-bar'></div>
          </button>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/About' component={About}/>
            <Route exact path='/Contact' component={Contact}/>
            <Route exact path='/OurTeam' component={Team}/>
            <Route component={Error}/>
          </Switch>
          <Footer/>
        </div>
      </BrowserRouter>
    )
  }
}


export default App;
