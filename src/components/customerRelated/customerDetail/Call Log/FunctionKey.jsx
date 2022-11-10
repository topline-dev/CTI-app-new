import * as React from 'react';
import { Button, ButtonGroup, Divider } from '@mui/material';
import { AxiosFetch } from '../../../AxiosFetch'
import Alert from '../../../Alert';
import { useState } from 'react';
import { useLocation } from 'react-router';


export default function FunctionKey() {

    const axiosFetch = AxiosFetch();

    const location = useLocation();
    const customerId = location.state.customerId;

    //Alert
    const [alert, setAlert] = useState({ open: false, type: "success", message: "Success" });
    const handleAlert = () => {
        setAlert(!alert);
    }

    const handleSubmit = async (id) => {
        const response = await axiosFetch.get(`/functionKey/${id}`);
        if(response.status === 200 && response.data){
            const response1 = await axiosFetch.post('/ticket', {
                title:"Title St.",
                caller:"Caller St.",
                phase:"Phaser",
                callLogGroup:{
                    id:response.data.callLogGroup.id
                },
                callFlag:{
                    id:response.data.callFlag.id
                },
                customer:{
                    customerId:customerId
                },
                user:{
                    userId:"admin"
                }
            });
            if(response1.status === 200){
                setAlert({open:true, message:"Ticket Saved", type: "success"});
            }
        }
        else{
            setAlert({open:true, message:"Error!", type: "error"});
        }
    }

    return (
        <div>
            <Alert data={alert} handleAlert={handleAlert}/>
            <ButtonGroup variant="outlined" aria-label="outlined primary button group" fullWidth>
                <Button onClick={() => handleSubmit(1)}>F3</Button>
                <Button onClick={() => handleSubmit(2)}>F4</Button>
                <Button onClick={() => handleSubmit(3)}>F6</Button>
                <Button onClick={() => handleSubmit(4)}>F7</Button>
                <Button onClick={() => handleSubmit(5)}>F8</Button>
                <Button onClick={() => handleSubmit(6)}>F9</Button>
            </ButtonGroup>
        </div>
    );
}