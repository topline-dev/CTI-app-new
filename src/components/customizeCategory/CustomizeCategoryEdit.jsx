import { Box, Button, Card, CardContent, Grid } from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { AxiosFetch } from "../AxiosFetch";
import ButtonAppBar from "../customerRelated/Appbar";
import CustomSelect from "../formikInputs/CustomSelect";
import CustomTextField from "../formikInputs/CustomTextField";
import GroupSelect from "../formikInputs/GroupSelect";
import CategoryItemTable from "./customizeItemsRelated/CategoryItemTable";

export default function CustomizeCategoryEdit(props) {
  let navigate = useNavigate();
  const axiosFetch = AxiosFetch();
  const location = useLocation();
  const data = location.state.data;
  const categoryId=data.categoryId;
  const initialValues = data;
    console.log(location, "locationn");

  //   const initialValues = {
  //     categoryName: data.categoryName || "",
  //     categoryId: data.categoryId || "",
  //     customerGroup: {
  //       groupId: data.customerGroup.groupId || "",
  //     },
  //     visible: data.visible || false,
  //     multipleValue: data.multipleValue || false,
  //     categoryOrder: data.categoryOrder || "",
  //     registerUserId: data.registerUserId || "",
  //   };

  //   const formValidation = Yup.object().shape({
  //     id: Yup.string()
  //       .required("Required!")
  //       .min(2, "Too Short!")
  //       .max(10, "Too Long!"),
  //     password: Yup.string().required("Required!"),
  //   });

  const handleSubmit = async (values) => {
    console.log(values);
    // alert(JSON.stringify(values, null, 2));
    const Response = await axiosFetch.put(
      `/category/${data.categoryId}`,
      JSON.stringify(values)
    );
    // console.log(Response);

    navigate("/customizeCategoryDetail", {
      state: { categoryId: data.categoryId },
    });
  };
  return (
    <div>
      <ButtonAppBar title="Customize Category Edit" />
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
                <Grid container columnSpacing={1} rowSpacing={2}>
                  <Grid item xs={8}>
                    <CustomTextField
                      data={{ name: "categoryName", label: "Category Name" }}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <CustomTextField
                      data={{ name: "categoryId", label: "Category ID" }}
                      mode="read"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <GroupSelect name="customerGroup.groupId" />
                  </Grid>
                  <Grid item xs={4}>
                    <CustomSelect
                      data={{
                        name: "visible",
                        label: "Visibility",
                        list: [
                          { name: "visible", value: true },
                          { name: "hidden", value: false },
                        ],
                      }}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <CustomSelect
                      data={{
                        name: "multipleValue",
                        label: "Multiple Value",
                        list: [
                          { name: "yes", value: true },
                          { name: "no", value: false },
                        ],
                      }}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <CustomTextField
                      data={{
                        name: "registerUserId",
                        label: "Register User ID",
                      }}
                      mode="read"
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                    >
                      Save
                    </Button>
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <Button
                      variant="contained"
                      sx={{ backgroundColor: "error.light" }}
                      color="error"
                      size="large"
                      onClick={() => {
                        navigate(-1);
                      }}
                      fullWidth
                    >
                      Cancel
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            <br/>
            <Card elevation={4}>
              <CardContent>
                <CategoryItemTable data={data}/>
              </CardContent>
            </Card>
          </Box>
        </Form>
      </Formik>
    </div>
  );
}
