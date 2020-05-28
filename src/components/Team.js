import React, {Component} from 'react';
import '../App.css'
import '../Spinner.css'
import Member from './Member.js'

class Team extends Component {
  constructor(props){
    super(props)
    this.state = {
      data:[],
      loading:true,
      member:{},
      hideMember:true
    }
  }

  componentDidMount(){
    document.title = 'Veva - Team'
    window.scrollTo(0, 0);
    if(window.screen.width <= 560){
      document.getElementById('navbar').style.display = 'none'
    }
    fetch('https://api.jsonbin.io/b/5ea63eff1299b9374236c11b/8')
    .then(response => response.json())
    .then((data) => {
      this.setState({data})
      this.setState({loading:!this.state.loading})
    })
  }

  showMember = (member) => {
    this.setState({member})
    this.setState({hideMember:!this.state.hideMember})
  }

  toggleNav = () => {
    document.getElementById('navbar').style.display = 'block'
  }

  showTeam(){
    const data = this.state.data
    return(
      <div class='whole-team'>
        {data.map((d)=>{
          return(
            <div class='each-member-wrapper'>
              <div class='each-member'>
                <img src={d.img} alt='display'/>
                <div class="after">
                </div>
              </div>
              <p class='member-title' style={{textDecoration:'underline',textDecorationColor: '#18E69B'}}>{d.name}</p>
              <p class='member-title'>{d.title}</p>
            </div>
          )
        })}
      </div>
    )
  }

  showLoader(){
    return(
      <div class='loader-wrapper'><div class="loader"></div></div>
    )
  }

  render(){
    return (
      <div>
        <Member member={this.state.member} hide={this.state.hideMember} close={()=>{this.setState({hideMember:!this.state.hideMember})}}/>
        <div id='team-wrapper'>
          <div class='team-inner'>
          <button class='toggle-nav' onClick={this.toggleNav}>
            <div class='tog-bar'></div>
            <div class='tog-bar'></div>
            <div class='tog-bar'></div>
          </button>
            <div>
              <h1>Meet The Team</h1>
              <p class='team-desc'>At Veva Development, we have an exceptional team of consultants with expertise in various areas.
              We’re committed to solving complex business challenges using the latest technology and data resources,
              combined with our creative and collaborative strategic approach. Learn more about some of our talented professionals below.
              </p>
            </div>
            <div>
              {this.state.loading ? (this.showLoader()):(this.showTeam())}
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Team;
