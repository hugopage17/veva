import React, {Component} from 'react'
import { Link } from "react-router-dom"

class CareerPost extends Component {
  constructor(props){
    super(props)
    this.state = {
      status:''
    }
  }

  componentDidMount(){
    const query = new URLSearchParams(this.props.location.search)
    const status = query.get('status')
    this.setState({status})
  }

  toggleNav = () => {
    document.getElementById('navbar').style.display = 'none'
  }

  successPanel(){
    return(
      <div>
        <h1 class='text-gradient'>Application Sent</h1>
        <p>Thank you for expressing interest in Veva, we review all resumes and will be in touch if we believe if you are suited candidate for any position available</p>
        <img src={require('../images/veva-1.png')} alt='Veva'/><br/><br/>
        <Link to='/' class='route-link'><button class='but-1' style={{fontSize:22}}>Return Home</button></Link>
      </div>
    )
  }

  failPanel(){
    return(
      <div>
        <h1>Error: Application failed to send</h1>
        <p>Unfortunately there was an error while trying to submit your application, please try again</p>
        <img src={require('../images/veva-1.png')} alt='Veva'/><br/><br/>
        <Link to='/Careers' class='route-link'><button class='but-1' style={{fontSize:22}}>Resend Application</button></Link>
      </div>
    )
  }

  render(){
    const status = this.state.status
    let isSuccess
    if(status === 'success'){
      isSuccess = true
    }else{
      isSuccess = false
    }
    return (
      <div id='career-post-wrapper'>
        <div id='career-post-inner'>
          {isSuccess ? (this.successPanel()):(this.failPanel())}
        </div>
      </div>
    )
  }
}


export default CareerPost;
