import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({form,field,label,list}) {
    const { name, value } = field;
     const { setFieldValue } = form;
    //  console.log(form,field);
    let datalist=list;
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          name={name}
          defaultValue=""
          value={value}
          label={label}
          onChange={(e) => {
            setFieldValue(name, e.target.value);
          }}
        >
        { datalist.map((data,index) => (
            <MenuItem value={data} key={index}>{data}</MenuItem>
        )
        )}
        </Select>
      </FormControl>
    </Box>
  );
}
