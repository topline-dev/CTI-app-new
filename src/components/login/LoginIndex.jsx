import React, { useContext } from "react";
import {
  TextField,
  Grid,
  Typography,
  Box,
  Container,
  Button,
  Link,
  FormControlLabel,
  Checkbox,
  Paper,
  Card,
  CardContent,
} from "@mui/material";
import ButtonAppBar from "../newcustomer/Appbar";
import { height } from "@mui/system";
import { Formik, Form } from "formik";
import CustomTextfield from "../formikInputs/CustomTextField";
import CustomSelect from "../formikInputs/CustomSelect";
import { InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { Navigate } from "react-router";
import { useNavigate } from "react-router";
import LoginContext from "../../context/LoginContext";
import logo from "../testFolder/logo.jpg";

export default function LoginIndex(props) {
  let navigate = useNavigate();

  const a = useContext(LoginContext);
  console.log(a.token, "token");

  const [togglePassword, setTogglePassword] = useState(false);

  const list = [
    { name: "Role 1", value: 1 },
    { name: "Role 2", value: 2 },
    { name: "Admin", value: 3 },
  ];

  const initialValues = {
    id: "",
    password: "",
    privilege: "",
  };

  const handleClick = async (values) => {
    await new Promise((r) => setTimeout(r, 500));
    console.log(values);
    //alert(JSON.stringify(values, null, 2));
    a.setToken((prev) => !prev);
    //navigate("/home");
  };
  return (
    <div>
      <ButtonAppBar title="Login" />
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        // validationSchema={formValidation}
        // onSubmit={async (values) => {
        //   await new Promise((r) => setTimeout(r, 500));
        //   console.log(values);
        //   //handleSubmit(values);
        //   alert(JSON.stringify(values, null, 2));
        // }}
        onSubmit={(e) => handleClick(e)}
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
                  <Grid
                    item
                    xs={12}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <img src={logo} alt="Topline"  ></img>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                  >
                    <Typography component="h1" variant="h4" align="center">
                      CTI Log In
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <CustomTextfield data={{ name: "id", label: "User ID" }} />
                  </Grid>
                  <Grid item xs={12}>
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
                    <CustomSelect
                      data={{
                        name: "privilege",
                        label: "Select role",
                        list: list,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      //   onClick={handleClick}
                    >
                      Log In
                    </Button>
                  </Grid>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
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
