import React, {Component} from 'react'
import MetaTags from 'react-meta-tags'
import fire from './Fire.js'
import Spinner from './Spinner.js'
import {Link} from 'react-router-dom'

class Careers extends Component {
  constructor(props){
    super(props)
    this.state = {
      cvName:'',
      cv:{},
      coverletter:'',
      clName:'',
      hideSpinner:true,
      token:''
    }
  }

  componentDidMount(){
    window.scrollTo(0, 0);
    if(window.screen.width <= 560){
      document.getElementById('navbar').style.display = 'none'
    }
    fire.analytics().logEvent('Careers page visited')
  }

  toggleNav = () => {
    document.getElementById('navbar').style.display = 'block'
  }

  toggleCLOptions = () => {
    if(document.getElementById('upload_cl').checked === true){
      document.getElementById('upload-cl-but').hidden = false
      document.getElementById('cl-area').hidden = true
    }else if(document.getElementById('write_cl').checked === true){
      document.getElementById('upload-cl-but').hidden = true
      document.getElementById('cl-area').hidden = false
    }
  }

  uploadLetter = () => {
    const uploader = document.getElementById('cl-chooser')
    uploader.click()
    uploader.addEventListener('change', (e)=>{
       this.setState({clName:uploader.files[0].name})
       const reader = new FileReader()
       reader.onload = ()=>{
         this.setState({coverletter:reader.result})
       }
       reader.readAsText(uploader.files[0])
     }, false)
  }

  cvUploader = () => {
    const uploader = document.getElementById('res-chooser')
    uploader.click()
    uploader.addEventListener('change', (e)=>{
       this.setState({cvName:uploader.files[0].name})
       const reader = new FileReader()
       reader.readAsText(uploader.files[0])
       this.setState({cv:uploader.files[0]})
     }, false)
  }

  uploadFiles = () => {
    const p = new Promise((resolve, reject) => {
      this.setState({hideSpinner:!this.state.hideSpinner})
      const email = document.getElementById('email-add').value
      var storageRef = fire.storage().ref()
      return storageRef.child(`${email}/${this.state.cv.name}`).put(this.state.cv).then(()=>{
        resolve('success')
      })
    })
    p.then((res)=>{
      fetch('https://aoe1hjbasa.execute-api.us-east-1.amazonaws.com/dev/api/v1/token?id=qnQ4MWgHqScdXaRqi46IQmek1O62')
      .then(response => response.json())
      .then((token) => {
        this.setState({hideSpinner:!this.state.hideSpinner})
        this.setState({token:token})
        document.getElementById('success-link').click()
      })
    }).catch((err)=>{
      this.setState({hideSpinner:!this.state.hideSpinner})
      document.getElementById('fail-link').click()
    })
  }

  render(){
    return (
      <div class='careers-wrapper'>
        <button class='toggle-nav' onClick={this.toggleNav}>
          <div class='tog-bar'></div>
          <div class='tog-bar'></div>
          <div class='tog-bar'></div>
        </button>
        <Link to={`/Careers/ApplicationSent?status=success&token=${this.state.token}`}><a hidden={true} id='success-link' href={`/Careers/ApplicationSent?status=success&token=${this.state.token}`} rel="noopener noreferrer">p</a></Link>
        <Link to='/Careers/ApplicationSent?status=failed'><a hidden={true} id='fail-link' href={`/Careers/ApplicationSent?status=success&token=${this.state.token}`} rel="noopener noreferrer">p</a></Link>
        <MetaTags>
          <title>Careers</title>
          <meta name='Careers' content="We're always looking for smart and positive people who are passionate about what they do and share a similar vision to help Kiwis achieve the business goals."/>
        </MetaTags>
        <Spinner hide={this.state.hideSpinner}/>
        <div class='careers-inner'>
          <h1 class='text-gradient-no-anim' style={{fontSize:50}}>Careers at Veva</h1>
          <p class='career-txt'>We're always looking for smart and positive people who are passionate about what they do
          and share a similar vision to help Kiwis achieve the business goals. Send through your resume below
          </p>
          <input type='email' placeholder='Email Address' class='email-add' id='email-add'/>
          <div style={{width:'100%',margin:'auto',marginTop:'40px'}}>
          <label class="container" id='upload-cl-container'>Upload Coverletter
            <input type='radio' id="upload_cl" name="coverletter" value="upload" onChange={this.toggleCLOptions}/>
            <span class="checkmark"></span>
          </label>
          <label class="container" id='write-cl-container'>Write Coverletter
            <input type='radio' id="write_cl" name="coverletter" value="upload" onChange={this.toggleCLOptions}/>
            <span class="checkmark"></span>
          </label>
          </div><br/>
          <div class='cover-letter-wrapper'>
            <textarea placeholder='Type out coverletter' id='cl-area' hidden={true}/>
            <input type='file' hidden='true' id='cl-chooser'/>
            <button class='but-1' id='upload-cl-but' onClick={this.uploadLetter}>Upload Coverletter</button>
            <label id='cv-name-tag'>{this.state.clName}</label>
          </div>
          <div id='cv-uploader' class='cv-uploader' onClick={this.cvUploader}>
            <img src={require('../images/upload.png')} style={{width:'60%'}} alt='Upload'/><br/>
            <label>Upload resume</label>
            <input type='file' hidden='true' id='res-chooser'/>
          </div>
          <div class='cv-name-tag'>
            <label id='cv-name-tag'>{this.state.cvName}</label>
          </div>
          <button class='but-1' id='careers-but' onClick={this.uploadFiles}>Submit</button>
        </div>
      </div>
    )
  }
}


export default Careers;
