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
        let user = 'brownm';
        let res = await fetch(`http://localhost:8080/api/getDailies/${user}`);
        let resData = await res.json();
        setDaylies(resData);
        console.log(daylies);
    }

    useEffect(() => {
        fetchDaylies();  
    },[]);

    return (
        
        <div style={{ margin: '175px 40%' }}>
            {
            daylies.length ?
            daylies.map(daylies =>(
                
                <div>
                    <h3>{daylies.Title}</h3>
                    <p>{daylies.DailyText}</p>
                </div>
            ))
            :
            <h3>loading</h3>
            
        }

        </div>
    );
}

export default ParentViewDaily;