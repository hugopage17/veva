import React, {Component} from 'react';
import '../App.css'
import Swal from 'sweetalert2'
import Spinner from './Spinner.js'
import MetaTags from 'react-meta-tags'

class Contact extends Component {
  constructor(props){
    super(props)
    this.state = {
      hideSpinner:true,
      subjectOptions:[
        'Business Development',
        'Business Management',
        'Investment Management',
        'Website Development',
        'Accounting'
      ]
    }
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
    this.setState({hideSpinner:false})
    const email = document.getElementById('email-add').value
    const subject = document.getElementById('subject-add').value
    const msg = document.getElementById('msg-body').value
    fetch(`https://us-central1-veva-dev.cloudfunctions.net/email/send?email=${email}&subject=${subject}&msg=${msg}`,{
      mode:'no-cors',
      method:'GET',
      headers: {
        'Access-Control-Allow-Origin':'*',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      document.getElementById('msg-body').value = ''
      document.getElementById('subject-add').value = ''
      document.getElementById('email-add').value = ''
      this.setState({hideSpinner:true})
      this.showMessage()
    }).catch((err)=>{
      this.setState({hideSpinner:true})
      document.getElementById('msg-body').value = ''
      document.getElementById('subject-add').value = ''
      document.getElementById('email-add').value = ''
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: err
      })
    })
  }


  showMessage = () => {
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: 'Thank you for your message, we will reply within 2-3 days'
    })
  }

  render(){
    const options = this.state.subjectOptions
    return (
      <div class='contact-wrapper'>
      <MetaTags>
        <title>Contact</title>
        <meta name='Contact' content='Get in touch with Veva today'/>
      </MetaTags>
      <Spinner hide={this.state.hideSpinner}/>
      <button class='toggle-nav' onClick={this.toggleNav}>
        <div class='tog-bar'></div>
        <div class='tog-bar'></div>
        <div class='tog-bar'></div>
      </button>
        <div class='contact-inner'>
          <h1 class='text-gradient-no-anim' style={{fontSize:50}}>Contact Us</h1>
          <p style={{fontSize:16}}>Please send us all your queries and requests below and we will get back to you with 2-3 business days</p>
          <input type='email' placeholder='Email Address' class='email-add' id='email-add'/><br/>
          <input type='text' list="options" placeholder='Subject' class='email-add' id='subject-add' maxlength="100"/><br/>
          <datalist id="options">
            {options.map((o)=>{
              return <option value={o}/>
            })}
          </datalist>
          <textarea placeholder='How can we help' class='msg-body' id='msg-body'/><br/>
          <button class='submit-but' onClick={this.sendEmail}>Submit</button>
        </div>
      </div>
    )
  }
}


export default Contact;
