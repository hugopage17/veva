import React, {Component} from 'react';
import { Link } from "react-router-dom";
import '../App.css'

class Error extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount(){
    if(window.screen.width <= 560){
      document.getElementById('navbar').style.display = 'none'
    }
  }

  render(){
    return (
      <div class='error-wrapper'>
        <div class='error-inner'>
          <h1 style={{fontSize:64}}>404</h1>
          <p>Veva could not find the page you are looking for</p>
          <Link to='/' class='route-link'><button class='but-1' style={{fontSize:22}}>Return Home</button></Link>
        </div>
      </div>
    )
  }
}


export default Error;
