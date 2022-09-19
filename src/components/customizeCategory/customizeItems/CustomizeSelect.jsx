import React from 'react'
import { Field } from 'formik';
import BasicSelect from '../../newcustomer/inputs/BasicSelect';

export default function CustomizeSelect(props) {
const data=props.data;
const customSelect =(props) =>{
    return(
        <>
            <BasicSelect
                {...props}
            />
        </>
    )
}
  return (
    <div>
        {/* <Typography variant='h4'>{data.label}</Typography> */}
        <Field 
            name={data.name} 
            component={customSelect} 
            list={data.list} 
            label={data.label}
        />
    </div>
  )
}
