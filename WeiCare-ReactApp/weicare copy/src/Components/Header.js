import React, { Component } from 'react';
import Button from './Button.js';
import NavBar from './NavBar.js';


/**
 * The Assignment List is the parent component of
 * Assignment.  The Assignment list creates an unordered
 * list of all assignments associated with a class
 * and maps each assignment to an Assignment component.
 */
class Header extends Component {
  constructor(){
    super()
    this.height = 100;
    this.background = '#778899'
  }

  getStyle = () => ({
    //margin: '0px  0px 0%',
    position: 'absolute',
    top: 0,
    background: this.background,
    height: this.height,
    position: 'fixed',
    top: 0,
    left: 0,
    //display: 'block',
    width: '100%',
    paddingBottom: '30px'
  });
  getInnerStyle = () =>({
    // marginTop: '10px',
    // marginBottom: '30px',
    // paddingTop: '10px',
    // paddingBottom: '30px'

  });

  render() {
    // <Button style = {this.getInnerStyle} height={this.height} markSelected = {this.props.markSelected} title="Home"/>
    // <Button style = {this.getInnerStyle} height={this.height} markSelected = {this.props.markSelected} title="About Us"/>
    // <Button style = {this.getInnerStyle} height={this.height} markSelected = {this.props.markSelected} title="Login"/>
    //const { assignments } = this.props;
    return (
      <div style = {this.getStyle()}>
        <h1 style = {{color: 'tan', fontSize: 70, display: 'inline-block', marginRight: '50%', marginLeft: '5%'}}>Wei Care</h1>
        <NavBar markSelected = {this.props.markSelected}/>
      </div>
    )
    
  }
}

export default Header;
