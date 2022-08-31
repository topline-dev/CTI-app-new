import React from "react";
import {
  Card,
  Grid,
  Typography,
  Button,
  CardContent,
  TextField,
  Stack,
} from "@mui/material";
import BasicSelect from "../../newcustomer/inputs/BasicSelect";

import CustTextField from "../custForm/custItems/custTextfield";
import CustomerGroupSelect from "../custForm/custItems/customerGroupSelect";

export default function CustForm(props) {

  const customSelect = (props) => {
    return (
      <>
        <BasicSelect {...props} />
      </>
    );
  };

  return (
    <>

      <Grid container columnSpacing={1} rowSpacing={1}>
        <Grid item xs={4}>
          <CustTextField
            data={{ name: "customerLastName", label: "Last Name" }}
          />
        </Grid>
        <Grid item xs={4}>
          <CustTextField
            data={{ name: "customerFirstName", label: "First Name" }}
          />
        </Grid>
        <Grid item xs={4}>
          <CustTextField data={{ name: "customerSex", label: "Sex" }} />
        </Grid>
        <Grid item xs={4}>
          <CustTextField
            data={{ name: "customerLastRuby", label: "Last Kana Name" }}
          />
        </Grid>
        <Grid item xs={4}>
          <CustTextField
            data={{ name: "customerFirstRuby", label: "First Kana Name" }}
          />
        </Grid>
        <Grid item xs={4}>
          <CustTextField
            data={{ name: "customerBirthday", label: "Birthday" }}
          />
        </Grid>

        <Grid item xs={6}>
          <CustTextField
            data={{ name: "customerEmail", label: "Email" }}
            type="email"
          />
        </Grid>
        <Grid item xs={6}>
          <CustTextField
            data={{ name: "customerAddress1", label: "Address 1" }}
          />
        </Grid>
        <Grid item xs={5}>
          <CustTextField
            data={{ name: "customerZipCode", label: "Zipcode" }}
            type="number"
          />
        </Grid>

        <Grid item xs={5}>
          <CustTextField
            data={{ name: "customerBusinessType", label: "Profession" }}
          />
        </Grid>
      </Grid>
    </>
  );
}
