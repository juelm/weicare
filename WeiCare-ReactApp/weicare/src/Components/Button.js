import React, { Component } from 'react';


/**
 */



class Button extends Component {

  constructor(props){
    super(props)
    this.padding = 30;
    this.height = 80;
    this.id = props.title;
    this.onClick = props.markSelected;
  }

  getStyle = () => {
    //const { fontColor } = this.props;
    return {
      background: 'gray',
      height: this.height,
      width: this.height,
      marginTop: 35,
      //maginBottom: 20,
      marginLeft: 20,
      marginRight: this.props.rightMargin,
      fontSize: 20,
      color: 'white',
      float: 'left',
      display: 'inline-block'


    };
  }

  render() {
    //const { assignments } = this.props;
    let buttonID = this.id;

    return (
      <button name={this.props.title} style={this.getStyle()} onClick = {()=>{this.onClick(buttonID)}}> 
        {this.props.title}
      </button>
      ); 
    
  }
}

export default Button;
