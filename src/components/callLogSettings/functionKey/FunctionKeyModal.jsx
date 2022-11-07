import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { Formik, Form } from "formik";
import CustomTextField from '../../formikInputs/CustomTextField';
import CustomSelect from '../../formikInputs/CustomSelect';
import { useFormikContext } from 'formik';
import { AxiosFetch } from '../../AxiosFetch';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

export default function FunctionKeyModal({ openModal, handleModalChange, data }) {

    //initialValues Structure
    // {
    //     id:1,
    //     name:"F3",
    //     callGroup:"",
    //     callFlag:""
    // }
    const initialValues = data;

    const handleSubmit = (values) => {
        console.log(values);
    }

    const axiosFetch = AxiosFetch();

    // const HandleCreateTicket1 = () => {
    //     const { values } = useFormikContext();
    //     useEffect(() => {
    //         const submitTicketAPI = async (CallLog) => {
    //             CallLog.user = {userId:"admin"}
    //             CallLog.customer = {customerId:1}
    //             const response = await axiosFetch.post(`/ticket`, CallLog)
    //         }
    //         if(values.CallLog){
    //             submitTicketAPI(values.CallLog)
    //         }

    //     }, [values.submitTicket])

    //     return null;

    // }

    const handleCreateTicket = () => {
        window.alert("Request completed");
        handleModalChange();
    }
    return (
        <div>
            <Formik
                enableReinitialize={true}
                initialValues={initialValues}
                // validationSchema={formValidation}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    console.log(values);
                    handleSubmit(values);
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                <Form>
                    {/* <HandleCreateTicket1/> */}
                    <Modal
                        open={openModal}
                        onClose={handleModalChange}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Call Log Flag
                            </Typography>
                            <Grid container spacing={1} justifyContent={"center"} id="modal=modal-description">
                                <Grid item xs={3}>
                                    <CustomTextField mode="read" data={{ name: "name", label: "Function Key" }} />
                                </Grid>
                                <Grid item xs={3}>
                                    <CustomSelect
                                        data={{
                                            name: "callGroup",
                                            label: "Call Group",
                                            list: [
                                                { value: 1, name: "Group 1" },
                                                { value: 2, name: "Group 2" },
                                                { value: 3, name: "Group 3" },
                                                { value: 4, name: "Group 4" }
                                            ]
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={3}>
                                    <CustomSelect
                                        data={{
                                            name: "callFlag",
                                            label: "Call Flag",
                                            list: [
                                                { value: 1, name: "Flag 1" },
                                                { value: 2, name: "Flag 2" },
                                                { value: 3, name: "Flag 3" },
                                                { value: 4, name: "Flag 4" }
                                            ]
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={3}>
                                    <Button type="Submit" id="submitTicket" name="submitTicket" size="large" variant="contained" fullWidth onClick={handleCreateTicket}>Save</Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Modal>
                </Form>
            </Formik>
        </div>
    );
}
