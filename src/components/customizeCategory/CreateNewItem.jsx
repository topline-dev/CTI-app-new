import React from 'react';
import { Card,CardContent,Typography,CardActions,Button, Grid, Stack, TextField } from '@mui/material';
import ButtonAppBar from '../newcustomer/Appbar';
import { Box, Container } from '@mui/system';
import BasicSelect from '../newcustomer/inputs/BasicSelect';
import { Formik,Form, Field,FastField, useFormikContext } from 'formik';


export default function CreateNewItem() {
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
       attributeName:"",
       attributeNameJap:"",
       tabDisplay:"",
       displayType:"",
       attributeMemo:"",
   }
  return (
    <div>
    <ButtonAppBar title="New Category Item"/>
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
                    {/* <Grid item xs={6}>
                        <Field component={customSelect} name="tabDisplay" label="Group Name" list={["possible","impossible"]} />
                    </Grid> */}
                    <Grid item xs={6}>
                        <Field component={customSelect} name="categoryName" label="Category Name" list={["possible","impossible"]}/>
                    </Grid>
                    <Grid item xs={6}>
                        <Field as={textField} name="attributeName" label="Attribute name" />
                    </Grid>
                    <Grid item xs={6}>
                        <Field as={textField} name="attributeNameJap" label="Attribute name (japanese)" />
                    </Grid>
                    <Grid item xs={6}>
                        <Field component={customSelect} name="tabDisplay" label="Display" list={["possible","impossible"]} />
                    </Grid>
                    <Grid item xs={6}>
                        <Field component={customSelect} name="displayType" label="Display Type" list={["text","text box","select","checkbox","radio","date"]}/>
                    </Grid>
                    {/* <Grid item xs={6}>
                        <Field as={textField} name="categoryName" label="Height" />
                    </Grid>
                    <Grid item xs={6}>
                        <Field as={textField} name="categoryName" label="Width" />
                    </Grid> */}
                    <Grid item xs={6}>
                        <Field as={textField} name="attributeMemo" label="Memo" multiline rows={3}/>                    
                    </Grid>
                    {/* <Grid item xs={12}>
                        <FormControlLabel control={<Checkbox  />} label="Mandatory" />
                    </Grid> */}
                   
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
