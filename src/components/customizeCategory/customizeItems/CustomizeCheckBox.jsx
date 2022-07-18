import React from 'react'
import { Field } from 'formik'
import { Typography } from '@mui/material'

export default function CustomizeCheckBox(props) {
    const data=props.data;
  return (
    <div>
         {/* <Typography variant='h4'>{data.label}</Typography> */}
        <label>
            <Field type="checkbox" name={data.name} />
              {data.label}
        </label>
         
    </div>
  )
}
