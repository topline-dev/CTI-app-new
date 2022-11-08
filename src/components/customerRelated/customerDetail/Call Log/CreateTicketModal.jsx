import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid } from '@mui/material';
import CustomTextField from '../../../formikInputs/CustomTextField';
import CustomSelect from '../../../formikInputs/CustomSelect';
import { useFormikContext } from 'formik';
import { AxiosFetch } from '../../../AxiosFetch';

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

export default function CreateTicketModal({ openModal, handleModalChange }) {

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
        window.alert("Created ticket with ticket ID 12");
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
                        Create New Ticket
                    </Typography>
                    <Grid container spacing={1} justifyContent={"center"} id="modal=modal-description">
                        <Grid item xs={4}>
                            <CustomSelect
                                data={{
                                    name: "CallLog.title",
                                    label: "Title",
                                    list: [
                                        { value: 1, name: "Title 1" },
                                        { value: 2, name: "Title 2" },
                                        { value: 3, name: "Title 3" },
                                        { value: 4, name: "Title 4" }
                                    ]
                                }}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <CustomSelect
                                data={{
                                    name: "CallLog.phase",
                                    label: "Phase",
                                    list: [
                                        { value: 1, name: "Phase 1" },
                                        { value: 2, name: "Phase 2" },
                                        { value: 3, name: "Phase 3" },
                                        { value: 4, name: "Phase 4" }
                                    ]
                                }}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <CustomSelect
                                data={{
                                    name: "CallLog.caller",
                                    label: "Caller",
                                    list: [
                                        { value: 1, name: "Caller 1" },
                                        { value: 2, name: "Caller 2" },
                                        { value: 3, name: "Caller 3" },
                                        { value: 4, name: "Caller 4" }
                                    ]
                                }}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <CustomSelect
                                data={{
                                    name: "CallLog.callLogGroup.id",
                                    label: "Call Group",
                                    list: [
                                        { value: 1, name: "Call Group 1" },
                                        { value: 2, name: "Call Group 2" },
                                        { value: 3, name: "Call Group 3" },
                                        { value: 4, name: "Call Group 4" }
                                    ]
                                }}
                            />
                        </Grid>
                        <Grid item xs={4}><CustomSelect
                            data={{
                                name: "CallLog.callFlag.id",
                                label: "Call Flag",
                                list: [
                                    { value: 1, name: "Call Flag 1" },
                                    { value: 2, name: "Call Flag 2" },
                                    { value: 3, name: "Call Flag 3" },
                                    { value: 4, name: "Call Flag 4" }
                                ]
                            }}
                        />
                        </Grid>
                        <Grid item xs={4}>
                            <Button id="submitTicket" name="submitTicket" size="large" variant="contained" fullWidth onClick={handleCreateTicket}>Create</Button>
                        </Grid>
                        <Grid item xs={12}>
                            <CustomTextField data={{ name: "memo", label: "Memo" }} multiline rows={5} fullWidth />
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </div>
    );
}