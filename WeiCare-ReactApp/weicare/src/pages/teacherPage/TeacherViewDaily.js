import React from "react";
import { Card, Form, Input, Button } from '../../components/AuthForm';


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