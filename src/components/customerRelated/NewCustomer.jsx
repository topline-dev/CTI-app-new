import "../../App.css";
import React, { useEffect, useState, useRef } from "react";
import { Button, Grid, Stack } from "@mui/material";

import ButtonAppBar from "./Appbar";

import CustForm from "./custForm/CustForm";
import CategoryForm from "./categoryForm/CategoryForm";

import { Formik, Form, useFormikContext } from "formik";
import axiosClient from "./axios";

import * as Yup from "yup";
import { useNavigate } from "react-router";


function NewCustomer() {

	const navigate = useNavigate();

	const initialValues = {
		custData: {
			customerGroupId: 1
		}
	};

	const [groupId, setgroupId] = useState(1);
	const [submitAction, setsubmitAction] = useState("");

	const FormObserver = () => {
		const { values } = useFormikContext();
		useEffect(() => {
			setgroupId(values.custData.customerGroupId || "");
		}, [values.custData.customerGroupId]);
		return null;
	};

	async function handleSubmit(values) {
		// console.log(values);
		const { categoryData, custData } = values;
		console.log(custData);

		const custResponse = await axiosClient.post('/customers', JSON.stringify(custData));

		const customerId = custResponse.data.customerId;

		if (categoryData) {
			let categoryData1 = [];
			categoryData.forEach((item, index) => {
				if (item) {
					let Objj = new Object;
					Objj.itemId = index;
					Objj.customer =  {customerId:customerId};
					Objj.value = item;
					categoryData1.push(Objj);
				}
			})
			let categoryData2 = JSON.stringify(categoryData1);
			const categoryResponse = await axiosClient.post('/categoryData', categoryData2);
			console.log(categoryResponse);
		}
		console.log(custResponse);
		if (custResponse.status = 200) {
			alert(`Customer ${customerId} saved successfully`);
			navigate(`/customer/${customerId}`);
		}
		else {
			alert("Something went wrong");
		}

	}

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
				onSubmit={async (values) => {
					console.log(values);
					if (submitAction === "primary") {
						console.log("Entered primary submit type");
						handleSubmit(values);

					}
					else {
						console.log("Entered secondary submit type");
						handleSubmit(values);
					}
				}}
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
										onClick={() => {
											setsubmitAction("primary");
											handleSubmit();
										}}
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