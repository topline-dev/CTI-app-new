import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid } from '@mui/material';
import CustomTextField from '../../formikInputs/CustomTextField';
import { Form, Formik } from 'formik';
import { AxiosFetch } from '../../AxiosFetch';
import CallGroupSelect from '../helper/CallGroupSelect'

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

export default function EditCallFlagModal({ openModal, handleModalChange, data, setAlert, refreshList }) {

    //initialValues = {id:1, name:"flag", callloggroup.id:""}
    const initialValues = data;

    const axiosFetch = AxiosFetch();

    const handleSubmit = async (values) => {
        if (values && !values.id) {
            const response = await axiosFetch.post('/callFlag', { name: values.name, callLogGroup: { id: values.callLogGroup.id }, registerUserId: "3603" });
            if (response.status === 200) {
                setAlert({open:true, message:"Call Flag Saved", type: "success"});
            }
            else {
                setAlert({open:true, message:"Something went wrong", type: "error"});
            }
        }
        else {
            const response = await axiosFetch.put(`/callFlag/${values.id}`, { name: values.name, callLogGroup: { id: values.callLogGroup.id }, modifyUserId: "3603" });
            if (response.status === 200) {
                setAlert({open:true, message:"Call Group Updated", type: "success"});
            }
            else {
                setAlert({open:true, message:"Error!", type: "error"});
            }
        }
        handleModalChange();
        refreshList();
    }


    return (
        <div>
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
                                Call Log Flag
                            </Typography>
                            <Grid container spacing={1} justifyContent={"center"} id="modal=modal-description">
                                <Grid item xs={3}>
                                    <CustomTextField mode="read" data={{ name: "id", label: "Flag ID" }} disabled />
                                </Grid>
                                <Grid item xs={3}>
                                    <CustomTextField data={{ name: "name", label: "Flag Name" }} />
                                </Grid>
                                <Grid item xs={3}>
                                    <CallGroupSelect
                                        // mode={readMode}
                                        name="callLogGroup.id"
                                    />
                                </Grid>
                                <Grid item xs={3}>
                                <Button type="submit" size="large" variant="contained" fullWidth>Save</Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Form>
                </Formik>
            </Modal>
        </div>
    );
}
