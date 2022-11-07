import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
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

export default function EditCallFlagModal({ openModal, handleModalChange, data }) {

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
                            <TextField id="id" label="Id" variant="outlined" value={data ? data.id : ""} disabled />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField id="name" label="Name" variant="outlined" value={data ? data.name : ""} />
                        </Grid>
                        <Grid item xs={3}>
                            {/* <TextField id="id" label="Group Name" variant="outlined" value={data ? data.groupname : ""} /> */}
                            {/* <InputLabel id="groupname-label">Group</InputLabel> */}
                            <Select
                                // labelId="groupname-label"
                                id="groupname"
                                value={data ? data.groupname : "Group 1"}
                                label="Grou"
                                // onChange={handleChange}
                                fullWidth
                            >
                                <MenuItem value={"Group 1"}>Group 1</MenuItem>
                                <MenuItem value={"Group 2"}>Group 2</MenuItem>
                                <MenuItem value={"Group 3"}>Group 3</MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={3}>
                            <Button id="submitTicket" name="submitTicket" size="large" variant="contained" fullWidth onClick={handleCreateTicket}>Save</Button>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </div>
    );
}
