 import React, { useEffect, useState, useRef } from 'react';
import { Button, Fab, Grid, Stack, } from '@mui/material';
import { TextField } from '@mui/material';
import { Formik, Form, useFormikContext,Field, useField } from 'formik';
import * as Yup from 'yup';


export default function TestFile() {
    const textField = (props) => {
        
       const [field,meta,helpers]=useField(props.name);
       //console.log(field,"ffffff");
    //    const firstName=props.name;
        return(
            <>
                <TextField
                    name={props.name}
                    label={props.label}
                    variant="outlined"
                    {...props}
                    select
                    error={meta.error && meta.touched}
                    helperText={meta.error && meta.touched ? (
                        <div>{meta.error}</div>
                      ) : null}
                />
                {/* {meta.error && meta.touched ? (
             <div>{meta.error}</div>
           ) : null} */}
            </>
        )
    };
    const formValidation= Yup.object().shape({
        firstName: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
      });
      

  return (
    <>
      <Formik
        initialValues={{
          }}
        validationSchema={formValidation}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          console.log(values);
           alert(JSON.stringify(values, null, 2));
        }}
      >
         
         <Form>
             <br/><br/><br/><br/><br/><br/><br/><br/>
           <Field name="firstName" label="fffff" as={textField} />
           <Button type='submit'>Submit</Button>
         </Form>
     
      </Formik>
    </>
  );
}
