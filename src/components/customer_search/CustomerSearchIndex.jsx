import "../../App.css";
import React, { useState } from "react";
import ButtonAppBar from "../newcustomer/Appbar";
import TemporaryDrawer from "../newcustomer/SideNav";
import {
  Grid,
  Card,
  CardContent,
  Button,
  Stack,
  TextField,
  Box,
} from "@mui/material";
import CustomerSearchTable from "./CustomerSearchTable";
import { Formik, Form, Field, FastField, useFormikContext } from "formik";
import BasicSelect from "../newcustomer/inputs/BasicSelect";
import CustFormLite from "./CustFormLite";
import CategoryForm from "../categoryForm/categoryForm";


export default function CustomerSearchScreenIndex() {
    const textField = (props) => {
        return(
            <>
                <TextField
                    {...props}
                    variant="outlined"
                    fullWidth    
                />
            </>
        )
    }
    

    const customSelect =(props) =>{
        return(
            <>
                <BasicSelect
                    {...props}
                />
            </>
        )
    }
  const[formData,setFormData]=useState([{phoneNumber:""}]);
  const testlist=["option1","option2","option3"];
  

  return (
    <>
      <ButtonAppBar title="Customer Search" />
      <TemporaryDrawer />
      <Formik
        //innerRef={ref}
        initialValues={{phoneNumber:"",}}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
          console.log(values);
          setFormData([values]);
        }}
      >
        <Form>
          <Grid
            container
            spacing={2}
            justifyContent={"center"}
            alignItems="stretch"
            direction="row"
          >
            <Grid item xs={12} md={3.5}>
              <Card elevation={4}>
                <CardContent>
                  <Stack spacing={4}>
                    {/* <item><Container sx={{backgroundColor:"primary.light",minHeight:"50px",justifyContent:"center"}}><h3>Information</h3></Container></item> */}
                    <Box>
                      <Field
                        type="number"
                        name="phoneNumber"
                        label="Phone number"
                        defaultValue=""
                        as={textField}
                      />
                    </Box>
                    <Box>
                        <Field 
                        name="customerGroup" 
                        component={customSelect} 
                        list={testlist} 
                        label="Customer Group"
                        />
                    </Box>
                    <Box>
                      <Field 
                        name="projectGroup" 
                        component={customSelect} 
                        list={testlist} 
                        label="Project Group"
                        />
                    </Box>
                    <Box>
                      <Button variant="contained" fullWidth type="submit">
                        Search
                      </Button>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={7.5}>
              <Card elevation={4}>
                <CardContent>
                 <CustFormLite/>
                 {/* <CategoryForm/> */}
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={11}>
              <Card elevation={4} sx={{ minHeight: 300 }}>
                <CardContent>
                  <CustomerSearchTable  formData={formData} />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </>
  );
}