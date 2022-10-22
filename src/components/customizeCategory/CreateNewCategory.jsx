import React from "react";
import { Card, CardContent, Button, Grid } from "@mui/material";
import ButtonAppBar from "../customerRelated/Appbar";
import { Formik, Form } from "formik";
import CustomTextField from "../formikInputs/CustomTextField";
import { Box } from "@mui/system";
import CustomSelect from "../formikInputs/CustomSelect";
import { useNavigate } from "react-router";
import GroupSelect from "../formikInputs/GroupSelect";
import { AxiosFetch } from "../AxiosFetch";
export default function CreateNewCategory() {
  //     const textField = (props) => {
  //         return(
  //             <>
  //                 <TextField
  //                     {...props}
  //                     variant="outlined"
  //                     fullWidth
  //                 />
  //             </>
  //         )
  //     }
  //     const customSelect =(props) =>{
  //         return(
  //             <>
  //                 <BasicSelect
  //                     {...props}
  //                 />
  //             </>
  //         )
  //     }
  //    const initialValues={
  //         categoryName:"",
  //         categoryRemarks:"",
  //         numberOfColumn:"",
  //         tabDisplay:"",
  //         displayHide:"",
  //     }
  //   return (
  //     <div>
  //     <ButtonAppBar title="New Category"/>
  //     <br/><br/>
  //     <Formik
  //       //innerRef={ref}
  //       initialValues={initialValues}
  //       onSubmit={async (values) => {
  //         await new Promise((r) => setTimeout(r, 500));
  //         alert(JSON.stringify(values, null, 2));
  //         console.log(values);
  //       }}
  //     >
  //       <Form>
  //         <Container maxWidth="xl">
  //             <Card elevation={4}>
  //                 <CardContent>
  //                 <Grid container columnSpacing={1} rowSpacing={1}>
  //                     <Grid item xs={12}>
  //                         <Field as={textField} name="categoryName" label="New category name" />
  //                     </Grid>
  //                     <Grid item xs={12}>
  //                         <Field as={textField} name="categoryRemarks" label="Remarks" multiline rows={3}/>
  //                     </Grid>
  //                     <Grid item xs={12}>
  //                         <Field as={textField} name="numberOfColumn" label="Number of Displayed Column" type="number"/>
  //                     </Grid>
  //                     <Grid item xs={6}>
  //                         <Field component={customSelect} name="tabDisplay" label="Tab display" list={["possible","impossible"]} />
  //                     </Grid>
  //                     <Grid item xs={6}>
  //                         <Field component={customSelect}name="tabDisplay" label="Tab display" list={["possible","impossible"]}/>
  //                     </Grid>
  //                 </Grid>
  //                 </CardContent>
  //                 <CardActions>
  //                     <Button type='submit' variant='contained'  size="large" >Save</Button>
  //                     <Button type='submit' variant='contained'  size="large" >Save and New</Button>
  //                     <Button variant='contained' size="large" sx={{backgroundColor:"error.light"}} color="error">Cancel</Button>
  //                 </CardActions>
  //             </Card>
  //         </Container>
  //       </Form>
  //     </Formik>

  //     </div>
  //   )
  let navigate = useNavigate();
  const axiosFetch=AxiosFetch();

  const initialValues = {
    categoryName: "",
    customerGroup: {
      groupId: "",
    },
    visible: "",
    multipleValue: "",
    categoryOrder: "",
    registerUserId: "",
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
    alert(JSON.stringify(values, null, 2));
    const Response = await axiosFetch.post('/category', JSON.stringify(values));
    console.log(Response);
    //navigate("/home");
  };
  return (
    <div>
      <ButtonAppBar title="New Category" />
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
              px: "20%",
              py: "5%",
              // background: "red",
            }}
          >
            <Card elevation={4}>
              <CardContent>
                <Grid container columnSpacing={1} rowSpacing={4}>
                  <Grid item xs={12}>
                    <CustomTextField
                      data={{ name: "categoryName", label: "Category Name" }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <GroupSelect name="customerGroup.groupId" />
                  </Grid>
                  <Grid item xs={6}>
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
                  <Grid item xs={6}>
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
                    <Button
                      variant="contained"
                      size="large"
                      fullWidth
                    >
                      Save and New
                    </Button>
                  </Grid>

                  <Grid item xs={4}>
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
          </Box>
        </Form>
      </Formik>
    </div>
  );
}
