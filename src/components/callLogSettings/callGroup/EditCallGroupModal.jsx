import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid, TextField } from '@mui/material';
import CustomTextField from '../../formikInputs/CustomTextField';
import CustomSelect from '../../formikInputs/CustomSelect';
import { Form, Formik, useFormikContext } from 'formik';
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

export default function EditCallGroupModal({ openModal, handleModalChange, data }) {

    //initialValues = { id:1, name:"name" }
    const initialValues = data;

    const axiosFetch = AxiosFetch();

    const handleSubmit = async (values) => {
        if(values && !values.id){
            const response = await axiosFetch.post('/callLogGroup', {name:values.name, registerUserId:"3603"});
            if(response.status === 200){
                window.alert("Saved Successfully");
            }
            else{
                window.alert("Error encountered");
            }
        }
        else{
            const response = await axiosFetch.put(`/callLogGroup/${values.id}`, {name:values.name, modifyUserId:"3703"});
            if(response.status === 200){
                window.alert("Group updated Successfully");
            }
            else{
                window.alert("Error encountered");
            }
        }
        handleModalChange();
    }

    return (
            <Modal
                open={openModal}
                onClose={handleModalChange}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Formik
                    enableReinitialize={true}
                    initialValues={initialValues}
                    // validationSchema={formValidation}
                    onSubmit={(values) => {
                        handleSubmit(values)
                    }}
                >
                    <Form>

                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Call Log Group
                            </Typography>
                            <Grid container spacing={1} justifyContent={"center"} id="modal=modal-description">
                                <Grid item xs={4}>
                                    <CustomTextField mode="read" data={{ name: "id", label: "Group ID" }} disabled/>
                                </Grid>
                                <Grid item xs={4}>
                                    <CustomTextField data={{ name: "name", label: "Group Name" }} />
                                </Grid>
                                <Grid item xs={4}>
                                <Button type="submit" size="large" variant="contained" fullWidth>Save</Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Form>
                </Formik>
            </Modal>
    );
}
