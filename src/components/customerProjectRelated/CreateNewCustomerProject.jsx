import React, { useEffect } from "react";
import { Grid, Box, Button, Card, CardContent } from "@mui/material";
import ButtonAppBar from "../customerRelated/Appbar";
import { Formik, Form, useFormikContext } from "formik";
import CustomTextfield from "../formikInputs/CustomTextField";
import { useState } from "react";
import { useNavigate } from "react-router";
import GroupSelect from "../formikInputs/GroupSelect";
import { AxiosFetch } from "../AxiosFetch";

export default function CreateNewCustomerProject(props) {
  let navigate = useNavigate();
  const axiosFetch=AxiosFetch();

  const [saveAndNew,setSaveAndNew]=useState(false);
  let submitAction;
 
  const initialValues = {
    name: "",
    groupId: "",
    flag:"",
    registerUserId:"9999"
  };

  //   const formValidation = Yup.object().shape({
  //     id: Yup.string()
  //       .required("Required!")
  //       .min(2, "Too Short!")
  //       .max(10, "Too Long!"),
  //     password: Yup.string().required("Required!"),
  //   });

  const handleSubmit = async (values) => {
    console.log(values);
    const Response = await axiosFetch.post('/project', JSON.stringify(values));
    console.log(Response);
    navigate("/customerProjectTable");
  };
  const handleSubmitAndNew = async (values) => {
    // console.log(values,"nnnn");
    const Response = await axiosFetch.post('/project', JSON.stringify(values));
    console.log(Response);
    window.location.reload();
  };

  return (
    <div>
      <ButtonAppBar title="New Customer Project" />
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        // validationSchema={formValidation}
        onSubmit={(values) => {
          if (submitAction === "SaveAndNew") {
            handleSubmitAndNew(values);
          } else {
            handleSubmit(values);
          }
        }}
      >
        <Form>
          <Box
            sx={{
              alignItems: "center",
              px: "15%",
              py: "5%",
              // background: "red",
            }}
          >
            <Card elevation={4}>
              <CardContent>
                <Grid container columnSpacing={1} rowSpacing={4}>
                  <Grid item xs={12}>
                    <CustomTextfield
                      data={{ name: "name", label: "Project Name" }}
                    />
                  </Grid>
                  {/* <Grid item xs={2}>
                    <CustomTextfield
                      data={{ name: "id", label: "Project ID" }}
                      mode="read"
                    />
                  </Grid> */}
                  <Grid item xs={6}>
                    <GroupSelect name="groupId" label="Select Group"/>
                  </Grid>
                  <Grid item xs={6}>
                    <CustomTextfield
                      data={{ name: "flag", label: "Flag" }}
                    />
                  </Grid>

                  <Grid item xs={4}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      onClick={()=>{
                        submitAction="Save"
                      }}
                    >
                      Save
                    </Button>
                  </Grid>
                  <Grid item xs={4}>
                    <Button
                      type="save"
                      variant="contained"
                      size="large"
                      onClick={()=>{
                        submitAction="SaveAndNew"
                      }}
                      fullWidth
                    >
                      Save And New
                    </Button>
                  </Grid>

                  <Grid item xs={4}>
                    <Button
                      variant="contained"
                      sx={{ backgroundColor: "error.light" }}
                      color="error"
                      size="large"
                      fullWidth
                      onClick={()=>{navigate(-1)}}
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
