import React, {Component} from 'react';
import '../App.css'

class Member extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  componentDidMount(){
    window.scrollTo(0, 0);
    if(window.screen.width <= 560){
      document.getElementById('navbar').style.display = 'none'
    }
  }

  render(){
    return (
      <div class='black-bg' hidden={this.props.hide}>
        <button class='but-3' onClick={this.props.close}>Back</button>
        <div class='member-inner'>
          <div class='member-top'>
            <div class='member-left-top'>
              <img src={this.props.member.img} alt='display'/>
            </div>
            <div class='member-top-right'>
              <h1>{this.props.member.name}</h1>
              <h2>{this.props.member.title}</h2>
            </div>
          </div>
          <div>
            <p>{this.props.member.desc}</p>
          </div>
        </div>
      </div>
    )
  }
}


export default Member;
