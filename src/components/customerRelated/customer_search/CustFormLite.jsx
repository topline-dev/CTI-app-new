import React from "react";
import { Grid } from "@mui/material";

import CustomTextField from "../../formikInputs/CustomTextField";
import CustomSelect from "../../formikInputs/CustomSelect";

export default function CustForm(props) {

  return (
    <>

      <Grid container columnSpacing={1} rowSpacing={1}>
        <Grid item xs={4}>
        <CustomTextField mode="" data={{ name: "custData.customerLastName", label: "Last Name" }} />
        </Grid>
        <Grid item xs={4}>
        <CustomTextField mode="" data={{ name: "custData.customerFirstName", label: "First Name" }} />
        </Grid>
        <Grid item xs={4}>
          <CustomTextField mode="" data={{ name: "custData.customerSex", label: "Sex" }} />
        </Grid>
        <Grid item xs={4}>
          <CustomTextField
            mode = "" data={{ name: "custData.customerLastRuby", label: "Last Kana Name" }}
          />
        </Grid>
        <Grid item xs={4}>
          <CustomTextField
            mode = "" data={{ name: "custData.customerFirstRuby", label: "First Kana Name" }}
          />
        </Grid>
        <Grid item xs={4}>
          <CustomTextField
            mode = "" data={{ name: "custData.customerBirthday", label: "Birthday" }}
          />
        </Grid>

        <Grid item xs={6}>
          <CustomTextField
            mode = ""
            data={{ name: "custData.customerEmail", label: "Email" }}
            type="email"
          />
        </Grid>
        <Grid item xs={6}>
          <CustomTextField
          mode = ""
            data={{ name: "custData.customerAddress1", label: "Address 1" }}
          />
        </Grid>
        <Grid item xs={5}>
          <CustomTextField
            mode = ""
            data={{ name: "custData.customerZipCode", label: "Zipcode" }}
            type="number"
          />
        </Grid>

        <Grid item xs={5}>
          <CustomTextField
          mode = ""
            data={{ name: "custData.customerBusinessType", label: "Profession" }}
          />
        </Grid>
      </Grid>
    </>
  );
}
