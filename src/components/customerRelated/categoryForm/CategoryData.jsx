import React, { useState, useEffect } from 'react'
import { Grid } from '@mui/material'
import { AxiosFetch } from "../../AxiosFetch";
import CustomTextField from '../../formikInputs/CustomTextField';
import { AxiosFetch } from '../../AxiosFetch';




function CategoryData(props) {

	const axiosFetch=AxiosFetch();
	const mode = props.mode ;
	// const customerId = props.customerId;

	const [categoryItems, setCategoryItems] = useState([]);

	const axiosFetch=AxiosFetch();

	//console.log(categoryItems);
	useEffect(() => {
		async function getData() {
			const response = await axiosFetch.get(`/categoryItems/${props.categoryId}`);
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
					return <CustomTextField mode={mode} data={{ name: `categoryData.${item.itemId}`, label: item.itemName }} />;
					
				}
				
			case "date":
				{
					return <CustomTextField mode={mode} data={{ name: `categoryData.${item.itemId}`, label: item.itemName }} type="date"/>;
					// <CustomDateTime data={item} mode={mode} customerId={customerId}/>
				}
				case "datetime":
				{
					return <CustomTextField mode={mode} data={{ name: `categoryData.${item.itemId}`, label: item.itemName }} type="datetime-local"/>;
				}
				// case "select":
				// {
				// 	return <CustomTextField mode={mode} data={{ name: `categoryData.${item.itemId}`, label: item.itemName,list: }} type="datetime-local"/>;
				// }
				
				
			// Add all cases here for the category options.
			default:
				return <div></div>
				break;
		}
	}

	const items = categoryItems.map((item,index) =>
		<Grid item xs={6} key={index}>{renderItem(item)}</Grid>)

	return (
		<Grid container columnSpacing={1} rowSpacing={1} >
			{items}
		</Grid>

	)
}

export default CategoryData
