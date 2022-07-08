import React from 'react';
import { Grid,TextField, } from '@mui/material';
import BasicSelect from './inputs/BasicSelect';
import { FastField,Field } from 'formik';

export default function ContractInformationForm(){
    const contractInformationList=['male', 'female', 'other'];
    const insuranceCompanyList=['aaa', 'bbb', 'ccc'];
    const productNameList=['111', '222', '333'];
    const contractStatusList=['grp1', 'grp2', 'grp3'];
    const paymentMethodList=['prj1', 'prj2', 'prj3'];
    const howToPayList=['prj1', 'prj2', 'prj3'];

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

    return(
    <> 
        <Grid container columnSpacing={1} rowSpacing={1} >
            <Grid item xs={6}>
                <FastField 
                    name="contractInformationForm.contractInformation"
                    component={customSelect} 
                    list={contractInformationList} 
                    label="Contract Information"
                />
            </Grid>
            <Grid item xs={6}>
                <Field
                    name='contractInformationForm.contractManagerNumber'
                    label='Manager Number'
                    type='number'
                    as={textField}
                />
            </Grid>
            <Grid item xs={6}>
                <FastField 
                    name="contractInformationForm.contractInsuranceCompany"
                    component={customSelect} 
                    list={insuranceCompanyList} 
                    label="Insurance Company"
                />
            </Grid>
            <Grid item xs={6}>
                <FastField 
                    name="contractInformationForm.contractStatus"
                    component={customSelect} 
                    list={contractStatusList} 
                    label="Contract status"
                />
            </Grid>
            <Grid item xs={6}>
                <FastField 
                    name="contractInformationForm.contractPaymentMethod"
                    component={customSelect} 
                    list={paymentMethodList} 
                    label="Payment Method"
                />
            </Grid>
            <Grid item xs={6}>
                <FastField 
                    name="contractInformationForm.contractProductName"
                    component={customSelect} 
                    list={productNameList} 
                    label="Produc tName"
                />
            </Grid>
            <Grid item xs={12}>
                <FastField
                    name='contractInformationForm.contractPeriod'
                    label='Contract Period'
                    as={textField}
                />
            </Grid>
            <Grid item xs={6}>
                <FastField
                    name='contractInformationForm.contractOrderDate'
                    label='Order Date'
                    type='date'
                    as={textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </Grid> 
            <Grid item xs={6}>
                <FastField
                    name='contractInformationForm.contractStartDate'
                    label='Start Date'
                    type='date'
                    as={textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </Grid> 
            <Grid item xs={6}>
                <FastField 
                    name="contractInformationForm.contractHowToPay"
                    component={customSelect} 
                    list={howToPayList} 
                    label="How To Pay"
                />
            </Grid>
            <Grid item xs={6}>
                <FastField
                    name='contractInformationForm.contractInitialCost'
                    label='Initial Cost'
                    as={textField}
                />
            </Grid>
            <Grid item xs={6}>
                 <FastField
                    name='contractInformationForm.contractCommission'
                    label='Commission'
                    as={textField}
                />      
            </Grid>
            <Grid item xs={6}>
                <FastField
                    name='contractInformationForm.contractInsurancePremium'
                    label='Insurance Premium'
                    as={textField}
                />       
            </Grid>
            <Grid item xs={12}>
                <FastField
                    name='contractInformationForm.contractNote'
                    label='Note'
                    multiline rows={3}
                    as={textField}
                />     
             </Grid>
        </Grid>
    </>
    )
}