import React, { useContext } from "react";
import {
  Grid,
  Typography,
  Box,
  Button,
  Link,
  Card,
  CardContent,
} from "@mui/material";
import ButtonAppBar from "../customerRelated/Appbar";
import { Formik, Form } from "formik";
import CustomTextfield from "../formikInputs/CustomTextField";
import CustomSelect from "../formikInputs/CustomSelect";
import { InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router";
import LoginContext from "../../context/LoginContext";
import logo from "../testFolder/logo.jpg";
import * as Yup from "yup";
import CustomMultiSelect from "../formikInputs/CustomMultiSelect";
import CustomMultiSelectCheck from "../formikInputs/CustomMultiSelectCheck";

export default function CreateNewUser(props) {
  let navigate = useNavigate();

  const [togglePassword, setTogglePassword] = useState(false);

  const list = [
    { name: "Role 1", value: 1 },
    { name: "Role 2", value: 2 },
    { name: "Admin", value: 3 },
  ];
  const variableList = [
    { value: 100, name: "Oliver Hansen" },
    { value: 101, name: "Van Henry" },
    { value: 102, name: "Oliver Hansen" },
    { value: 103, name: "Van Henry" },
    { value: 104, name: "Oliver Hansen" },
    { value: 105, name: "Van Henry" },
  ];

  const initialValues = {
    id: "",
    password: "",
    privilege: [],
    groupId: [],
    userName: "",
    firstKana: "",
    extNumber:"",
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
    console.log(typeof values.privilege, "tttt");
    //alert(JSON.stringify(values, null, 2));
    //navigate("/home");
  };
  return (
    <div>
      <ButtonAppBar title="New User" />
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
                  <Grid item xs={4}>
                    <CustomTextfield data={{ name: "id", label: "LoginID" }} />
                  </Grid>
                  <Grid item xs={4}>
                    <CustomTextfield
                      data={{ name: "userName", label: "User Name" }}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <CustomTextfield
                      data={{ name: "firstKana", label: "User Kana Name" }}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <CustomTextfield data={{ name: "extNumber", label: "Extension Number" }} />
                  </Grid>
                  <Grid item xs={4}>
                    <CustomMultiSelectCheck
                      data={{
                        name: "privilege",
                        label: "User Role",
                        list: variableList,
                      }}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <CustomTextfield
                      data={{ name: "password", label: "Password" }}
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
                  <Grid item xs={12}>
                    <CustomMultiSelectCheck
                      data={{
                        name: "groupId",
                        label: "SelectGroup",
                        list: variableList,
                      }}
                    />
                  </Grid>
                  <Grid item xs={4}>
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
