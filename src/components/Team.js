import React, {Component} from 'react';
import '../App.css'

class Team extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount(){
    window.scrollTo(0, 0);
    if(window.screen.width <= 560){
      document.getElementById('navbar').style.display = 'none'
    }
  }

  render(){
    return (
      <div id='team-wrapper'>
        <div class='team-inner'>
          <h1>Meet the Team</h1>
          <div>
            <p>Here we can have a photo of each member of Veva that a user can click on that will then
            display a popup box with the photo enlarged and a small description about that persons role at veva</p>
          </div>
        </div>
      </div>
    )
  }
}


export default Team;
