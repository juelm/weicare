import React, { Component } from 'react';
import Button from './Button.js';
import { isAbsolute } from 'path';


class NavBar extends Component {
  constructor(){
    super()
    this.height = 80;
  }

  getStyle = () => ({
    background: this.background,
    height: this.height,
    top: 0,
    left: 0,
    display: 'inline-block',
    paddingBottom: '30px',
    float:'right'
  });


  render() {
    return (
      <div style = {this.getStyle()}>
        <Button rightMargin = '0px' height={this.height} markSelected = {this.props.markSelected} title="Home"/>
        <Button rightMargin = '0px' height={this.height} markSelected = {this.props.markSelected} title="About Us"/>
        <Button rightMargin = '30px' height={this.height} markSelected = {this.props.markSelected} title="Login"/>
      </div>
    )
    
  }
}

export default NavBar;
