import React, { useState } from "react";
import { Grid, Box, Button, Card, CardContent } from "@mui/material";
import ButtonAppBar from "../customerRelated/Appbar";
import { Formik, Form } from "formik";
import CustomTextfield from "../formikInputs/CustomTextField";
import CustomSelect from "../formikInputs/CustomSelect";
import { useNavigate } from "react-router";
import UserSearchTable from "./UserSearchTable";
import { AxiosFetch } from "../AxiosFetch";
import axiosClient from "../customerRelated/axios";
import GroupSelect from "../formikInputs/GroupSelect";

export default function UserSearch(props) {
  let navigate = useNavigate();
  const axiosFetch= AxiosFetch();
  const[userRows,setUserRows]=useState([]);


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

  const list = [
    { name: "Role 1", value: 1 },
    { name: "Role 2", value: 2 },
    { name: "Admin", value: 3 },
  ];

  const initialValues = {
    userId: "",
    groupId: "",
    firstName: "",
    lastName: "",
    extensionNumber: "",
  };

  // const formValidation = Yup.object().shape({
  //   id: Yup.string()
  //     .required("Required!")
  //     .min(2, "Too Short!")
  //     .max(10, "Too Long!"),
  //   password: Yup.string().required("Required!"),
  // });

  const handleSubmit = async (values) => {

    console.log(values);
    var apiValues = {...values,customerGroups:[{groupId:values.groupId}]}
    delete apiValues.groupId;
    console.log(apiValues);
    // let tt={
    //   "userId":"",
    //   "firstName":"",
    //   "lastName":"",
    //   "extensionNumber":"",
    //   "customerGroups":[
    //     {
    //       "groupId":2
    //     }
    //   ]
    
    // }
    const Response = await axiosFetch.post('/userList', JSON.stringify(apiValues));
    console.log(Response);
    var temp=[];
    Response.data.map((data,index)=>{
      temp[index]={
        id:index+1,
        userId: data.userId,
        lastName:data.lastName,
        firstName: data.firstName,
        privilege: data.privilege,
      }
    });
    console.log(temp,"temppppp");
    setUserRows(temp);



    //navigate("/home");
  };
  return (
    <div>
      <ButtonAppBar title="User Search" />
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
              px: "5%",
              py: "2%",
              // background: "red",
            }}
          >
            <Grid container columnSpacing={2} rowSpacing={4}>
              <Grid item xs={12}>
                <Card elevation={4}>
                  <CardContent>
                    <Grid container columnSpacing={1} rowSpacing={2}>
                      <Grid item xs={6}>
                        <CustomTextfield
                          data={{ name: "userId", label: "User ID" }}
                          type="number"
                        />
                      </Grid>

                      <Grid item xs={6}>
                        <CustomTextfield
                          data={{
                            name: "extensionNumber",
                            label: "extension number",
                          }}
                          type="number"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <CustomTextfield
                          data={{ name: "lastName", label: "Last Name" }}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <CustomTextfield
                          data={{ name: "firstName", label: "First Name" }}
                        />
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <GroupSelect name="groupId"/>
                      </Grid>

                      <Grid item xs={4}>
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          fullWidth
                        >
                          Search
                        </Button>
                      </Grid>
                      <Grid item xs={4}>
                        <Button variant="contained" size="large" fullWidth>
                          Output
                        </Button>
                      </Grid>
                      <Grid item xs={4}>
                        <Button variant="contained" size="large" fullWidth onClick={()=>navigate("/newUser")}>
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
                    <UserSearchTable rows={userRows} />
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
