import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelectSex() {
  const [sex, setSex] = React.useState('');

  const handleChange = (event) => {
    setSex(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="sex-label">Sex</InputLabel>
        <Select
          labelId="sex-label"
          id="sex-select"
          value={sex}
          label="Sex"
          name='sex'
          onChange={handleChange}
        >
          <MenuItem value={1}>male</MenuItem>
          <MenuItem value={2}>female</MenuItem>
          <MenuItem value={3}>others</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
