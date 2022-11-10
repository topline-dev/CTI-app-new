import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid } from '@mui/material';
import CustomTextField from '../../../formikInputs/CustomTextField';
import CustomSelect from '../../../formikInputs/CustomSelect';
import { Form, Formik, useFormikContext } from 'formik';
import { AxiosFetch } from '../../../AxiosFetch';
import { useLocation } from "react-router";
import CallGroupSelect from './helper/CallGroupSelect';
import CallFlagSelect from './helper/CallFlagSelect';
import TitleSelect from './helper/TitleSelect';
import PhaseSelect from './helper/PhaseSelect';
import CallerSelect from './helper/CallerSelect';

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

    const [callGroup, setCallGroup] = useState();

    const location = useLocation();
    const customerId = location.state.customerId;

    const initialValues = {
        title:"",
        phase:"",
        caller:"",
        callLogGroup:{},
        callFlag:{},
        user:{userId:"admin"},
        customer:{customerId:customerId}
    };

    const handleSubmit = async (values) => {
        if (values) {
            console.log(values);
            const response = await axiosFetch.post('/ticket', values );
            if (response.status === 200) {
                window.alert("Saved Successfully");
            }
            else {
                window.alert("Error encountered");
            }
        }
        handleModalChange();
    }

    const FormObserver = () => {
		const { values } = useFormikContext();
		useEffect(() => {
			setCallGroup(values.callLogGroup.id || "");
		}, [values.callLogGroup.id]);
		return null;
	};

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
                        <FormObserver/>
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Create New Ticket
                            </Typography>
                            <Grid container spacing={1} justifyContent={"center"} id="modal=modal-description">
                                <Grid item xs={4}>
                                    <TitleSelect name="title"/>
                                </Grid>
                                <Grid item xs={4}>
                                <PhaseSelect name="phase"/>
                                </Grid>
                                <Grid item xs={4}>
                                <CallerSelect name="caller"/>
                                </Grid>
                                <Grid item xs={4}>
                                <CallGroupSelect
                                        // mode={readMode}
                                        name="callLogGroup.id"
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <CallFlagSelect
                                        name="callFlag.id"
                                        callGroup={callGroup}
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <Button type="submit" size="large" variant="contained" fullWidth>Save</Button>
                                </Grid>
                                <Grid item xs={12}>
                                    <CustomTextField data={{ name: "memo", label: "Memo" }} multiline rows={5} fullWidth />
                                </Grid>
                            </Grid>
                        </Box>
                    </Form>
                </Formik>
            </Modal>
        </div>
    );
}
