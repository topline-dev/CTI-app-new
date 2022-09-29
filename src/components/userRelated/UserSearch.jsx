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
import UserSearchTable from "./UserSearchTable";

export default function UserSearch(props) {
  let navigate = useNavigate();
  const tempRows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

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
    groupId: "",
    userName: "",
    firstKana: "",
  };

  const formValidation = Yup.object().shape({
    id: Yup.string()
      .required("Required!")
      .min(2, "Too Short!")
      .max(10, "Too Long!"),
    password: Yup.string().required("Required!"),
  });

  const handleSubmit = async (values) => {
    await new Promise((r) => setTimeout(r, 500));
    console.log(values);
    console.log(typeof values.privilege, "tttt");
    //alert(JSON.stringify(values, null, 2));
    a.setToken((prev) => !prev);
    //navigate("/home");
  };
  return (
    <div>
      <ButtonAppBar title="User Search" />
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        validationSchema={formValidation}
        onSubmit={(e) => handleSubmit(e)}
      >
        <Form>
          <Box
            sx={{
              alignItems: "center",
              px: "10%",
              py: "2%",
              // background: "red",
            }}
          >
            <Grid container columnSpacing={2} rowSpacing={4}>
              <Grid item xs={12}>
                <Card elevation={4}>
                  <CardContent>
                    <Grid container columnSpacing={1} rowSpacing={2}>
                      <Grid item xs={7}>
                        <CustomSelect
                          data={{
                            name: "parentGroup",
                            label: " Group",
                            list: list,
                          }}
                        />
                      </Grid>
                    
                       
                      <Grid item xs={4}>
                        <CustomTextfield
                          data={{ name: "userName", label: "User Name" }}
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <CustomTextfield
                          data={{ name: "loginId", label: "Login ID" }}
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <CustomTextfield
                          data={{ name: "e", label: "extension number" }}
                          type="number"
                        />
                      </Grid>
                      <Grid item xs={6}></Grid>
                      <Grid item xs={2}>
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          fullWidth
                        >
                          Search
                        </Button>
                      </Grid>
                      <Grid item xs={2}>
                        <Button variant="contained" size="large" fullWidth>
                          Output
                        </Button>
                      </Grid>
                      <Grid item xs={2}>
                        <Button variant="contained" size="large" fullWidth>
                          Create New
                        </Button>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card elevation={4}>
                  <CardContent>
                    <UserSearchTable rows={tempRows} />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Form>
      </Formik>
    </div>
  );
}
