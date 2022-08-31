import React, { useEffect } from "react";
import { FormControl } from "@mui/material";
import { Select, MenuItem, InputLabel } from "@mui/material";
import { Field } from "formik";

//HELPER TEXT FOR PROPS
// const variableList=[{value:10,name:"ten"},{value:20,name:"twenty"}]
// props=(mode="read", data={ {name:"namehere", label:"labelhere", list:variableList} } defaultValue={[value]}  )

export default function CustomSelect(props) {
  const data = props.data;
  const mode = props.mode;
  const defaultValue = props.defaultValue || "";
  //console.log(defaultValue);

  let readMode = mode ? true : false;

  const CustomizedSelectForFormik = ({ children, form, field, ...props }) => {
    const { name, value } = field;
    const { setFieldValue } = form;
    useEffect(() => {
        if (typeof value === "undefined") {
          setFieldValue(name, defaultValue);
        }
      }, []);
    // console.log(props);
    return (
      <>
        {value && (
          <Select
            name={name}
            value={value || defaultValue}
            onChange={(e) => {
              setFieldValue(name, e.target.value);
            }}
            {...props}
          >
            {children}
          </Select>
        )}
      </>
    );
  };
  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{data.label}</InputLabel>
        <Field
          name={data.name}
          component={CustomizedSelectForFormik}
          label={data.label}
          inputProps={{
            readOnly: readMode,
          }}
        >
          {data.list.map((list, index) => (
            <MenuItem value={list.value} key={index}>
              {list.name}
            </MenuItem>
          ))}
        </Field>
      </FormControl>
    </div>
  );
}
