import React from 'react'
import { TextField, Typography } from '@mui/material';
import { Field, FastField } from 'formik';
import { Category } from '@mui/icons-material';
import { useField } from 'formik';


export default function custTextField(props) {
    
    const textField = (props) => {
        const [field,meta,helpers]=useField(props.name);
        // console.log(field,'ooooooo');
        return (
            <>
                <TextField
                    {...props}
                    variant="outlined"
                    fullWidth
                    error={meta.error && meta.touched}
                     helperText={ meta.touched && meta.error } 
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
                // name = {` ${data.categoryId}.${data.itemId} `}
                name = {`custData.${data.name}`}
                label={data.label}
                as={textField}
                {...props}
            />
        </div>
    )
}