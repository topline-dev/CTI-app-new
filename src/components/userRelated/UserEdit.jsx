import React from "react";
import {
  Grid,

  Box,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import ButtonAppBar from "../customerRelated/Appbar";
import { Formik, Form } from "formik";
import CustomTextfield from "../formikInputs/CustomTextField";
import { useState } from "react";
import { useNavigate } from "react-router";
import GroupMultiSelect from "../formikInputs/GroupMultiSelect";
import { useLocation } from "react-router";

import * as Yup from "yup";

import CustomMultiSelectCheck from "../formikInputs/CustomMultiSelectCheck";
import { AxiosFetch } from "../AxiosFetch";

export default function UserEdit(props) {
  let navigate = useNavigate();
  const axiosFetch=AxiosFetch();

const location=useLocation();
const initialValues=location.state.data;

  var group=[];
  var privilegeAPI=0;
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
  
//   const initialValues = {
//     userId: "",
//     userPassword: "",
//     extNumber: "",
//     lastName: "",
//     firstName: "",
//     lastKana: "",
//     firstKana: "",
//     privilege: [],
//     groupId: [],
//   };


  //   const formValidation = Yup.object().shape({
  //     id: Yup.string()
  //       .required("Required!")
  //       .min(2, "Too Short!")
  //       .max(10, "Too Long!"),
  //     password: Yup.string().required("Required!"),
  //   });

  const handleSubmit = async (values) => {
    // await new Promise((r) => setTimeout(r, 500));
    console.log(values);
    values.groupId.map((data,index)=>{
      group[index]={groupId:data};
    
    }) 
    values.privilege.sort();
    values.privilege.reverse().map((data,index)=>{
      privilegeAPI=privilegeAPI+(data*Math.pow(10,index));
    })
    values.privilege.reverse();

    // let APIvalues={...values,customerGroups:group,privilege:privilegeAPI}
    var APIvalues={
        firstName:values.firstName,
        lastName:values.lastName,
        extensionNumber:values.extensionNumber,
        firstKana:values.firstKana,
        lastKana:values.lastKana,
        customerGroups:group,
        privilege:privilegeAPI,
    }
    delete APIvalues.groupId;
    privilegeAPI=0;

    alert(JSON.stringify(APIvalues, null, 2));
    const custResponse = await axiosFetch.put(`/user/${values.userId}`, JSON.stringify(APIvalues));
    // console.log(custResponse);
    //navigate("/home");
  };
  return (
    <div>
      <ButtonAppBar title="User Edit" />
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
                  <Grid item md={4} xs={6}>
                    <CustomTextfield
                      data={{ name: "userId", label: "User ID" }}
                      mode="read"
                    />
                  </Grid>
                  {/* <Grid item md={4} xs={6}>
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
                  </Grid> */}
                  <Grid item xs={6} md={4}>
                    <CustomTextfield
                      data={{ name: "extensionNumber", label: "Extension Number" }}
                      type="number"
                    />
                  </Grid>
                  <Grid item md={4} xs={6}>
                    <CustomMultiSelectCheck
                      data={{
                        name: "privilege",
                        label: "User Role",
                        list: list,
                      }}
                    />
                  </Grid>
                  <Grid item md={6} xs={6}>
                    <CustomTextfield
                      data={{ name: "lastName", label: "Last Name" }}
                    />
                  </Grid>
                  <Grid item md={6} xs={6}>
                    <CustomTextfield
                      data={{ name: "firstName", label: "First Name" }}
                    />
                  </Grid>
                 
                  <Grid item md={6} xs={6}>
                    <CustomTextfield
                      data={{ name: "lastKana", label: "Last Kana Name" }}
                    />
                  </Grid>

                  <Grid item md={6} xs={6}>
                    <CustomTextfield
                      data={{ name: "firstKana", label: "First Kana Name" }}
                    />
                  </Grid>

                  {/* <Grid item md={12}>
                    <CustomMultiSelectCheck
                      data={{
                        name: "groupIddd",
                        label: "Select Group",
                        list: pp,
                      }}
                    />
                  </Grid> */}
                  <Grid item md={12} xs={12}>
                    <GroupMultiSelect name="groupId"/>
                  </Grid>
                  
                  <Grid item md={4} xs={12}>
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
                      sx={{ backgroundColor: "error.light" }}
                      color="error"
                      size="large"
                      onClick={()=>{navigate(-1)}}
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
