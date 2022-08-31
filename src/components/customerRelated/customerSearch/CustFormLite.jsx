import React from "react";
import { Grid } from "@mui/material";
import BasicSelect from "../../newcustomer/inputs/BasicSelect";

import CustomTextField from "../../formikInputs/CustomTextField";

export default function CustForm(props) {
  // const customSelect = (props) => {
  //   return (
  //     <>
  //       <BasicSelect {...props} />
  //     </>
  //   );
  // };

  return (
    <>
      <Grid container columnSpacing={1} rowSpacing={1}>
        <Grid item xs={4}>
          <CustomTextField
            data={{ name: "customerLastName", label: "Last Name" }}
          />
        </Grid>
        <Grid item xs={4}>
          <CustomTextField
            data={{ name: "customerFirstName", label: "First Name" }}
          />
        </Grid>
        <Grid item xs={4}>
          <CustomTextField data={{ name: "customerSex", label: "Sex" }} />
        </Grid>
        <Grid item xs={4}>
          <CustomTextField
            data={{ name: "customerLastRuby", label: "Last Kana Name" }}
          />
        </Grid>
        <Grid item xs={4}>
          <CustomTextField
            data={{ name: "customerFirstRuby", label: "First Kana Name" }}
          />
        </Grid>
        <Grid item xs={4}>
          <CustomTextField
            data={{ name: "customerBirthday", label: "Birthday" }}
          />
        </Grid>

        <Grid item xs={6}>
          <CustomTextField
            data={{ name: "customerEmail", label: "Email" }}
            type="email"
          />
        </Grid>
        <Grid item xs={6}>
          <CustomTextField
            data={{ name: "customerAddress1", label: "Address 1" }}
          />
        </Grid>
        <Grid item xs={5}>
          <CustomTextField
            data={{ name: "customerZipCode", label: "Zipcode" }}
            type="number"
          />
        </Grid>

        <Grid item xs={5}>
          <CustomTextField
            data={{ name: "customerBusinessType", label: "Profession" }}
          />
        </Grid>
      </Grid>
    </>
  );
}
