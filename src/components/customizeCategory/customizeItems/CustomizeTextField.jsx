import React from 'react'
import { TextField} from '@mui/material';
import { Field } from 'formik';


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
        <Field
            name={data.name}
            label={data.label}
            as={textField}
            {...props}
        />
    </div>
  )
}
