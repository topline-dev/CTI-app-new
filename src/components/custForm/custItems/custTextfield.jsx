import React from 'react'
import { TextField, Typography } from '@mui/material';
import { Field, FastField } from 'formik';
import { Category } from '@mui/icons-material';


export default function custTextField(props) {
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
                // name = {` ${data.categoryId}.${data.itemId} `}
                name = {`custData.${data.name}`}
                defaultValue = ""
                label={data.label}
                as={textField}
                {...props}
            />
        </div>
    )
}