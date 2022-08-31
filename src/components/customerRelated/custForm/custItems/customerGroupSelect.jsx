import React from "react";
import { Field } from "formik";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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

// export default function customerGroupSelect(textFieldProps, ...props) {
//     return (
//         <div>
//             <Autocomplete
//                 disablePortal
//                 id="customerGroup"
//                 name="customerGroup"
//                 options={groups}
//                 // groupBy={(option) => option.state}
//                 getOptionLabel={(groups) => groups.groupDisplayName}
//                 style={{ width: 300 }}
//                 onChange={(event, value) => {
//                     setFieldValue("customerGroup", value.value);
//                 }}
//                 renderInput={(params) => (
//                     <TextField
//                         {...params}
//                         onChange={handleChange}
//                         margin="normal"
//                         label="Customer Group"
//                         fullWidth
//                     // value={values?.cityId}
//                     />
//                 )}
//             />
//         </div>
//     );
// }



export default function customerGroupSelect(props) {


    const autoComplete = (field, form, label, ...props) => {
        const { name, value } = field;
        const { setFieldValue, } = form;
        return (
            <div>
                {/* <Autocomplete
                    disablePortal
                    id="customerGroup"
                    name={name}
                    options={groups}
                    value={value}
                    // groupBy={(option) => option.state}
                    getOptionLabel={(groups) => groups.groupDisplayName}
                    style={{ width: 300 }}
                    onChange={(event) => {
                        setFieldValue(name, event.target.value, false);
                    }}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            onChange={handleChange}
                            margin="normal"
                            label={label}
                            fullWidth
                            value={name}
                        />
                    )}
                /> */}
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            name={name}
                            defaultValue="1"
                            value={value}
                            label={label}
                            onChange={(e, selected) => {
                                setFieldValue(name, selected.value);
                            }}
                        >
                            {groups.map((data) => (
                                <MenuItem value={data.groupId} key={data.groupId}>{data.groupDisplayName}</MenuItem>
                            )
                            )}
                        </Select>
                    </FormControl>
                </Box>
            </div>
        )
    }

    return (
        <Field
            name="customerGroup"
            label="Group"
            component={autoComplete}
            // as={autoComplete}
            // {...props}

        />
    );
}