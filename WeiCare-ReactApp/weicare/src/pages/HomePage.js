import React from 'react';
import Paper from "@material-ui/core/Paper"; 


import Image from '../components/kids3.jpg'; // Import using relative path


const styles = {
  paperContainer: {
    height: 1000,
    backgroundImage: `url(${Image})`
  }
};

export default class HomePage extends React.Component{
    render(){
        return(
            <Paper style={styles.paperContainer}>
               Hello
            </Paper>
        )
    }
}

// import React from 'react';
// import PhotoPane from './PhotoPane';

// export default function HomePage() {

//   return (

//   //     <div sytle={{marginTop:10}}>
//   //       <PhotoPane />
//   //     </div>
//   // );
// }

