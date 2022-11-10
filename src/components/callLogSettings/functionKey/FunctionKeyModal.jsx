import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid } from '@mui/material';
import { Formik, Form } from "formik";
import CustomTextField from '../../formikInputs/CustomTextField';
import { useFormikContext } from 'formik';
import { AxiosFetch } from '../../AxiosFetch';
import CallFlagSelect from '../helper/CallFlagSelect';
import CallGroupSelect from '../helper/CallGroupSelect';
import CustomSelect from '../../formikInputs/CustomSelect';

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

export default function FunctionKeyModal({ openModal, handleModalChange, data, setAlert, refreshList }) {

    //initialValues Structure
    // {
    //     id:1,
    //     name:"F3",
    //     callGroup:{id:},
    //     callFlag:{id:}
    // }
    const initialValues = data;

    const [callGroup, setCallGroup] = useState();

    const FormObserver = () => {
        const { values } = useFormikContext();
        useEffect(() => {
            setCallGroup(values.callLogGroup.id || "");
        }, [values.callLogGroup.id]);
        return null;
    };

    const axiosFetch = AxiosFetch();

    const handleSubmit = async (values) => {
        if (values && !values.id) {
            const response = await axiosFetch.post('/functionKey',  values);
            if (response.status === 200) {
                setAlert({ open: true, message: "Function Key Saved", type: "success" });
            }
            else {
                setAlert({ open: true, message: "Something went wrong", type: "error" });
            }
        }
        else {
            const response = await axiosFetch.put(`/functionKey/${values.id}`, values);
            if (response.status === 200) {
                setAlert({ open: true, message: "Function Key Updated", type: "success" });
            }
            else {
                setAlert({ open: true, message: "Error!", type: "error" });
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
                        <FormObserver />
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Call Log Flag
                            </Typography>
                            <Grid container spacing={1} justifyContent={"center"} id="modal=modal-description">
                                <Grid item xs={3}>
                                    {/* <CustomTextField mode="read" data={{ name: "name", label: "Function Key" }} /> */}
                                    <CustomSelect
                                        data={{
                                            name: "name",
                                            label: "Function Key",
                                            list: [
                                                { value: "F3", name: "F3" },
                                                { value: "F4", name: "F4" },
                                                { value: "F6", name: "F6" },
                                                { value: "F7", name: "F7" },
                                                { value: "F8", name: "F8" },
                                                { value: "F9", name: "F9" },
                                            ],
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={3}>
                                    <CallGroupSelect
                                        // mode={readMode}
                                        name="callLogGroup.id"
                                    />
                                </Grid>
                                <Grid item xs={3}>
                                    <CallFlagSelect
                                        name="callFlag.id"
                                        callGroup={callGroup}
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
