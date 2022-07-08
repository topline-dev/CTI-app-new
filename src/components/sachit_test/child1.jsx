import React from 'react'
import {Field} from "formik";

function child() {
  return (
    <div>
        <h1>Hello there</h1>
        <Field name="name" type="text" />
        <Field name="email" type="email" />
    </div>
  )
}

export default child