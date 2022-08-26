import React from 'react'
import { TextField, Typography } from '@mui/material';
import { Field, FastField } from 'formik';
import { Category } from '@mui/icons-material';
import { useField } from 'formik';


//HELPER TEXT FOR PROPS
// props=(mode:true,data:{{name:"namehere",label:"labelhere"}})
// for text area add props=( multiline, rows={3})
//for date add props=(type="date", InputLabelProps={{shrink: true,}})
//other types=datetime-local,date,month,number,email,password,time


export default function CustomTextfield(props) {
    // const mode=props.mode;
    const readMode = props.mode ? true : false;

    const textField = (props) => {
        const [field,meta,helpers]=useField(props.name);
        return (
            <>
                <TextField 
                    variant="outlined"
                    fullWidth
                    error={meta.error && meta.touched}
                     helperText={ meta.touched && meta.error } 
                     {...props}
                    //   helperText={meta.error && meta.touched ? (
                    //     <div>{meta.error}</div>
                    //   ) : null} 
                />
            </>
        )
    }
    const data = props.data;
    return (
        <div>
            <Field
                name = {data.name}
                label={data.label}
                as={textField}
                InputProps={{
                    readOnly: readMode,
                  }}
                {...props}
            />
        </div>
    )
}