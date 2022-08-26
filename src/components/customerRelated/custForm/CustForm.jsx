import React from "react";
import {
	Card,
	Grid,
	Typography,
	Button,
	CardContent,
	TextField,
	Stack,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Field, FieldArray, FastField } from "formik";
// import BasicSelect from "../newcustomer/inputs/BasicSelect";

import { useField } from "formik";
import CustTextField from "./custItems/custTextfield";
import CustomerGroupSelect from "./custItems/customerGroupSelect";
import CustomTextField from '../../formikInputs/CustomTextField';

export default function CustForm(props) {
	let readMode;
	if (props.mode === "read") {
		readMode = true;
	} else {
		readMode = false;
	}
	// const customSelect = (props) => {
	// 	return (
	// 		<>
	// 			<BasicSelect {...props} />
	// 		</>
	// 	);
	// };

	return (
		<>
			<Card sx={{ minWidth: 275 }} elevation={4}>
				<CardContent>
					<Typography
						sx={{ fontSize: 15 }}
						color="black"
						style={{ fontWeight: "bold" }}
						align="center"
						gutterBottom
					>
						Customer Information
					</Typography>
					<Grid container columnSpacing={1} rowSpacing={1}>
						<Grid item xs={4}>
						<CustomTextField data={{ name: "custData.customerLastName", label: "Last Name" }} />
							{/* <CustTextField
								data={{ name: "customerLastName", label: "Last Name" }}
								InputProps={{
									readOnly: readMode,
								}}
							/> */}
						</Grid>
						<Grid item xs={4}>
							<CustTextField
								InputProps={{
									readOnly: readMode,
								}}
								data={{ name: "customerFirstName", label: "First Name" }}
							/>
							{/* <Field name="custData.customerFirstName" label="First Nameeee" as={textField} /> */}
						</Grid>
						<Grid item xs={4}>
							<CustTextField
								data={{ name: "customerSex", label: "Sex" }}
								InputProps={{
									readOnly: readMode,
								}}
							/>
						</Grid>
						<Grid item xs={4}>
							<CustTextField
								InputProps={{
									readOnly: readMode,
								}}
								data={{ name: "customerLastRuby", label: "Last Kana Name" }}
							/>
						</Grid>
						<Grid item xs={4}>
							<CustTextField
								InputProps={{
									readOnly: readMode,
								}}
								data={{ name: "customerFirstRuby", label: "First Kana Name" }}
							/>
						</Grid>
						<Grid item xs={4}>
							<CustTextField
								InputProps={{
									readOnly: readMode,
								}}
								data={{ name: "customerBirthday", label: "Birthday" }}
							/>
							{/* <Field
                                name='custForm.customerBirthday'
                                label="Birthday"
                                type="date"
                                as={textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            /> */}
						</Grid>

						<Grid item xs={6}>
							<CustTextField
								InputProps={{
									readOnly: readMode,
								}}
								data={{ name: "telephone", label: "Telephone" }}
								type="number"
							/>
						</Grid>
						<Grid item xs={6}>
							<CustTextField
								InputProps={{
									readOnly: readMode,
								}}
								data={{ name: "customerEmail", label: "Email" }}
								type="email"
							/>
						</Grid>
						<Grid item xs={7}>
							<CustTextField
								InputProps={{
									readOnly: readMode,
								}}
								data={{ name: "customerAddress1", label: "Address 1" }}
							/>
						</Grid>
						<Grid item xs={5}>
							<CustTextField
								InputProps={{
									readOnly: readMode,
								}}
								data={{ name: "customerZipCode", label: "Zipcode" }}
								type="number"
							/>
						</Grid>
						<Grid item xs={6}>
							<CustTextField
								InputProps={{
									readOnly: readMode,
								}}
								data={{ name: "customerAddress2", label: "Address 2" }}
							/>
						</Grid>
						<Grid item xs={6}>
							<CustTextField
								InputProps={{
									readOnly: readMode,
								}}
								data={{ name: "customerAddress3", label: "Address 3" }}
							/>
						</Grid>
						<Grid item xs={7}>
							<CustTextField
								InputProps={{
									readOnly: readMode,
								}}
								data={{ name: "customerAddress4", label: "Address 4" }}
							/>
						</Grid>
						<Grid item xs={5}>
							<CustTextField
								InputProps={{
									readOnly: readMode,
								}}
								data={{ name: "customerBusinessType", label: "Profession" }}
							/>
						</Grid>
						{/* <Grid item xs={6}>
							<Field

								name="custData.customerGroupId"
								component={customSelect}
								label="Customer Group"
							/>
						</Grid>
						<Grid item xs={6}>
							<Field

								name="custData.customerProjectGroup"
								component={customSelect}
								label="Project Group"
							/>
						</Grid> */}
						<Grid item xs={6}>
							<CustTextField
								InputProps={{
									readOnly: readMode,
								}}
								data={{ name: "customerRegisterUserId", label: "Author" }}
								value="3603"
								disabled
							/>
						</Grid>
						<Grid item xs={6}>
							<CustTextField
								InputProps={{
									readOnly: readMode,
								}}
								data={{
									name: "customerModifyUserId",
									label: "Last Updated by",
								}}
								value="3603"
								disabled
							/>
						</Grid>
						<Grid item xs={6}>
							<CustTextField
								InputProps={{
									readOnly: readMode,
								}}
								data={{ name: "customerMemo1", label: "Memo 1" }}
								multiline
								rows={3}
							/>
						</Grid>
						<Grid item xs={6}>
							<CustTextField
								InputProps={{
									readOnly: readMode,
								}}
								data={{ name: "customerMemo2", label: "Memo 2" }}
								multiline
								rows={3}
							/>
						</Grid>
					</Grid>
				</CardContent>
				{/* <CardActions>
        <Button size="small">Learn More</Button>
        </CardActions>*/}
			</Card>
		</>
	);
}
