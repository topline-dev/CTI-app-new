import React from 'react'
import {Grid} from '@mui/material'
import { Formik, Form, useFormikContext } from 'formik';

import CustomTextfield from './categoryItems/customTextfield'


const categoryItems = [
	{
		itemId: 1,
		itemName: "Name",
		categoryId: 1,
		itemType: 1,
		itemMandatory: 1,
	},
	{
		itemId: 2,
		itemName: "Mob",
		categoryId: 1,
		itemType: 2,
		itemMandatory: 1,
	},
	{
		itemId: 3,
		itemName: "Name Last",
		categoryId: 1,
		itemType: 3,
		itemMandatory: 1,
	},
	{
		itemId: 4,
		itemName: "Dated",
		categoryId: 1,
		itemType: 4,
		itemMandatory: 1,
	}
]

function renderItem(item) {
	switch (item.itemType) {
		case 1:
			{
				return <CustomTextfield data={item} />
			}
		case 2:
			{
				return <CustomTextfield data={item} />
			}
			break;
		case 3:
			{
				return <CustomTextfield data={item} />
			}
			break;
		case 4:
			{
				return <CustomTextfield data={item} />
			}
			break;
		case 5:
			{
				return <CustomTextfield data={item} />
			}
			break;
		case 6:
			{
				return <CustomTextfield data={item} />
			}
			break;

		default:
			return "Hello"
			break;
	}
}

const items = categoryItems.map((item) =>  
	<Grid item xs={6}>{renderItem(item)}</Grid> )

function categoryData(props) {
	return (
		<Grid container columnSpacing={1} rowSpacing={1} >
			{items}
		</Grid>
		
	)
}

export default categoryData