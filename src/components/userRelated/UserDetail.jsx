import React, { useEffect } from "react";
import { Grid, Box, Button, Card, CardContent } from "@mui/material";
import ButtonAppBar from "../customerRelated/Appbar";
import { Formik, Form } from "formik";
import CustomTextfield from "../formikInputs/CustomTextField";

import { useState } from "react";
import { useNavigate } from "react-router";

import GroupMultiSelect from "../formikInputs/GroupMultiSelect";
import { AxiosFetch } from "../AxiosFetch";

import * as Yup from "yup";

import CustomMultiSelectCheck from "../formikInputs/CustomMultiSelectCheck";

export default function UserDetail(props) {
  let navigate = useNavigate();
  const axiosFetch = AxiosFetch();

  const id = "000";
  const [isLoading, setIsLoading] = useState(true);

  let temp = [];
  let temp2 = [];

  const roleList = [
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
    { value: 2, name: "gg" },
    { value: 3, name: "vv" },
  ];
  // const initialValues = {
  //   userId: "",
  //   extNumber: "",
  //   lastName: "",
  //   firstName: "",
  //   lastKana: "",
  //   firstKana: "",
  //   privilege: [],
  //   groupId: [],
  // };

  const [initialValues, setInitialValues] = useState();

  useEffect(() => {
    async function getData() {
      const response = await axiosFetch.get(`/user/${id}`);
      if (response.status === 200) {
        // console.log(response.data);
        response.data.customerGroups.map((data, index) => {
          temp[index] = data.groupId;
        });
        temp2 = Array.from(String(response.data.privilege), Number);
        setInitialValues({ ...response.data, privilege: temp2, groupId: temp });
        setIsLoading(false);
      }
    }
    getData();
  }, []);

  const handleSubmit = async (values) => {
    navigate("/userEdit", {
      state: { from: "detail screen", data: initialValues },
    });
  };
  return isLoading ? (
    <div>Loading</div>
  ) : (
    <div>
      <ButtonAppBar title="User Detail" />
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
                      // type="number"
                    />
                  </Grid>

                  <Grid item xs={6} md={4}>
                    <CustomTextfield
                      data={{ name: "extNumber", label: "Extension Number" }}
                      type="number"
                      mode="read"
                    />
                  </Grid>
                  <Grid item md={4} xs={6}>
                    <CustomMultiSelectCheck
                      data={{
                        name: "privilege",
                        label: "User Role",
                        list: roleList,
                      }}
                      mode="read"
                    />
                  </Grid>
                  <Grid item md={6} xs={6}>
                    <CustomTextfield
                      data={{ name: "lastName", label: "Last Name" }}
                      mode="read"
                    />
                  </Grid>
                  <Grid item md={6} xs={6}>
                    <CustomTextfield
                      data={{ name: "firstName", label: "First Name" }}
                      mode="read"
                    />
                  </Grid>

                  <Grid item md={6} xs={6}>
                    <CustomTextfield
                      data={{ name: "lastKana", label: "Last Kana Name" }}
                      mode="read"
                    />
                  </Grid>

                  <Grid item md={6} xs={6}>
                    <CustomTextfield
                      data={{ name: "firstKana", label: "First Kana Name" }}
                      mode="read"
                    />
                  </Grid>

                  {/* <Grid item md={12}>
                    <CustomMultiSelectCheck
                      data={{
                        name: "groupId",
                        label: "Select Group",
                        list: variableList,
                      }}
                    />
                  </Grid> */}
                  <Grid item md={12} xs={12}>
                    <GroupMultiSelect name="groupId" />
                  </Grid>

                  <Grid item md={4} xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                    >
                      Edit
                    </Button>
                  </Grid>
                  <Grid item xs={4}>
                    <Button
                      variant="contained"
                      sx={{ backgroundColor: "error.light" }}
                      color="error"
                      size="large"
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
