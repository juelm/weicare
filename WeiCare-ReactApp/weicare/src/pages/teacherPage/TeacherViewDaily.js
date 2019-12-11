import React from "react";
import { Card, Logo, Form, Input, Button, Error, } from '../../components/AuthForm';


function TeacherViewDaily() {
    return (
        <div style={{ margin: '175px 40%' }}>
            <Card>
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
            </Card>
        </div>
    );
}


export default TeacherViewDaily;