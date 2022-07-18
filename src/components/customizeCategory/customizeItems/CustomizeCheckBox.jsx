import React from 'react'
import { Field } from 'formik'
import { Typography } from '@mui/material'

export default function CustomizeCheckBox(props) {
    const data=props.data;
  return (
    <div>
        <label >
            <Typography variant='h5'><Field type="checkbox" name={data.name} />{data.label}</Typography>
        </label>
         
    </div>
  )
}
