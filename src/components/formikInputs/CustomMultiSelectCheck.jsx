import * as React from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Field } from "formik";
import { Checkbox, ListItemText } from "@mui/material";
import { useEffect } from "react";
//HELPER TEXT FOR PROPS
// const variableList = [
//     {value:100,name:"Oliver Hansen"},
//     {value:101,name: "Van Henry"},

//   ];
// props=(mode="read"   data={ {name:"namehere", label:"labelhere", list:variableList} }  defaultValue={[array of values]} )

export default function CustomMultiSelectCheck(props) {
  const data = props.data;

  const defaultValue = props.defaultValue || [];

  const mode = props.mode;
  let readMode;
  if (mode === "read") {
    readMode = true;
  } else {
    readMode = false;
  }

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  const CustomizedMultiSelectForFormik = ({
    field,
    form,
    children,
    ...props
  }) => {
    const { name, value } = field;
    const { setFieldValue } = form;
    const list = props.list;
    // console.log(field, "ffff");
    
    const handleChange = (event) => {
      const value = event.target.value;
      setFieldValue(
        name,
        typeof value === "string" ? value.split(",") : value
      );
    };
    useEffect(() => {
      if (typeof value === "undefined") {
        setFieldValue(name, defaultValue);
      }
    }, []);
    
    return (
      <>
        {value && (
          <Select
            name={name}
            multiple
            value={value || defaultValue}
            onChange={handleChange}
            MenuProps={MenuProps}
            renderValue={(selected) => {
                let  arr=[];
                {selected.map((select,index)=>{
                    arr[index]=list.find(element => element.value === select).name;
                })}
                return arr.join(', ')
            }}
            {...props}
            // input={<OutlinedInput label="Name" />}
          >
            {list.map((list, index) => (
              <MenuItem value={list.value} key={index}>
                <Checkbox checked={value.indexOf(list.value) > -1} />
                <ListItemText primary={list.name} />
              </MenuItem>
            ))}
          </Select>
        )}
      </>
    );
  };
  return (
    <>
      <div>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">{data.label}</InputLabel>
          <Field
            name={data.name}
            component={CustomizedMultiSelectForFormik}
            label={data.label}
            inputProps={{
              readOnly: readMode,
            }}
            list={data.list}
          ></Field>
        </FormControl>
      </div>
    </>
  );
}
