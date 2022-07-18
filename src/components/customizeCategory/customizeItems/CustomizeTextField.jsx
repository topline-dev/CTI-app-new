import React from 'react'
import { TextField, Typography } from '@mui/material';
import { Field,FastField } from 'formik';


export default function CustomizeTextField(props) {
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
    const data=props.data;
  return (
    <div>
        {/* <Typography variant='h4'>{data.label}</Typography> */}
        <FastField
            name={data.name}
            label={data.label}
            as={textField}
            {...props}
        />
    </div>
  )
}
