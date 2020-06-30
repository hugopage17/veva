import React, {Component} from 'react'
import MetaTags from 'react-meta-tags'
import fire from './Fire.js'
import Swal from 'sweetalert2'
import Spinner from './Spinner.js'

class Careers extends Component {
  constructor(props){
    super(props)
    this.state = {
      cvName:'',
      cv:{},
      coverletter:'',
      clName:'',
      hideSpinner:true
    }
  }

  toggleNav = () => {
    document.getElementById('navbar').style.display = 'none'
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
        this.setState({hideSpinner:!this.state.hideSpinner})
        resolve('success')
      })
    })
    p.then((res)=>{
      Swal.fire({
        icon: 'success',
        title: 'Application sent',
        text: 'Thank you for expressing interest in Veva, we review all resumes and will be in touch if we believe if you are suited candidate for any position available'
      })
    })
  }

  render(){
    return (
      <div class='careers-wrapper'>
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
          <label class="container" style={{float:'left'}}>Upload Coverletter
            <input type='radio' id="upload_cl" name="coverletter" value="upload" onChange={this.toggleCLOptions}/>
            <span class="checkmark"></span>
          </label>
          <label class="container" style={{float:'right'}}>Write Coverletter
            <input type='radio' id="write_cl" name="coverletter" value="upload" onChange={this.toggleCLOptions}/>
            <span class="checkmark"></span>
          </label>
          </div><br/>
          <div class='cover-letter-wrapper'>
            <textarea placeholder='Type out coverletter' id='cl-area' hidden={true}/>
            <input type='file' hidden='true' id='cl-chooser'/>
            <button class='but-1' id='upload-cl-but' onClick={this.uploadLetter} style={{width:'40%'}}>Upload Coverletter</button>
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
          <button class='but-1' style={{width:'40%',marginTop:'60px'}} onClick={this.uploadFiles}>Submit</button>
        </div>
      </div>
    )
  }
}


export default Careers;
