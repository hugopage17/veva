import React, {Component} from 'react';
import '../App.css'
import Swal from 'sweetalert2'
import Navbar from './Navbar.js'

class Contact extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount(){
    document.title = 'Veva - Contact'
    window.scrollTo(0, 0);
    if(window.screen.width <= 560){
      document.getElementById('navbar').style.display = 'none'
    }
  }

  toggleNav = () => {
    document.getElementById('navbar').style.display = 'block'
  }

  sendEmail = () => {
    const email = document.getElementById('email-add').value
    if(email)
    {
      console.log('Success');
      this.showMessage()
    }else{
      console.log('Fail');
    }
  }

  showMessage = () => {
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: 'Thank you for your message, we will reply within 2-3 days'
    })
  }

  render(){
    return (
      <div class='contact-wrapper'>
      <Navbar/>
      <button class='toggle-nav' onClick={this.toggleNav}>
        <div class='tog-bar'></div>
        <div class='tog-bar'></div>
        <div class='tog-bar'></div>
      </button>
        <div class='contact-inner'>
          <h1>Contact Us</h1>
          <p style={{fontSize:12}}>Please send us all your queries and requests below and we will get back to you with 2-3 business days</p>
          <input type='email' placeholder='Email Address' class='email-add' id='email-add'/><br/>
          <textarea placeholder='How can we help' class='msg-body'/><br/>
          <button class='submit-but' onClick={this.sendEmail}>Submit</button>
        </div>
      </div>
    )
  }
}


export default Contact;
