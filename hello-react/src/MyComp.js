import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle as farCircle } from '@fortawesome/free-regular-svg-icons'
import { faCircle as fasCircle } from '@fortawesome/free-solid-svg-icons'

class MyComp extends Component {

  state = {
    filled:false
  };





  constructor(props) {
      super(props);
  }

  handleClick = () =>{
    if(this.state.filled){
      //this.state.filled = false;
      this.setState({filled:false});

    }else {
      //this.state.filled = true;
      this.setState({filled:true});
    }

    //this.setState({filled: !this.state.filled});
  }

  render() {
      return (
          <div className="box">
             <div onClick={this.handleClick}>
                 <FontAwesomeIcon icon={this.state.filled ? fasCircle: farCircle } size="3x" />
             </div>


         </div>



      )
  }
}

const Circle = function (props) {
  return (
    <div onClick={props.handleClick}>
        <FontAwesomeIcon icon={this.state.filled ? fasCircle: farCircle } size="5x" />
    </div>
  )
}

export default MyComp;
