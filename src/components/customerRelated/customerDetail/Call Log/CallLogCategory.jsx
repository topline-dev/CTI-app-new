import { Button, Grid } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import CallLogTable from './CallLogTable';
import CreateTicketModal from './CreateTicketModal';

function CallLogCategory() {
    const [openModal, setOpenModal] = useState(false);

    const handleModalChange = () => {
        console.log(openModal);
        setOpenModal(!openModal);
    }

    return (
        <Grid container spacing={1} marginTop={1} justifyContent={"center"}>
            <CreateTicketModal openModal={openModal} handleModalChange={handleModalChange} />
            <Grid item xs={7} ></Grid>
            <Grid item xs={2.5} >
                <Button variant="contained" fullWidth onClick={handleModalChange}>New Ticket</Button>
            </Grid>
            <Grid item xs={2.5} >
                <Button variant="contained" fullWidth>Add Call Log</Button>
            </Grid>
            <Grid item xs={12}><CallLogTable /></Grid>
        </Grid>
    )
}

export default CallLogCategory