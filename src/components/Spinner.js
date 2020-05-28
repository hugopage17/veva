import React, {Component} from 'react'
import '../App.css'

class Spinner extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    return (
      <div class='spinner-wrapper' hidden={this.props.hide}>
        <div class="loader"></div>
      </div>
    )
  }
}


export default Spinner;
