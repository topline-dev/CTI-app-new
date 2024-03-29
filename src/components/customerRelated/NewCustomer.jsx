import "../../App.css";
import React, { useEffect, useState, useRef } from "react";
import { Button, Grid, Stack } from "@mui/material";

import ButtonAppBar from "./Appbar";

import CustForm from "./custForm/CustForm";
import CategoryForm from "./categoryForm/CategoryForm";

import { Formik, Form, useFormikContext } from "formik";

import * as Yup from "yup";
import { useNavigate } from "react-router";
import { AxiosFetch } from "../AxiosFetch";
import { set } from "date-fns/esm";

export default function NewCustomer() {
  const navigate = useNavigate();
  const axiosFetch = AxiosFetch();

  const template = {
    customerGroup: {groupId:1},
    customerListId: "",
    customerLastName: "",
    customerFirstName: "",
    customerLastRuby: "",
    customerFirstRuby: "",
    customerZipCode: "",
    customerAddress1: "",
    customerAddress2: "",
    customerAddress3: "",
    customerAddress4: "",
    customerEmail: "",
    customerSex: "",
    customerFirstUserId: "",
    customerSecondUserId: "",
    customerModifiedUserId: "",
    customerMemo1: "",
    customerMemo2: "",
    customerLastCallLogFlag1: "",
    customerLastCallLogStartTime: "",
    customerCount: "",
    customerRegisterUserId: "",
    customerRegisterDateTime: "",
    customerModifyUserId: "",
    customerModifyDateTime: "",
    customerBusinessType: "",
    customerNextCallDateTime: "",
    customerTableName: "",
    customerFields: "",
    customerAge: "",
    categoryData: {},
    customerProject: "",
    date: "",
  };

  const [initialValues, setInitialvalues] = useState(template);
  const [isloading, setIsloading] = useState(false);

  const [groupId, setGroupId] = useState();
  let catObj = [];

  async function getDataCategory(props) {
    const response = await axiosFetch.get(`/categoryItemsByGroupId/${props}`);
    //console.log(response, "rrrr");
	return await response.data;
  }

  const FormObserver = () => {
    const { values,setFieldValue } = useFormikContext();
    //console.log(values, "vall");
    useEffect(() => {
      setGroupId(values.customerGroup.groupId);
	 getDataCategory(values.customerGroup.groupId ).then(x => { 
		var test={};
		x.map((data,index)=>{
			test[data.itemId]='';

		})
		//console.log(test,"tessss");
		setFieldValue('categoryData',test);	
	});
    }, [values.customerGroup.groupId]);
    return null;
  };

  


  const handleSubmit = async (values) => {
    console.log(values, "vvvv");
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
    const custResponse = await axiosFetch.post(`/customers`, APIvalues);
    console.log(custResponse);
    // navigate("/home");
  };

  // const formValidation = Yup.object().shape({
  // 	custData: Yup.object().shape({
  // 		customerFirstName: Yup.string()
  // 			.min(2, "Too Short!")
  // 			.max(15, "Too Long!")
  // 			.required("Required!"),
  // 		customerLastName: Yup.string()
  // 			.min(2, "Too Short!")
  // 			.max(15, "Too Long!")
  // 			.required("Required!"),
  // 		customerEmail: Yup.string().email('Must be a valid email').required('email required')
  // 	}),
  // });

  return isloading ? (
    <>Loading</>
  ) : (
    <>
      <ButtonAppBar title="New Customer" />
      {/* <TemporaryDrawer /> */}
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        // validationSchema={formValidation}
        // onSubmit={async (values) => {
        // 	console.log(values);
        // 	if (submitAction === "primary") {
        // 		console.log("Entered primary submit type");
        // 		handleSubmit(values);

        // 	}
        // 	else {
        // 		console.log("Entered secondary submit type");
        // 		handleSubmit(values);
        // 	}
        // }}
        onSubmit={(e) => handleSubmit(e)}
      >
        {/* {({ handleSubmit}) => ( */}
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
                <Button
                  type="button"
                  variant="contained"
                  size="large"
                  fullWidth
                  // onClick={() => {
                  // 	setsubmitAction("primary");
                  // 	handleSubmit();
                  // }}
                  disabled
                >
                  Save and New
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  fullWidth
                  // onClick={() => {
                  // 	setsubmitAction("secondary");
                  // 	handleSubmit();
                  // }}
                >
                  Save
                </Button>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "error.light" }}
                  color="error"
                  size="large"
                  fullWidth
                >
                  Cancel
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Form>
        {/* )} */}
      </Formik>
    </>
  );
}
// async function handleSubmit(values) {
// 	// console.log(values);
// 	const { categoryData, custData } = values;
// 	console.log(custData);

// 	const custResponse = await axiosFetch.post('/customers', JSON.stringify(custData));

// 	const customerId = custResponse.data.customerId;

// 	if (categoryData) {
// 		let categoryData1 = [];
// 		categoryData.forEach((item, index) => {
// 			if (item) {
// 				let Objj = new Object;
// 				Objj.itemId = index;
// 				Objj.customer =  {customerId:customerId};
// 				Objj.value = item;
// 				categoryData1.push(Objj);
// 			}
// 		})
// 		let categoryData2 = JSON.stringify(categoryData1);
// 		const categoryResponse = await axiosFetch.post('/categoryData', categoryData2);
// 		console.log(categoryResponse);
// 	}
// 	console.log(custResponse);
// 	if (custResponse.status = 200) {
// 		alert(`Customer ${customerId} saved successfully`);
// 		navigate(`/customer/${customerId}`);
// 	}
// 	else {
// 		alert("Something went wrong");
// 	}

// }
