import React, { useEffect, useState } from "react";
import fetchDailies from '../../modules/getDailiesMod.js';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { flexbox } from "@material-ui/system";


function titleBoxStyle(){
    return {
        margin: 'auto auto',
        position: 'fixed',
        display: 'inline-block',
        minHeight: '300px',
        minWidth: '15%'

    }
}

function dailyBoxStyle(){
    return {
        minHeight: '500px',
        display: 'inline-block',
        minHeight: '300px'

    }
}

function outerBoxStyle(){
    return{
        minHeight: '100%',
        margin: '0 10% 0 3%'
    }
}

function ParentViewDaily() {

    const[daylies, setDailies] = useState([]);
    const[current, setCurrent] = useState(0);

    // async function fetchDaylies(){
    //     let user = 'brownm';
    //     let res = await fetch(`http://localhost:8080/api/getDailies/${user}`);
    //     let resData = await res.json();
    //     setDaylies(resData);
    //     console.log(daylies);
    // }

    useEffect(() => {
        fetchDailies(setDailies, setCurrent);  
    },[]);

    function handleClick(event){
        let currentDaily;
        for(let i = 0; i < daylies.length ; i++){
            if(daylies[i].Title === event.target.id){
                currentDaily = daylies[i];
                //console.log(daylies[i]);
                //currentDaily.Title = daylies[i].Title;
                // currentDaily.DailyText = daylies[i].DailyText;
            }
        }
        setCurrent(currentDaily);
        console.log(current);
    }

    return (
        <div id = "ViewDaily" style = {outerBoxStyle()} >
            <Grid container spacing={20} >
                <Grid item xs >
                    <Paper style = {titleBoxStyle()}>
                        <div id = "titleContainer" style = {{leftMargin: '30px',}}>
                            {
                            daylies.length ?
                            daylies.map(daylies =>(

                                <div onClick = {handleClick}>
                                    <h3 id = {daylies.Title} style = {{textAlign: 'center'}}>{daylies.Title}</h3>
                                    {/* {daylies.DailyText} */}
                                </div>
                                
                            ))
                            :
                            <h3>loading</h3>

                            }
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs >
                    <Paper style = {dailyBoxStyle()}>
                        <div id = "dailyContainer" style = {{leftMargin: '30px'}}>
                            {
                                current ? 
                                <div style = {{textAlign: 'center'}}>
                                    {console.log(current.Text)}
                                    <h1>{current.Title}</h1> 
                                    <p >{current.DailyText}</p> 
                                </div>
                                : 
                                <h1>Dailies</h1>
                            }
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default ParentViewDaily;