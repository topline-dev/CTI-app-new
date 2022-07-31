import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({ form, field, label }) {
  const { name, value } = field;
  const { setFieldValue } = form;
  //  console.log(form,field);
  const groups = [
    {
        "groupId": 1,
        "groupName": "Owners",
        "parentGroup": null,
        "groupDisplayName": "Owners",
        "registerUserId": 3603,
        "registerDateTime": "2022/07/30 02:24:10",
        "modifyUserId": null,
        "modifyDateTime": null
    },
    {
        "groupId": 2,
        "groupName": "Buyers",
        "parentGroup": 1,
        "groupDisplayName": "OwnersBuyers",
        "registerUserId": 3603,
        "registerDateTime": "2022/07/30 02:24:33",
        "modifyUserId": null,
        "modifyDateTime": null
    },
    {
        "groupId": 3,
        "groupName": "Takers",
        "parentGroup": null,
        "groupDisplayName": "Takers",
        "registerUserId": 3603,
        "registerDateTime": "2022/07/30 02:24:53",
        "modifyUserId": null,
        "modifyDateTime": null
    }
]
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
          {groups.map((data, index) => (
            <MenuItem value={data.groupId} key={index}>{data.groupDisplayName}</MenuItem>
          )
          )}
        </Select>
      </FormControl>
    </Box>
  );
}
