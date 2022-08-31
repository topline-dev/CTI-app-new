import React from 'react'
import { Card,CardContent,Button, Grid } from '@mui/material';
import ButtonAppBar from '../customerRelated/Appbar';
import { Container } from '@mui/system';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function CustomizeCategory() {
    function createData(name, calories, fat, carbs, protein,extra) {
        return { name, calories, fat, carbs, protein ,extra};
      }
      
      const rows = [
        createData('Contract information', 159, 6.0, 24, 4.0,"edit"),
        createData('shipping box', 237, 9.0, 37, 4.3),
        createData('Contract information', 159, 6.0, 24, 4.0),
        createData('shipping box', 237, 9.0, 37, 4.3),
        createData('Contract information', 159, 6.0, 24, 4.0),
        createData('shipping box', 237, 9.0, 37, 4.3),
      ];
  return (
    <div>
        <ButtonAppBar title="Customize Category"/>
        <br/><br/>
        <Container maxWidth="xl">
        <Card elevation={4}>
            <CardContent>
                <Grid container columnSpacing={1} rowSpacing={1} >
                    <Grid item xs={12} >
                        <Container sx={{display:"flex",justifyContent:"flex-end"}}>
                            <FormControl sx={{width:"150px"}}>
                                <InputLabel id="demo-simple-select-label">Display type</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                label="Display Type"
                                name='displayType'
                                >
                                <MenuItem value={0}>Display only</MenuItem>
                                <MenuItem value={1}>Hide only</MenuItem>
                                </Select>
                            </FormControl> 
                            <Button href="/newCustomizeCategory" variant="contained" size="small">New</Button>
                            <Button variant="contained" sx={{backgroundColor:"error.light"}} color="error" size="small">Cancel</Button>
                        </Container> 
                    </Grid>
                    <Grid item xs={12}>
                        <TableContainer component={Paper} >
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell >Category Name</TableCell>
                                    <TableCell >Display/Hide</TableCell>
                                    <TableCell >Remarks</TableCell>
                                    <TableCell >Number Of Columns</TableCell>
                                    <TableCell >Operations</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell >{row.calories}</TableCell>
                                    <TableCell >{row.fat}</TableCell>
                                    <TableCell >{row.carbs}</TableCell>
                                    <TableCell >{row.protein}</TableCell>
                                    <TableCell >{row.extra}</TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </CardContent>
            {/* <CardActions>
                <Button type='submit' variant='contained'  size="large" >Save</Button>
                <Button type='submit' variant='contained'  size="large" >Save and New</Button>
                <Button variant='contained' size="large" sx={{backgroundColor:"error.light"}} color="error">Cancel</Button>
            </CardActions> */}
        </Card>
        </Container>
       
    </div>
  )
}
