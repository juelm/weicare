import React, { Component } from 'react';
import Button from './Button.js';
import { useAuth } from "../context/auth"

function NavBar() {
  const height = 80;
  const { authTokens } = useAuth();

  const divStyle = {
    height: height,
    top: 0,
    left: 0,
    display: 'inline-block',
    paddingBottom: '30px',
    float: 'right'
  }

  return (
    <div style={divStyle}>
      <Button rightMargin='0px' height={height} destination="/" title="Home" />
      <Button rightMargin='0px' height={height} destination="/about" title="About Us" />
      {authTokens ?
        <Button rightMargin='30px' height={height} destination="/logout" title="Logout" />
        :
        <Button rightMargin='30px' height={height} destination="/login" title="Login" />}
    </div>
  )
}

// class NavBar extends Component {
//   constructor(){
//     super()
//     this.height = 80;
//   }

//   getStyle = () => ({
//     background: this.background,
//     height: this.height,
//     top: 0,
//     left: 0,
//     display: 'inline-block',
//     paddingBottom: '30px',
//     float:'right'
//   });


//   render() {
//     return (
//       <div style = {this.getStyle()}>
//         <Button rightMargin = '0px' height={this.height} destination="/" title="Home"/>
//         <Button rightMargin = '0px' height={this.height} destination="/about" title="About Us"/>
//         <Button rightMargin = '30px' height={this.height} destination="/login" title="Login"/>
//       </div>
//     )

//   }
// }

export default NavBar;
