import React from "react";
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

export default function LoginIndex() {
  const list = [
    { name: "Role 1", value: 1 },
    { name: "Role 2", value: 2 },
    { name: "Admin", value: 3 },
  ];
  return (
    <div>
      <ButtonAppBar title="Login" />
      <Formik
        enableReinitialize={true}
        initialValues={{}}
        // validationSchema={formValidation}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          console.log(values);
          //handleSubmit(values);
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <Box
            sx={{
              alignItems: "center",
              px: 60,
              py: 10,
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
                    <Typography component="h1" variant="h5">
                      CTI Log In
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <CustomTextfield data={{ name: "id", label: "User ID" }} />
                  </Grid>
                  <Grid item xs={12}>
                    <CustomTextfield
                      data={{ name: "password", label: "Password" }}
                      type="password"
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
