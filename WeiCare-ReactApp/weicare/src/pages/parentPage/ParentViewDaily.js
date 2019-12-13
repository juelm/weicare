import React, { useEffect, useState } from "react";
import { Card, Form, Input, Button } from '../../components/AuthForm';


function ParentViewDaily() {

    const[dailies, updateDailies] = useState();
    
    useEffect(() => {
        // let requestOptions = {
        //     mode: 'cors'
        // }

        fetch('http://localhost:8080/api/getDailies/all')
        .then(res => (res.json()))
        .then(res => res.DailyText)
        .then(res => updateDailies(res))
        .catch(err => console.log(err))
        
    });

    //console.log(dailies)

    return (
        <div style={{ margin: '175px 40%' }}>

            <h1>{dailies}</h1>
            {/* <Card>
                <Form>
                    <Input
                        type="day"
                        placeholder="Day" />
                    <Input
                        type="class"
                        placeholder="Class"
                    />
                    <Button>View Daily!</Button>
                </Form>
            </Card> */}
        </div>
    );
}

export default ParentViewDaily;