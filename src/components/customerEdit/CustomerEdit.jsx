import "../../App.css";
import React, { useEffect } from "react";
import { Button, Grid, Stack } from "@mui/material";
import ButtonAppBar from "../customerRelated/Appbar";
import TemporaryDrawer from "../newcustomer/SideNav";
import CustForm from "../customerRelated/custForm/CustForm";
import { Formik, Form, useFormikContext } from "formik";
import CategoryForm from "../customerRelated/categoryForm/CategoryForm";
import { useLocation, useNavigate } from "react-router";
import { AxiosFetch } from "../AxiosFetch";
import { useState } from "react";
import { set } from "date-fns";

export default function CustomerEdit() {
  let navigate = useNavigate();
  const axiosFetch = AxiosFetch();

  const location = useLocation();
  const initialValues = location.state.data;
  // console.log(initialValues, "edit screen initial Values");

  // const groupId=initialValues.customerGroup.groupId;
  const [groupId, setGroupId] = useState(initialValues.customerGroup.groupId);
  let catObj = [];
  async function getDataCategory(props) {
    const response = await axiosFetch.get(`/categoryItemsByGroupId/${props}`);
    //console.log(response, "rrrr");
    return await response.data;
  }

  const FormObserver = () => {
    const { values, setFieldValue } = useFormikContext();
    // console.log(values, "live form values");
    useEffect(() => {
      setGroupId(values.customerGroup.groupId);
      getDataCategory(values.customerGroup.groupId).then((x) => {
        var test = {};
        x.map((data, index) => {
          test[data.itemId] = "";
        });
        // console.log(test,"tttt",initialValues.customerGroup.groupId,values.customerGroup.groupId);
        if (
          initialValues.customerGroup.groupId !==
          values.customerGroup.groupId
        ) {
          setFieldValue("categoryData", test);
          // console.log("yesssss");
        }
        else{
          setFieldValue("categoryData", initialValues.categoryData);
        }
      });
    }, [values.customerGroup.groupId]);
    return null;
  };

  const handleSubmit = async (values) => {
    Object.entries(values.categoryData).map(([key, value], index) => {
      // console.log("Key" + key + "::>" + "Value" + value)
      catObj[index] = { itemId: key, value: value };
    });
    let APIvalues = {
      ...values,
      categoryData: catObj,
      customerGroup: { groupId: values.customerGroup.groupId },
    };
    console.log(APIvalues, "API values");

    const custResponse = await axiosFetch.put(
      `/customers/${values.customerId}`,
      APIvalues
    );
    console.log(custResponse);
    // navigate(-1);
  };
  // console.log(initialValues,"iiiii");
  return (
    <>
      <ButtonAppBar title="Customer Edit" />
      <TemporaryDrawer />
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        // validationSchema={formValidation}
        onSubmit={(e) => handleSubmit(e)}
      >
        <Form>
          <FormObserver />
          <Grid container spacing={2} justifyContent={"center"}>
            <Grid item xs={12} md={5.5}>
              <CustForm />
            </Grid>
            <Grid item xs={12} md={5.5}>
              <CategoryForm groupId={groupId} />
              <br />
              <Stack direction="row" spacing={2}>
                {/* <Button variant="contained" size="large" fullWidth>
                    Button 11
                  </Button> */}
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  fullWidth
                >
                  Save
                </Button>
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
              </Stack>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </>
  );
}
