import React, { useContext } from "react";
import { Grid, Box, Button, Card, CardContent } from "@mui/material";
import ButtonAppBar from "../customerRelated/Appbar";
import { Formik, Form } from "formik";
import CustomTextfield from "../formikInputs/CustomTextField";
import CustomSelect from "../formikInputs/CustomSelect";
import { useState } from "react";
import { useNavigate } from "react-router";
import * as Yup from "yup";
import axiosClient from "../customerRelated/axios";

export default function CreateNewCustomerGroup(props) {
  let navigate = useNavigate();

  const list = [
    { name: "Role 1", value: 1 },
    { name: "Role 2", value: 2 },
    { name: "Admin", value: 101010 },
  ];
  const statusList = [
    { name: "active", value: 1 },
    { name: "inactive", value: 2 },
  ];

  const initialValues = {
    parentGroup: "",
    groupName: "",
    status: 1,
  };

  //   const formValidation = Yup.object().shape({
  //     id: Yup.string()
  //       .required("Required!")
  //       .min(2, "Too Short!")
  //       .max(10, "Too Long!"),
  //     password: Yup.string().required("Required!"),
  //   });

  const handleSubmit = async (values) => {
    await new Promise((r) => setTimeout(r, 500));
    console.log(values);
    alert(JSON.stringify(values, null, 2));
    const custResponse = await axiosClient.post('/group', JSON.stringify(values));
    console.log(custResponse);
    //navigate("/home");
  };
  return (
    <div>
      <ButtonAppBar title="New Customer Group" />
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        // validationSchema={formValidation}
        onSubmit={(e) => handleSubmit(e)}
      >
        <Form>
          <Box
            sx={{
              alignItems: "center",
              px: "25%",
              py: "5%",
              // background: "red",
            }}
          >
            <Card elevation={4}>
              <CardContent>
                <Grid container columnSpacing={1} rowSpacing={4}>
                  <Grid item xs={12}>
                    <CustomSelect
                      data={{
                        name: "parentGroup",
                        label: "Select Parent Group",
                        list: list,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <CustomTextfield
                      data={{ name: "groupName", label: "Group Name" }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <CustomSelect
                      data={{
                        name: "status",
                        label: "Status",
                        list: statusList,
                        
                      }}
                      mode="read"
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                    >
                      Save
                    </Button>
                  </Grid>

                  <Grid item xs={6}>
                    <Button
                      variant="contained"
                      sx={{ backgroundColor: "error.light" }}
                      color="error"
                      size="large"
                      fullWidth
                    >
                      Cancel
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Box>
        </Form>
      </Formik>
    </div>
  );
}
