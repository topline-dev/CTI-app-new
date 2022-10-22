import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";
import { Field } from "formik";

export default function CustomCheckbox(props) {
    const data = props.data;

  // const textField = (props) => {
  //   // const [field, meta, helpers] = useField(props.name);
  //   return (
  //     <>
  //       <Checkbox/>
  //     </>
  //   );
  // };
  return (
    <div>
      <Field
        name={data.name}
        label={data.label}
        type="checkbox"
        as={FormControlLabel}
        control={<Checkbox />}
      />
    </div>
  );
}
