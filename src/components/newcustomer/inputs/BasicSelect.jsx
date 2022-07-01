import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect(props) {
    //console.log('in basic select');
    //console.log(props);
    let datalist=props.list;
    //console.log(datalist);
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.value}
          label={props.label}
          onChange={e => props.onChange(e)}
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
