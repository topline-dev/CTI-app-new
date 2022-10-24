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
import { InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router";
import LoginContext from "../../context/LoginContext";
import logo from "../testFolder/logo.jpg";
import * as Yup from "yup";
import CustomSelect from "../formikInputs/CustomSelect";
import { AxiosFetch } from "../AxiosFetch";

export default function LoginIndex(props) {
  let navigate = useNavigate();
  const axiosFetch= AxiosFetch();

  const a = useContext(LoginContext);
  console.log(a);

  const [togglePassword, setTogglePassword] = useState(false);

  const list = [
    { name: "Role 1", value: 1 },
    { name: "Role 2", value: 2 },
    { name: "Admin", value: 3 },
  ];

  const initialValues = {
    userName: "",
    userPassword: "",
    reqPrivilege: 3,
  };

  const formValidation = Yup.object().shape({
    userName: Yup.string()
      .required("Required!")
      .min(2, "Too Short!")
      .max(10, "Too Long!"),
    userPassword: Yup.string().required("Required!"),
  });

  const handleClick = async (values) => {
    console.log(values,"vvvv");
    const userResponse = await axiosFetch.post('/authenticate', JSON.stringify(values));
    console.log(userResponse);
    // a.setJwtToken(userResponse.data.jwtToken);
    a.setToken(true);
    sessionStorage.setItem("token",true)
    localStorage.setItem("jwtToken",userResponse.data.jwtToken)
    navigate("/home");
  };
  return (
    <div>
      <ButtonAppBar title="Login" />
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        validationSchema={formValidation}
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
                    <img src={logo} alt="Topline"></img>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography component="h1" variant="h4" align="center">
                      CTI Log In
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <CustomTextfield data={{ name: "userName", label: "User ID" }} />
                  </Grid>
                  <Grid item xs={12}>
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
                  <Grid item xs={12}>
                    <CustomSelect
                      data={{
                        name: "reqPrivilege",
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
                      // onClick={(e)=>{handleClick(e)}}
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
