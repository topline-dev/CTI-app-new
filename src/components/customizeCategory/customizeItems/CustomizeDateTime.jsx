import React from 'react'
import { TextField } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { FastField,Field } from 'formik';


export default function CustomizeDateTime(props) {
    const data=props.data;
    
  const customcomp =(props) =>{
    const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleChange = (newValue) => {
      setValue(newValue);
      setFieldValue(name, newValue);
    };
    const { name} = props.field;
    const { setFieldValue } = props.form;
    return(
        <>
            <DateTimePicker
                label="DateTime picker"
                value={value}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
            />
        </>  
      );
  }
  return (
    <div>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Field
                component={customcomp}
                name={data.name}
                label={data.label}
            />
        </LocalizationProvider>
    </div>
  )
}
