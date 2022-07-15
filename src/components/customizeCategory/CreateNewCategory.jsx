import React from 'react';
import { Card,CardContent,Typography,CardActions,Button, Grid, Stack, TextField } from '@mui/material';
import ButtonAppBar from '../newcustomer/Appbar';
import { Box, Container } from '@mui/system';
import BasicSelect from '../newcustomer/inputs/BasicSelect';
import { Formik,Form, Field,FastField, useFormikContext } from 'formik';


export default function CreateNewCategory() {
    const textField = (props) => {
        return(
            <>
                <TextField
                    {...props}
                    variant="outlined"
                    fullWidth    
                />
            </>
        )
    }
    const customSelect =(props) =>{
        return(
            <>
                <BasicSelect
                    {...props}
                />
            </>
        )
    }
   const initialValues={
        categoryName:"",
        categoryRemarks:"",
        numberOfColumn:"",
        tabDisplay:"",
        displayHide:"",
    }
  return (
    <div>
    <ButtonAppBar title="New Category"/>
    <br/><br/>
    <Formik
      //innerRef={ref}
      initialValues={initialValues}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
        console.log(values);
      }}
    >
      <Form>
        <Container maxWidth="xl">
            <Card elevation={4}>
                <CardContent>
                <Grid container columnSpacing={1} rowSpacing={1}>
                    <Grid item xs={12}>
                        <Field as={textField} name="categoryName" label="New category name" />
                    </Grid>
                    <Grid item xs={12}>
                        <Field as={textField} name="categoryRemarks" label="Remarks" multiline rows={3}/>                    
                    </Grid>
                    <Grid item xs={12}>
                        <Field as={textField} name="numberOfColumn" label="Number of Displayed Column" type="number"/>
                    </Grid>
                    <Grid item xs={6}>
                        <Field component={customSelect} name="tabDisplay" label="Tab display" list={["possible","impossible"]} />
                    </Grid>
                    <Grid item xs={6}>
                        <Field component={customSelect}name="tabDisplay" label="Tab display" list={["possible","impossible"]}/>
                    </Grid>
                </Grid>
                </CardContent>
                <CardActions>
                    <Button type='submit' variant='contained'  size="large" >Save</Button>
                    <Button type='submit' variant='contained'  size="large" >Save and New</Button>
                    <Button variant='contained' size="large" sx={{backgroundColor:"error.light"}} color="error">Cancel</Button>
                </CardActions>
            </Card>
        </Container>
      </Form>
    </Formik>   
   
    </div>
  )
}
