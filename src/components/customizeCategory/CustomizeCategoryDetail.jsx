import { Box, Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { AxiosFetch } from "../AxiosFetch";
import ButtonAppBar from "../customerRelated/Appbar";
import CategoryData from "../customerRelated/categoryForm/CategoryData";
import CustomSelect from "../formikInputs/CustomSelect";
import CustomTextField from "../formikInputs/CustomTextField";
import GroupSelect from "../formikInputs/GroupSelect";

export default function CustomizeCategoryDetail(props) {
  //   const formValidation = Yup.object().shape({
  //     id: Yup.string()
  //       .required("Required!")
  //       .min(2, "Too Short!")
  //       .max(10, "Too Long!"),
  //     password: Yup.string().required("Required!"),
  //   });

  let navigate = useNavigate();
  const axiosFetch = AxiosFetch();
  const location = useLocation();
  const categoryId = location.state.categoryId;
  const [isLoading, setIsLoading] = useState(true);

  const [initialValues, setInitialValues] = useState();
  useEffect(() => {
    async function getData() {
      const response = await axiosFetch.get(`/categoryById/${categoryId}`);
      console.log(response);
      if (response.status === 200) {
        //  console.log(response.data,"rrrr");
        setInitialValues(response.data);
        setIsLoading(false);
      }
    }
    getData();
  }, []);

  const handleSubmit = async (values) => {
    console.log(values);
    //   alert(JSON.stringify(values, null, 2));
    navigate("/customizeCategoryEdit", {
      state: { data: initialValues },
    });
  };
  return isLoading ? (
    <div>Loading</div>
  ) : (
    <div>
      <ButtonAppBar title="Customize Category Detail" />
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
                      mode="read"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <CustomTextField
                      data={{ name: "categoryId", label: "Category ID" }}
                      mode="read"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <GroupSelect name="customerGroup.groupId" mode="read" />
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
                      mode="read"
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
                      mode="read"
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
                  <Grid item xs={6}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                    >
                      Edit
                    </Button>
                  </Grid>

                  <Grid item xs={6}>
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
            <br />
            <Card elevation={4}>
              <CardContent>
                <Typography variant="h5" gutterBottom align="center">
                 Category Preview
                </Typography>
                <CategoryData categoryId={categoryId} />
              </CardContent>
            </Card>
          </Box>
        </Form>
      </Formik>
    </div>
  );
}
