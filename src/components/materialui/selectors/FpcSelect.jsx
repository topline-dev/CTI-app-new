import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelectfpc() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
      <InputLabel id="fpc-label">First person in charge</InputLabel>
        <Select
          labelId="fpc-label"
          id="fpc-select"
          value={age}
          label="first person in charge"
          onChange={handleChange}
        >
            <MenuItem value={1}>user 1</MenuItem>
            <MenuItem value={2}>user 2</MenuItem>
            <MenuItem value={3}>user 3</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
