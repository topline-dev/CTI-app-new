import React from 'react'
import { TextField, Typography } from '@mui/material';
import { Field, FastField } from 'formik';
import { Category } from '@mui/icons-material';
import { useField } from 'formik';


//HELPER TEXT FOR PROPS
// props=(mode="read",data={{name:"namehere",label:"labelhere"}})
// for text area add props=( multiline, rows={3})
//for date add props=(type="date", InputLabelProps={{shrink: true,}})
//other types=datetime-local,date,month,number,email,password,time


export default function CustomTextfield(props) {
    const mode=props.mode;
    let readMode;
    if (props.mode === "read") {
      readMode = true;
    } else {
      readMode = false;
    }
    const textField = (props) => {
        const [field,meta,helpers]=useField(props.name);
        //console.log(field);
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
                // name = {` ${data.categoryId}.${data.itemId} `}
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