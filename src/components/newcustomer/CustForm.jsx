import React from 'react';
import { Card, Grid, Typography,Button,CardContent,TextField,Stack} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { FastField,FieldArray,Field } from 'formik';
import BasicSelect from './inputs/BasicSelect';

export default function CustForm(props) {
    const sexList=['male', 'female', 'other'];
    const firstPersonList=['aaa', 'bbb', 'ccc'];
    const secondPersonList=['111', '222', '333'];
    const customerGroupList=['grp1', 'grp2', 'grp3'];
    const customerProjectList=['prj1', 'prj2', 'prj3'];
    
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
    // const customSelect2 =(props) =>{
    //     return(
    //         <>
    //             <BasicSelect
    //                 {...props}
    //             />
    //             {console.log(props.field.value,'hhh')}
    //         </>
    //     )
    // }


  return (
    <>
    <Card sx={{ minWidth: 275 }} elevation={4} >
        <CardContent >
        <Typography sx={{ fontSize: 15 }} color="black" style={{fontWeight:"bold"}} align="center" gutterBottom>
            Customer Information
        </Typography>
        <Grid container columnSpacing={1} rowSpacing={1}>
            <Grid item xs={4}>
                <FastField
                    name='custForm.customerLastName'
                    label='Last Name'
                    as={textField}
                />
            </Grid>
            <Grid item xs={4}>
                <FastField
                    name='custForm.customerFirstName'
                    label='First Name'
                    as={textField}
                />
            </Grid>
            <Grid item xs={4}>
                <FastField 
                    name="custForm.customerSex" 
                    component={customSelect} 
                    list={sexList} 
                    label="Sex"
                />
            </Grid>
            <Grid item xs={3}>
                <FastField
                    name='custForm.customerLastRuby'
                    label='Last Kana Name'
                    as={textField}
                />
            </Grid>
            <Grid item xs={3}>
                <FastField
                    name='custForm.customerFirstRuby'
                    label='First Kana Name'
                    as={textField}
                />
            </Grid>
            <Grid item xs={6}>
            <FastField
                name='custForm.customerBirthday'
                label="Birthday"
                type="date"
                as={textField}
                InputLabelProps={{
                shrink: true,
                }}
            />
            </Grid>
            <Grid item xs={12}>
                <FieldArray name='custForm.customerTelephone'>
                    {
                        (props) => {
                            //console.log(props);
                            const {push,remove,form}=props;
                            const {values}=form;
                            const {custForm}=values;
                            const {customerTelephone}=custForm;
                            //console.log(customerTelephone);
                            return(
                                <Stack direction="row" spacing={0}>
                                {
                                    customerTelephone.map((number,index)=> (
                                        <div key={index}>
                                            {index===0 && (
                                                <Grid container columnSpacing={0}>
                                                    <Grid  item xs={12}>
                                                        <FastField
                                                            name={`custForm.customerTelephone[${index}]`}
                                                            label="Telephone Number "
                                                            type="number"
                                                            as={textField}
                                                        />
                                                         <Button  variant="contained" onClick={()=>push('')}>ADD</Button>
                                                    </Grid>
                                                </Grid>
                                            )}
                                            {index!==0 && (
                                                    <Grid container columnSpacing={0}>
                                                    <Grid  item xs={11}>
                                                        <FastField
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
                                                        onClick={()=>remove(index)}
                                                        style={{minWidth:"1px",minHeight:"1px",backgroundColor:"red",padding:"2px"}}
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
                            )}
                    }
                </FieldArray>
            </Grid>
            <Grid item xs={12}>
             <Stack direction="row" spacing={1}>
                <FieldArray name='custForm.customerEmail'>
                    {
                        (props) => {
                            //console.log(props);
                            const {push,remove,form}=props;
                            const {values}=form;
                            const {custForm}=values;
                            const {customerEmail}=custForm;
                            //console.log(customerTelephone);
                            return(
                                <>
                                {
                                    customerEmail.map((email,index)=> (
                                        <div key={index}>
                                            <Grid container columnSpacing={0} key={index}>
                                                <Grid  item xs={11}>
                                                    <FastField
                                                        name={`custForm.customerEmail[${index}]`}
                                                        label={"Email "}
                                                        type="email"
                                                        as={textField}
                                                    />
                                                </Grid>
                                                <Grid item xs={1}>
                                                    <Button 
                                                    variant='contained' 
                                                    size='small' 
                                                    onClick={()=>remove(index)}
                                                    style={{minWidth:"1px",minHeight:"1px",backgroundColor:"red",padding:"2px"}}
                                                    >
                                                    <DeleteIcon fontSize="small" />
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </div>
                                    ))
                                }
                                <Button  variant="contained" onClick={()=>push('')}>ADD</Button>
                                </>
                            )
                        }
                    }
                </FieldArray>
             </Stack>
            </Grid>
            <Grid item xs={7}>
            <FastField 
                name='custForm.customerAddress1' 
                label="Address 1" 
                as={textField}
            />
            </Grid>
            <Grid item xs={5}>
            <FastField 
                name='custForm.customerZipCode' 
                label="Postal code" 
                type="number" 
                as={textField}
            />
            </Grid>
            <Grid item xs={6}>
            <FastField 
                name='custForm.customerAddress2' 
                label="Address 2" 
                as={textField}
            />
            </Grid>
            <Grid item xs={6}>
            <FastField 
                name='custForm.customerAddress3' 
                label="Address 3" 
                as={textField}
            />                  
            </Grid>
            <Grid item xs={7}>
            <FastField 
                name='custForm.customerAddress4' 
                label="Address 4" 
                as={textField}
            />
            </Grid>
            <Grid item xs={5}>
            <FastField 
                name='custForm.customerProfession' 
                label="Profession"
                as={textField}
            />
            </Grid>
            <Grid item xs={6}>
                <FastField 
                    name="custForm.firstPersonInCharge" 
                    component={customSelect} 
                    list={firstPersonList} 
                    label="First Person in charge"
                />
            </Grid>
            <Grid item xs={6}>
                <FastField 
                    name="custForm.secondPersonInCharge" 
                    component={customSelect} 
                    list={secondPersonList} 
                    label="Second Person in charge"
                />
            </Grid>
            <Grid item xs={6}>
                <FastField 
                    name="custForm.customerGroupId" 
                    component={customSelect} 
                    list={customerGroupList} 
                    label="Customer Group"
                />
            </Grid>
            <Grid item xs={6}>
                <FastField 
                    name="custForm.customerProjectGroup" 
                    component={customSelect} 
                    list={customerProjectList} 
                    label="Project Group"
                />
            </Grid>
            <Grid item xs={6}>
            <FastField 
                name='custForm.customerAuthor' 
                label="Author" 
                as={textField}
            />
            </Grid>
            <Grid item xs={6}>
            <FastField 
                name='custForm.customerLastUpdate' 
                label="Last Updated" 
                as={textField}
            />
            </Grid>
            <Grid item xs={6}>
            <FastField 
                name='custForm.customerMemo1' 
                label="Note 1" 
                as={textField}
                multiline rows={3}
            />
            </Grid>
            <Grid item xs={6}>
            <FastField 
                name='custForm.customerMemo2' 
                label="Note 2" 
                as={textField}
                multiline rows={3}
            />
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
