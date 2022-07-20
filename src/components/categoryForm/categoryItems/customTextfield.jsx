import React from 'react'
import { TextField, Typography } from '@mui/material';
import { Field, FastField } from 'formik';


export default function customTextField(props) {
    const textField = (props) => {
        return (
            <>
                <TextField
                    {...props}
                    variant="outlined"
                    fullWidth
                />
            </>
        )
    }
    const data = props.data;
    return (
        <div>
            <Field
                name={data.itemId}
                label={data.itemName}
                as={textField}
                {...props}
            />
        </div>
    )
}
