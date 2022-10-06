import "../../../App.css";
import React, { useState, useEffect } from "react";
import ButtonAppBar from "../Appbar"
// import TemporaryDrawer from "../../newcustomer/SideNav";
import {Grid, Card, CardContent, Button, Stack, TextField, Box} from "@mui/material";
import CustomerSearchTable from "./CustomerSearchTable";
import { Formik, Form, Field, useFormikContext } from "formik";
import BasicSelect from "../../newcustomer/inputs/BasicSelect";
import CustCategoryFormPlus from "./CustCategoryFormPlus";
import axiosClient from "../axios";
import { AxiosFetch } from "../../AxiosFetch";

export default function CustomerSearchScreenIndex() {
	const axiosFetch=AxiosFetch();
	const initialValues = {
		custData:{
			customerGroupId:"1"
		},
		phoneNumber:"",
		project:[]
	}

	const [groupId, setgroupId] = useState(1);
	const [custInformation, setcustInformation] = useState([]);

	async function handleSearch(values) {
		console.log(values);
		const { categoryData, custData } = values;
		console.log(categoryData);
		let categoryDataArray = [];
		if(categoryData){
			categoryData.forEach((element, index) => {
				if(element){
					categoryDataArray.push(
						{
							itemId: index,
							value: element
						}
					)
				}

			});
		}

		const customerObject = {
			customer: custData,
			categoryData: categoryDataArray
		}

		const custResponse = await axiosFetch.post('/customerList', JSON.stringify(customerObject));

		if(custResponse.status = 200){
			console.log(custResponse.data);
			setcustInformation(custResponse.data);
		}

	}

	const FormObserver = () => {
		const { values } = useFormikContext();
		useEffect(() => {
			// console.log(values.custData.customerGroupId);
			setgroupId(values.custData.customerGroupId || "");
		}, [values.custData.customerGroupId]);
		return null;
	};

	const textField = (props) => {
		return (
			<>
				<TextField {...props} variant="outlined" fullWidth />
			</>
		);
	};

	const customSelect = (props) => {
		return (
			<>
				<BasicSelect {...props} />
			</>
		);
	};

	return (
		<>
			<ButtonAppBar title="Customer Search" />
			{/* <TemporaryDrawer /> */}
			<Formik
				initialValues={initialValues}
				onSubmit={handleSearch}
			>
				<Form>
					<FormObserver/>
					<Grid
						container
						spacing={2}
						justifyContent={"center"}
						alignItems="stretch"
						direction="row"
					>
						<Grid item xs={12} md={3.5}>
							<Card elevation={4}>
								<CardContent>
									<Stack spacing={4}>
										<Box>
											<Field
												type="number"
												name="phoneNumber"
												label="Phone number"
												defaultValue=""
												as={textField}
											/>
										</Box>
										<Box>
											<Field
												name="custData.customerGroupId"
												component={customSelect}
												label="Customer Group"
											/>
										</Box>
										<Box>
											{/* <Field
												name="projectGroup"
												component={customSelect}
												list={testlist}
												label="Project Group"
											/> */}
										</Box>
										<Box>
											<Button variant="contained" fullWidth type="submit">
												Search
											</Button>
										</Box>
									</Stack>
								</CardContent>
							</Card>
						</Grid>
						<Grid item xs={12} md={7.5}>
							<CustCategoryFormPlus groupId = {groupId}/>
						</Grid>
						<Grid item xs={12} md={11}>
							<Card elevation={4} sx={{ minHeight: 500 }}>
								<CardContent>
									<CustomerSearchTable rows = {custInformation}/>
								</CardContent>
							</Card>
						</Grid>
					</Grid>
				</Form>
			</Formik>
		</>
	);
}
