import React from "react";
import '../App.css'; 
import Pic1024 from '../img/res1024.jpg'; 
import Pic650 from '../img/res650.jpg'; 


function HomePage(){
  const imageUrl = window.innerWidth >=800 ? Pic1024 : Pic650; 

  return(
      <div className="App" style={{backgroundImage: `url(${imageUrl})` }}>
            <div className="App-content">
                <h1>Little school of Big Discoveries</h1>
              
            </div>
        </div>
  )

  // const useWindowWidth = () => {
  //   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  //   const handleWindowResize = () => {
  //     setWindowWidth(window.innerWidth);
  //   };

  //   useEffect(() => {
  //     window.addEventListener("resize", handleWindowResize);
  //     return () => window.removeEventListener("resize", handleWindowResize);
  //   }, []);

  //   return windowWidth;
  // };
}

export default HomePage; 

// import Paper from "@material-ui/core/Paper"; 
// import Image from '../img/kids3.jpg'; // Import using relative path


// const styles = {
//   paperContainer: {
//     height: 1000,
//     backgroundImage: `url(${Image})`
//   }
// };

// export default class HomePage extends React.Component{
//     render(){
//         return(
//             <Paper style={styles.paperContainer}>
//                Hello
//             </Paper>
//         )
//     }
// }
