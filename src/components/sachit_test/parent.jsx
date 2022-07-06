import React from 'react'
import {Formik, Form} from "formik";
import Child from './child1';

function parent() {
  return (
    <div>
        <Formik
        initialValues={{ name: "", email: "" }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <Child/>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  )
}

export default parent