import React, { useEffect, useState } from "react";
import { Card, Form, Input, Button } from '../../components/AuthForm';
import getDailies from '../../modules/getDayliesMod.js';


function ParentViewDaily() {

    const[daylies, setDaylies] = useState([]);
    //const[user]
    
    // useEffect(() => {
    //     let getDailies();
    //     updateDailies(getDailies())},[]);
    
    // useEffect(() => {updateDailies(getDailies())},[]);

    
    async function fetchDaylies(){
        let res = await fetch('http://localhost:8080/api/getDailies/brownm');
        res.json()
        .then(res => console.log(res))
        .then(res => setDaylies(res))
        .catch(err => console.log(err))
        console.log(daylies);
    }

    useEffect(() => {
        fetchDaylies();
        
    });

    //console.log(dailies)

    return (
        
        <div style={{ margin: '175px 40%' }}>
            {console.log(typeof(daylies))}
            {console.log("this is in return: " + daylies)}
            {
            daylies ?
            <h3>{daylies[0]}</h3>
            // daylies.map(daylies =>(
                
            //     <div>
            //         <h3>{daylies[0].title}</h3>
            //     </div>
            // ))
            :
            <h3>loading</h3>
            
        }
        {console.log(daylies)}

        </div>
    );
}

export default ParentViewDaily;