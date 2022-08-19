import '../../App.css';
import React, { useEffect, useState, useRef } from 'react';
import { Button, Grid, Stack, } from '@mui/material';
import ButtonAppBar from './Appbar';
import TemporaryDrawer from './SideNav';
import CustForm from '../custForm/CustForm';
import { Formik, Form, useFormikContext } from 'formik';
import CategoryForm from '../categoryForm/categoryForm'
import axios from 'axios';

export default function NewCustomerScreenIndex() {
	const initialValues = {
		custData: {
			customerGroupId: 1
		}
	};

	const [groupId, setgroupId] = useState(1);

	const axiosClient = axios.create({
		baseURL: "http://topline-cti.com:8083",
		headers: {
			"Content-Type": "application/json"
		}
	});

	async function handleSubmit(values) {
		const { categoryData, custData } = values;

		const custResponse = await axiosClient.post('/customers', JSON.stringify(custData));

		const customerId = custResponse.data.customerId;

		if (categoryData) {
			let categoryData1 = [];
			categoryData.forEach((item, index) => {
				if (item) {
					let Objj = new Object;
					Objj.itemId = index;
					Objj.customerId = customerId;
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
			alert("Customer saved successfully");
		}
		else {
			alert("Something went wrong");
		}

	}


	const FormObserver = () => {
		const { values } = useFormikContext();
		useEffect(() => {
			console.log(values.custData.customerGroupId)
			setgroupId(values.custData.customerGroupId || "");
		}, [values.custData.customerGroupId]);
		return null;
	};

	return (
		<>
			<ButtonAppBar title="New Customer" />
			<TemporaryDrawer />
			<Formik
				initialValues={initialValues}
				onSubmit={async (values) => {
					await new Promise((r) => setTimeout(r, 500));
					handleSubmit(values);
				}}
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
							<Stack direction="row" spacing={2} >
								<Button variant='contained' size="large" fullWidth>Button 11</Button>
								<Button type='submit' variant='contained' size="large" fullWidth>Save</Button>
								<Button variant='contained' sx={{ backgroundColor: "error.light" }} color="error" size="large" fullWidth>Cancel</Button>
							</Stack>
						</Grid>
					</Grid>
				</Form>
			</Formik>
		</>
	);
}
