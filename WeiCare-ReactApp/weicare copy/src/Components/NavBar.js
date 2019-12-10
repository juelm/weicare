import React, { Component } from 'react';
import Button from './Button.js';
import { isAbsolute } from 'path';


/**
 * The Assignment List is the parent component of
 * Assignment.  The Assignment list creates an unordered
 * list of all assignments associated with a class
 * and maps each assignment to an Assignment component.
 */
class NavBar extends Component {
  constructor(){
    super()
    this.height = 80;
    //this.background = '#778899'
  }

  getStyle = () => ({
    //margin: '0px  0px 0%',
    background: this.background,
    height: this.height,
    //position: 'fixed',
    top: 0,
    left: 0,
    display: 'inline-block',
    paddingBottom: '30px',
    float:'right'
  });


  render() {
    //const { assignments } = this.props;
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
