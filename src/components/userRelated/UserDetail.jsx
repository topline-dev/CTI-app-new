import React, { useEffect } from "react";
import {
  Grid,

  Box,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import ButtonAppBar from "../customerRelated/Appbar";
import { Formik, Form } from "formik";
import CustomTextfield from "../formikInputs/CustomTextField";
import { InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router";
import axiosClient from "../customerRelated/axios";
import GroupMultiSelect from "../formikInputs/GroupMultiSelect";

import * as Yup from "yup";

import CustomMultiSelectCheck from "../formikInputs/CustomMultiSelectCheck";

export default function UserDetail(props) {
  let navigate = useNavigate();
  const id=2;
  const [togglePassword, setTogglePassword] = useState(false);
  const roleList = [
    { name: "Role 1", value: 1 },
    { name: "Role 2", value: 2 },
    { name: "Admin", value: 3 },
  ];
  const initialValues = {
    id: "",
    userName: "",
    password: "",
    extNumber: "",
    lastName: "",
    firstName: "",
    lastKana: "",
    firstKana: "",
    privilege: [],
    groupId: [],
  };
  useEffect(() => {
    async function getData() {
      const response = await axiosClient.get(`/user/5555`);
      if (response.status === 200) {
        console.log(response.data);
        };
    }
    getData();
  }, []);
  const handleSubmit = async (values) => {
  };
  return (
    <div>
      <ButtonAppBar title="User Detail" />
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
              px: "10%",
              py: "5%",
              // background: "red",
            }}
          >
            <Card elevation={4}>
            <CardContent>
                <Grid container columnSpacing={1} rowSpacing={4}>
                  <Grid item md={4} xs={6}>
                    <CustomTextfield
                      data={{ name: "userId", label: "User ID" }}
                      // type="number"
                    />
                  </Grid>
                  {/* <Grid item md={4} xs={12}>
                    <CustomTextfield
                      data={{ name: "userName", label: "User Name" }}
                    />
                  </Grid> */}
                  <Grid item md={4} xs={6}>
                    <CustomTextfield
                      data={{ name: "userPassword", label: "Password" }}
                      type={togglePassword ? "text" : "password"}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            {" "}
                            {togglePassword ? (
                              <Visibility
                                onClick={(e) => {
                                  setTogglePassword(false);
                                }}
                              />
                            ) : (
                              <VisibilityOff
                                onClick={(e) => {
                                  setTogglePassword(true);
                                }}
                              />
                            )}
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <CustomTextfield
                      data={{ name: "extNumber", label: "Extension Number" }}
                      type="number"
                    />
                  </Grid>

                  <Grid item md={4} xs={6}>
                    <CustomTextfield
                      data={{ name: "lastName", label: "Last Name" }}
                    />
                  </Grid>
                  <Grid item md={4} xs={6}>
                    <CustomTextfield
                      data={{ name: "firstName", label: "First Name" }}
                    />
                  </Grid>
                  <Grid item md={4} xs={6}>
                    <CustomMultiSelectCheck
                      data={{
                        name: "privilege",
                        label: "User Role",
                        list: roleList,
                      }}
                    />
                  </Grid>
                  <Grid item md={6} xs={6}>
                    <CustomTextfield
                      data={{ name: "lastKana", label: "Last Kana Name" }}
                    />
                  </Grid>

                  <Grid item md={6} xs={6}>
                    <CustomTextfield
                      data={{ name: "firstKana", label: "First Kana Name" }}
                    />
                  </Grid>

                  {/* <Grid item md={12}>
                    <CustomMultiSelectCheck
                      data={{
                        name: "groupIddd",
                        label: "Select Group",
                        list: pp,
                      }}
                    />
                  </Grid> */}
                  <Grid item md={12} xs={12}>
                    <GroupMultiSelect name="groupId"/>
                  </Grid>
                  
                  <Grid item md={4} xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                    >
                      Save
                    </Button>
                  </Grid>
                  <Grid item xs={4}>
                    <Button variant="contained" size="large" fullWidth>
                      Save and New
                    </Button>
                  </Grid>
                  <Grid item xs={4}>
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
