import * as React from 'react';
import { Card, Grid, Typography,Button,CardActions,CardContent,TextField,MenuItem,InputLabel,Select, FormControl } from '@mui/material';

export default function ContractInformationForm(){
    const [ci,setCI]=React.useState('');
    const handleci=(e)=>{
        setCI(e.target.value)
    };
    const [icn,seticn]=React.useState('');
    const handleicn=(e)=>{
        seticn(e.target.value)
    };
    const [cs,setcs]=React.useState('');
    const handlecs=(e)=>{
        setcs(e.target.value)
    };
    const [pm,setpm]=React.useState('');
    const handlepm=(e)=>{
        setpm(e.target.value)
    };

    return(
        <>
            <div>
                <Grid container columnSpacing={1} rowSpacing={1} >
                    <Grid item xs={6}>
                        <FormControl fullWidth>
                            <InputLabel id='ci-label'>Contract Information</InputLabel>
                            <Select
                            labelId='ci-label'
                            id="contractinfo-select"
                            value={ci}
                            label="Contract Information"
                            onChange={handleci}
                            >
                                <MenuItem value={1}>male</MenuItem>
                                <MenuItem value={2}>female</MenuItem>
                                <MenuItem value={3}>others</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth>
                            <InputLabel id='icn-label'>Insurance company name</InputLabel>
                            <Select
                            labelId='icn-label'
                            id="insurancename-select"
                            value={icn}
                            label="Insurance company name"
                            onChange={handleicn}
                            >
                                <MenuItem value={1}>test1</MenuItem>
                                <MenuItem value={2}>test2</MenuItem>
                                <MenuItem value={3}>test3</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth>
                            <InputLabel id='cs-label'>Contract status</InputLabel>
                            <Select
                            labelId='cs-label'
                            id="contractstatus-select"
                            value={cs}
                            label="Contract Status"
                            onChange={handlecs}
                            >
                                <MenuItem value={1}>m</MenuItem>
                                <MenuItem value={2}>f</MenuItem>
                                <MenuItem value={3}>o</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth>
                            <InputLabel id='pm-label'>Payment Method</InputLabel>
                            <Select
                            labelId='pm-label'
                            id="paymentmethod-select"
                            value={pm}
                            label="Payment Method"
                            onChange={handlepm}
                            >
                                <MenuItem value={1}>Credit card</MenuItem>
                                <MenuItem value={2}>Account transfer</MenuItem>
                                <MenuItem value={3}>o</MenuItem>
                            </Select>
                        </FormControl>                   
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="outlined-basic" label="Contract manager number" variant="outlined" fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="outlined-basic" label="Product name" variant="outlined" fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            id="date"
                            label="Birthday"
                            type="date"
                            defaultValue=""
                            fullWidth
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={7}>
                        <TextField
                            id="telphone-number"
                            label="Telephone Number"
                            type="number"
                            placeholder='99127909'
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={5}>
                        <TextField
                                id="email-id"
                                label="Email"
                                type="email"
                                placeholder='abc@gg.com'
                                fullWidth
                            />
                    </Grid>
                    <Grid item xs={7}>
                        <TextField id="outlined-basic" label="Address 1" variant="outlined" fullWidth/>
                    </Grid>
                    <Grid item xs={5}>
                        <TextField id="outlined-basic" label="Postal code" variant="outlined" fullWidth type="number" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="outlined-basic" label="Address 2" variant="outlined" fullWidth/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="outlined-basic" label="Address 3" variant="outlined" fullWidth/>
                    </Grid>
                    <Grid item xs={7}>
                        <TextField id="outlined-basic" label="Address 4" variant="outlined" fullWidth/>
                    </Grid>
                    <Grid item xs={5}>
                        <TextField id="outlined-basic" label="Profession" variant="outlined" fullWidth/>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}