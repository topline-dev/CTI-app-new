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
	const initialValues = {}

	const [groupId, setgroupId] = useState();

	const axiosClient = axios.create({
		baseURL: "http://topline-cti.com:8083",
		headers: {
			"Content-Type": "application/json"
		}
	});

	// const FormObserver = () => {
	// 	const { values } = useFormikContext();
	// 	useEffect(() => {
	// 		setgroupId(values?.custData.customerGroupId);
	// 	}, [values.custData.customerGroupId]);
	// 	return null;
	// };

	async function handleSubmit(values){
		alert("Saving Customer");
		const {categoryData, custData} = values;
		console.log(custData);
		const custData1 = JSON.stringify(custData);
		const custResponse = await axiosClient.post('/customers', custData1);
		console.log(custResponse);
		
	}


	return (
		<>
			<ButtonAppBar title="New Customer" />
			<TemporaryDrawer />
			<Formik
				initialValues={initialValues}
				onSubmit={async (values) => {
					await new Promise((r) => setTimeout(r, 500));
					handleSubmit(values);
					// alert(JSON.stringify(values, null, 2));

					// console.log(values);
				}}
			>
				<Form>
					{/* <FormObserver /> */}
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
