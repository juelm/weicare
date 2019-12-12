import React, { Component } from 'react';
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
    margin: 'auto  0px',
    background: this.background,
    height: this.height,
    position: 'fixed',
    top: 0,
    left: 0,
    //display: 'block',
    width: '100%',
    paddingBottom: '40px',
    
  });

  render() {

    return (
      <div style = {this.getStyle()}>
        <p style = {{position: 'absolute', top: '10px',color: 'tan', fontWeight: 'bold', clear: 'both', paddingBottom: '0px'}}>{this.props.welcome}</p>
        <h1 style = {{position: 'relative', top: '-1px', left: '5%', color: 'tan', textAlign: 'center', fontSize: 70, display: 'inline-block', marginLeft: '5%'}}>Wei Care</h1>
        <NavBar markSelected = {this.props.markSelected} loginMessage = {this.props.loginMessage}/>
      </div>
    )
    
  }
}

export default Header;
