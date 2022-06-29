import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect(props) {
    //console.log('in basic select');
    //console.log(props);
    let datalist=props.data.list;
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name={props.name}
          value={props.data.val}
          label={props.label}
          onChange={e => props.onChange(e)}
        >
        { datalist.map((data,index) => (
            <MenuItem value={index} key={index} name={data}>{data}</MenuItem>
        )
        )}
        </Select>
      </FormControl>
    </Box>
  );
}
