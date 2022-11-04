import React from "react";
import { Grid, Box, Button, Card, CardContent } from "@mui/material";
import ButtonAppBar from "../customerRelated/Appbar";
import { Formik, Form } from "formik";
import CustomTextfield from "../formikInputs/CustomTextField";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import GroupSelect from "../formikInputs/GroupSelect";
import { AxiosFetch } from "../AxiosFetch";

export default function CustomerProjectDetail() {
    const navigate = useNavigate();
    const axiosFetch=AxiosFetch();
    const location=useLocation();
    const data=location.state.data;
   
    const initialValues = data;
  
    //   const formValidation = Yup.object().shape({
    //     id: Yup.string()
    //       .required("Required!")
    //       .min(2, "Too Short!")
    //       .max(10, "Too Long!"),
    //     password: Yup.string().required("Required!"),
    //   });
  
    const handleSubmit = async (values) => {
        console.log(values);
        const Response = await axiosFetch.put(`/project/${data.id}`, JSON.stringify(values));
        console.log(Response);
        // navigate("/editProjectGroup",{state:{data:initialValues}})
    };
    return (
        <div>
          <ButtonAppBar title="Customer Project Edit" />
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
                  px: "15%",
                  py: "5%",
                  // background: "red",
                }}
              >
                <Card elevation={4}>
                  <CardContent>
                    <Grid container columnSpacing={1} rowSpacing={4}>
                      <Grid item xs={10}>
                        <CustomTextfield
                          data={{ name: "name", label: "Project Name" }}
                        />
                      </Grid>
                      <Grid item xs={2}>
                        <CustomTextfield
                          data={{ name: "id", label: "Project ID" }}
                          mode="read"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <GroupSelect name="groupId" label="Select Group"/>
                      </Grid>
                      <Grid item xs={6}>
                        <CustomTextfield
                          data={{ name: "flag", label: "Flag" }}
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
