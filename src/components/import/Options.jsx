import { Grid, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material'

import React from 'react'
import CustomSelect from '../formikInputs/CustomSelect'
import GroupSelect from '../formikInputs/GroupSelect'

function Options() {
    return (
        <div>
            <Grid container direction="row" columnSpacing={2} rowSpacing={4}>
                <Grid item xs={4} >
                    <GroupSelect name="groupId"></GroupSelect>
                </Grid>
                <Grid item xs={4}>
                    <CustomSelect data={{
                        name: "importType",
                        label: "Select Import type",
                        list: [
                            { value: "NoImport", name: "Do not Import" },
                            { value: "Import", name: "Import" },
                            { value: "OverWrite", name: "Overwrite" }
                        ]
                    }}
                        defaultValue={"Import"}></CustomSelect>
                </Grid>
                <Grid item xs={4}>
                    <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        fullWidth
                    >
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default Options