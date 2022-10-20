import "../../App.css";
import React, { useEffect, useState, useRef } from "react";
import { Button, Grid, Stack } from "@mui/material";

import ButtonAppBar from "./Appbar";

import CustForm from "./custForm/CustForm";
import CategoryForm from "./categoryForm/CategoryForm";

import { Formik, Form, useFormikContext } from "formik";
// import axiosClient from "./axios";
import { AxiosFetch } from "../AxiosFetch";

import * as Yup from "yup";
import { useNavigate } from "react-router";
import { AxiosFetch } from "../AxiosFetch";


function NewCustomer() {

	const axiosFetch = AxiosFetch();

	const navigate = useNavigate();
	const axiosFetch=AxiosFetch();

	const initialValues = {
		
			customerGroup:{
				groupId:""
			},
			customerLastName:"",
			customerFirstName:"",
			customerLastRuby:"",
			customerFirstRuby:"",
			customerAddress1:"",
			customerAddress2:"",
			customerAddress3:"",
			customerAddress4:"",
			customerEmail:"",
			customerSex:"",
			customerFirstUserId:"",
			customerSecondUserId:"",
			customerMemo1:"",
			customerMemo2:"",
			customerBusinessType:"",
			customerTableName:"",
			customerFields:"",
			customerAge:"",
			categoryData:{},
	};

	const [groupId, setGroupId] = useState();
	let catObj=[];
	// const [submitAction, setsubmitAction] = useState("");

	const FormObserver = () => {
		const { values } = useFormikContext();
		useEffect(() => {
			setGroupId(values.customerGroup.groupId);
		}, [values.customerGroup.groupId]);
		return null;
	};

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
	const handleSubmit = async (values) => {
		console.log(values,"vvvv");
		Object.entries(values.categoryData).map(([key, value], index) =>
		{
			// console.log("Key" + key + "::>" + "Value" + value)
			catObj[index]={itemId:key,value:value}
		})
		let APIvalues={...values,categoryData:catObj,customerGroup:{groupId:values.customerGroup.groupId}}
		console.log(APIvalues,"API values");
	  
	  const custResponse = await axiosFetch.post(`/customers`,APIvalues);
	  console.log(custResponse);
	  //navigate("/home");
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

	return (
		<>
			<ButtonAppBar title="New Customer" />
			{/* <TemporaryDrawer /> */}
			<Formik
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
	)
}

export default NewCustomer
