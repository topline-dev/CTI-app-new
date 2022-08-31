import React, { useState, useEffect } from 'react'
import { Grid } from '@mui/material'
import axiosClient from '../axios';

import CustomTextField from '../../formikInputs/CustomTextField';



function CategoryData(props) {

	const readMode = props.mode ? true : false;
	// const customerId = props.customerId;

	const [categoryItems, setCategoryItems] = useState([]);

	useEffect(() => {
		async function getData() {
			const response = await axiosClient.get(`/categoryItems/${props.categoryId}`);
			if (response.status === 200) {
				setCategoryItems(response.data);
			}
		}
		getData();

	}, [])

	function renderItem(item) {
		switch (item.itemType) {
			case "text":
				{
					return <CustomTextField mode={readMode} data={{ name: `categoryData.${item.itemId}`, label: item.itemName }} />;
				}
				break;
			case "date":
				{
					return "Hello date";
					// <CustomDateTime data={item} mode={mode} customerId={customerId}/>
				}
				break;
			// Add all cases here for the category options.
			default:
				return <div></div>
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

export default CategoryData