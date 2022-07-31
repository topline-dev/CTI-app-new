import React from 'react';
import { Card, Grid, Typography, Button, CardContent, TextField, Stack } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Field, FieldArray, FastField } from 'formik';
import BasicSelect from '../newcustomer/inputs/BasicSelect';

import CustTextField from './custItems/custTextfield';
import CustomerGroupSelect from './custItems/customerGroupSelect';

export default function CustForm(props) {
    const sexList = ['male', 'female', 'other'];
    const firstPersonList = ['aaa', 'bbb', 'ccc'];
    const secondPersonList = ['111', '222', '333'];
    const customerGroupList = [1, 2, 3];
    const customerProjectList = ['prj1', 'prj2', 'prj3'];

    // const textField = (props) => {
    //     return(
    //         <>
    //             <TextField
    //                 {...props}
    //                 variant="outlined"
    //                 fullWidth    
    //             />
    //         </>
    //     )
    // }


    const customSelect =(props) =>{
        return(
            <>
                <BasicSelect
                    {...props}
                />
            </>
        )
    }

    return (
        <>
            <Card sx={{ minWidth: 275 }} elevation={4} >
                <CardContent >
                    <Typography sx={{ fontSize: 15 }} color="black" style={{ fontWeight: "bold" }} align="center" gutterBottom>
                        Customer Information
                    </Typography>
                    <Grid container columnSpacing={1} rowSpacing={1}>
                        <Grid item xs={4}>
                            <CustTextField data= {{name:"customerLastName", label:"Last Name"}}/>
                        </Grid>
                        <Grid item xs={4}>
                            <CustTextField data= {{name:"customerFirstName", label:"First Name"}}/>
                        </Grid>
                        <Grid item xs={4}>
                        <CustTextField data= {{name:"customerSex", label:"Sex"}}/>
                        </Grid>
                        <Grid item xs={4}>
                        <CustTextField data= {{name:"customerLastRuby", label:"Last Kana Name"}}/>
                        </Grid>
                        <Grid item xs={4}>
                        <CustTextField data= {{name:"customerFirstRuby", label:"First Kana Name"}}/>
                        </Grid>
                        <Grid item xs={4}>
                        <CustTextField data= {{name:"customerBirthday", label:"Birthday"}}/>
                            {/* <Field
                                name='custForm.customerBirthday'
                                label="Birthday"
                                type="date"
                                as={textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            /> */}
                        </Grid>
                        {/* <Grid item xs={12}>
                            <FieldArray name='custForm.customerTelephone'>
                                {
                                    (props) => {
                                        //console.log(props);
                                        const { push, remove, form } = props;
                                        const { values } = form;
                                        const { custForm } = values;
                                        const { customerTelephone } = custForm;
                                        //console.log(customerTelephone);
                                        return (
                                            <Stack direction="row" spacing={0}>
                                                {
                                                    customerTelephone.map((number, index) => (
                                                        <div key={index}>
                                                            {index === 0 && (
                                                                <Grid container columnSpacing={0}>
                                                                    <Grid item xs={12}>
                                                                        <Field
                                                                            name={`custForm.customerTelephone[${index}]`}
                                                                            label="Telephone Number "
                                                                            type="number"
                                                                            as={textField}
                                                                        />
                                                                        <Button variant="contained" onClick={() => push('')}>ADD</Button>
                                                                    </Grid>
                                                                </Grid>
                                                            )}
                                                            {index !== 0 && (
                                                                <Grid container columnSpacing={0}>
                                                                    <Grid item xs={11}>
                                                                        <Field
                                                                            name={`custForm.customerTelephone[${index}]`}
                                                                            label="Telephone Number "
                                                                            type="number"
                                                                            as={textField}
                                                                        />
                                                                    </Grid>
                                                                    <Grid item xs={1}>
                                                                        <Button
                                                                            variant='contained'
                                                                            size='small'
                                                                            onClick={() => remove(index)}
                                                                            style={{ minWidth: "1px", minHeight: "1px", backgroundColor: "red", padding: "2px" }}
                                                                        >
                                                                            <DeleteIcon fontSize="small" />
                                                                        </Button>
                                                                    </Grid>
                                                                </Grid>
                                                            )}
                                                        </div>
                                                    ))
                                                }

                                            </Stack>
                                        )
                                    }
                                }
                            </FieldArray>
                        </Grid>*/}
                        <Grid item xs={6}>
                        <CustTextField data= {{name:"telephone", label:"Telephone"}} type="number"/>
                        </Grid>
                        <Grid item xs={6}>
                        <CustTextField data= {{name:"customerEmail", label:"Email"}} type="email"/>
                        </Grid>
                        <Grid item xs={7}>
                        <CustTextField data= {{name:"customerAddress1", label:"Address 1"}}/>
                        </Grid>
                        <Grid item xs={5}>
                        <CustTextField data= {{name:"customerZipCode", label:"Zipcode"}} type="number"/>
                        </Grid>
                        <Grid item xs={6}>
                        <CustTextField data= {{name:"customerAddress2", label:"Address 2"}}/>
                        </Grid>
                        <Grid item xs={6}>
                        <CustTextField data= {{name:"customerAddress3", label:"Address 3"}}/>
                        </Grid>
                        <Grid item xs={7}>
                        <CustTextField data= {{name:"customerAddress4", label:"Address 4"}}/>
                        </Grid>
                        <Grid item xs={5}>
                        <CustTextField data= {{name:"customerBusinessType", label:"Profession"}}/>
                        </Grid>
						{/* <Grid item xs={6}>
                        <CustomerGroupSelect/>
                        </Grid> */}
                        {/* <Grid item xs={6}>
                        <CustTextField data= {{name:"customerFirstRuby", label:"First Kana Name"}}/>
                            <Field
                                name="custForm.firstPersonInCharge"
                                component={customSelect}
                                list={firstPersonList}
                                label="First Person in charge"
                            />
                        </Grid>
                        <Grid item xs={6}>
                        <CustTextField data= {{name:"customerFirstRuby", label:"First Kana Name"}}/>
                            <Field
                                name="custForm.secondPersonInCharge"
                                component={customSelect}
                                list={secondPersonList}
                                label="Second Person in charge"
                            />
                        </Grid> */}
                        <Grid item xs={6}>
                            <Field
                                name="custData.customerGroupId"
                                component={customSelect}
                                label="Customer Group"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Field
                                name="custData.customerProjectGroup"
                                component={customSelect}
                                label="Project Group"
                            />
                        </Grid>
                        <Grid item xs={6}>
                        <CustTextField data= {{name:"customerRegisterUserId", label:"Author"}} value = "3603" disabled/>
                        </Grid>
                        <Grid item xs={6}>
                        <CustTextField data= {{name:"customerModifyUserId", label:"Last Updated by"}}  value = "3603" disabled/>
                        </Grid> 
                        <Grid item xs={6}>
                        <CustTextField data= {{name:"customerMemo1", label:"Memo 1"}} multiline rows={3}/>
                        </Grid>
                        <Grid item xs={6}>
                        <CustTextField data= {{name:"customerMemo2", label:"Memo 2"}} multiline rows ={3}/>
                        </Grid>
                    </Grid>
                </CardContent>
                {/* <CardActions>
        <Button size="small">Learn More</Button>
        </CardActions>*/}
            </Card>
        </>
    )
}
