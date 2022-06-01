import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelectCustGroup() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="custgrp-label">Customer Group</InputLabel>
        <Select
          labelId="custgrp-label"
          id="custgrp-select"
          value={age}
          label="customer group"
          onChange={handleChange}
        >
          <MenuItem value={1}>aa</MenuItem>
          <MenuItem value={2}>bb</MenuItem>
          <MenuItem value={3}>cc</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
