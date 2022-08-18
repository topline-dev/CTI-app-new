import React, { useState } from "react";
import ButtonAppBar from "../../newcustomer/Appbar";
import CustomerSearchTable from "../CustomerSearchTable";
import {
  Grid,
  Card,
  CardContent,
  Button,
  Stack,
  TextField,
  Box,
} from "@mui/material";
import BasicSelect from "../../newcustomer/inputs/BasicSelect";
import { Field, Formik, Form } from "formik";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function CustomerGroupDistribution() {
  const textField = (props) => {
    return (
      <>
        <TextField {...props} variant="outlined" />
      </>
    );
  };

  const customSelect = (props) => {
    return (
      <>
        <BasicSelect {...props} />
      </>
    );
  };
  const testlist = ["option1", "option2", "option3"];
  const handleNumerical =(e) => {
    console.log(e,"yyyy");
  }
  const [marker,setMarker] = useState("false");
  console.log(marker,"mmmmmz");
  

  return (
    <>
      <ButtonAppBar title="Distribution" />
      <Formik
        //innerRef={ref}
        initialValues={{customerGroup:"",customerUser1:"",customerUser2:"",number:"",settingType:""}}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
          console.log(values);
        }}
      >
    {({ values, setFieldValue }) => (
        <Form>
          <Grid
            container
            spacing={4}
            justifyContent={"center"}
            alignItems="stretch"
            direction="row"
          >
            <Grid item xs={12} md={12}>
              <Card elevation={4}>
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={2}>
                      <Field
                        name="customerGroup"
                        component={customSelect}
                        list={testlist}
                        label="Customer Group"
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <Field
                        name="customerUser1"
                        component={customSelect}
                        list={testlist}
                        label="User 1"
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <Field
                        name="customerUser2"
                        component={customSelect}
                        list={testlist}
                        label="User 2"
                      />
                    </Grid>
                    <Grid item xs={4}>
                        <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label">Settings</FormLabel>
                                    <RadioGroup 
                                     row
                                     aria-labelledby="demo-radio-buttons-group-label"
                                     name="settingType" 
                                     onChange={(event) => {
                                        setFieldValue("settingType", event.currentTarget.value)
                                    }}>
                                <FormControlLabel value="all" control={<Radio />} onClick={e => setMarker("false")} label="All" />
                                <FormControlLabel value="manual" control={<Radio />} onClick={e => setMarker("false")} label="Checked only" />
                                <FormControlLabel value="numerical" control={<Radio />} onClick={e => setMarker("true")} label="Numerical input" />
                                {
                                    marker==="true" &&  
                                    <Field
                                        type="number"
                                        name="number"
                                        label="Enter Total Number"
                                        as={textField}
                                  />
                                }
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={2}>
                        <Button type='submit' variant='contained' size="large" fullWidth >Allocate</Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={12}>
              <CustomerSearchTable formData="dummy" />
            </Grid>
          </Grid>
        </Form>
    )}
      </Formik>
    </>
  );
}
