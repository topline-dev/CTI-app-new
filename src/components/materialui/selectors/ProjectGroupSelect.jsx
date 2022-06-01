import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelectProjectGroup() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="projectgrp-label">Project Selection</InputLabel>
        <Select
          labelId="projectgrp-label"
          id="projectgrp-select"
          value={age}
          label="Project Selection"
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
