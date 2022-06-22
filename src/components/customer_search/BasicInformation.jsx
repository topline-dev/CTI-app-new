import '../../App.css';
import React from 'react';
import { Grid,TextField } from '@mui/material';
export default function BasicInformation(){
return(
    <>
        <Grid container spacing={2}>
            <Grid item xs={3}>
                <TextField
                    id="outlined-basic" 
                    name='ID' 
                    label="Customer ID" 
                    variant="outlined" 
                    fullWidth                                                    
                />                                  
            </Grid>
            <Grid item xs={3}>
                <TextField
                    id="outlined-basic" 
                    name='lastname' 
                    label="Last Name" 
                    variant="outlined" 
                    fullWidth                                                    
                />                                  
            </Grid>
            <Grid item xs={3}>
                <TextField
                    id="outlined-basic" 
                    name='firstname' 
                    label="First Name" 
                    variant="outlined" 
                    fullWidth                                                    
                />                                  
            </Grid>
            <Grid item xs={3}>
                <TextField
                    id="outlined-basic" 
                    name='datecreated' 
                    label="Date Created" 
                    variant="outlined" 
                    fullWidth     
                    type="date" 
                    InputLabelProps={{
                        shrink: true,
                        }}                                               
                />                                  
            </Grid>
            <Grid item xs={3}>
                <TextField
                    id="outlined-basic" 
                    name='information 1' 
                    label="Information 1" 
                    variant="outlined" 
                    fullWidth                                                    
                />                                  
            </Grid>
            <Grid item xs={3}>
                <TextField
                    id="outlined-basic" 
                    name='firstuser' 
                    label="First User" 
                    variant="outlined" 
                    fullWidth                                                    
                />                                  
            </Grid>
            <Grid item xs={3}>
                <TextField
                    id="outlined-basic" 
                    name='usermodified' 
                    label="User Modified" 
                    variant="outlined" 
                    fullWidth                                                    
                />                                  
            </Grid>
            <Grid item xs={3}>
                <TextField
                    id="outlined-basic" 
                    name='datemodified' 
                    label="Date Modified" 
                    variant="outlined" 
                    fullWidth   
                    type="date" 
                    InputLabelProps={{
                        shrink: true,
                        }}                                                
                />                                  
            </Grid>
            <Grid item xs={3}>
                <TextField
                    id="outlined-basic" 
                    name='information2' 
                    label="Information 2" 
                    variant="outlined" 
                    fullWidth                                                    
                />                                  
            </Grid>
            <Grid item xs={3}>
                <TextField
                    id="outlined-basic" 
                    name='seconduser' 
                    label="Second User" 
                    variant="outlined" 
                    fullWidth                                                    
                />                                  
            </Grid>
            <Grid item xs={3}>
                <TextField
                    id="outlined-basic" 
                    name='extra' 
                    label="extra" 
                    variant="outlined" 
                    fullWidth                                                    
                />                                  
            </Grid>
            <Grid item xs={3}>
                <TextField
                    id="outlined-basic" 
                    name='extra' 
                    label="extra" 
                    variant="outlined" 
                    fullWidth                                                    
                />                                  
            </Grid>
        </Grid>                             
    </>
)
}