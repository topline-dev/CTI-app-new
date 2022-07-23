import React, { useState, useEffect } from 'react'
import { Grid } from '@mui/material'
import { Formik, Form, useFormikContext } from 'formik';
import axios from 'axios'

import CustomTextfield from './categoryItems/customTextfield'
import CustomDateTime from './categoryItems/customDateTime'
import CustomSelect from './categoryItems/customSelect'



function categoryData(props) {

	const baseURL = "http://localhost:8083/categoryItems/" + props.categoryId

	const [categoryItems, setCategoryItems] = useState([]);

	useEffect(() => {
		axios.get(baseURL)
			.then((response) => {
				setCategoryItems(response.data);
			})
	}, [])

	function renderItem(item) {
		switch (item.itemType) {
			case "text":
				{
					return <CustomTextfield data={item} />
				}
				break;
			case "date":
				{
					return <CustomDateTime data={item} />
				}
				break;
			case "select":
				{
					return <CustomSelect data={item} />
				}
				break;
			default:
				return "Hello"
				break;
		}
	}

	const items = categoryItems.map((item) =>
		<Grid item xs={6}>{renderItem(item)}</Grid>)

	return (
		<Grid container columnSpacing={1} rowSpacing={1} >
			{items}
		</Grid>

	)
}

export default categoryData