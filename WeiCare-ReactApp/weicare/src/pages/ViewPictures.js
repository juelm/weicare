import React, { Component } from 'react';
import {pageStyle} from '../styles.js';
import PhotoPane from './PhotoPane.js'


/**

 */
class ViewPictures extends Component {

  render() {

    return (
      <div style={pageStyle()}>
          <PhotoPane />
      </div>
    );
  }
}


export default ViewPictures;
