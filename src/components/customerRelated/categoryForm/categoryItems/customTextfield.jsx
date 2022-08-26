import React from 'react'
import { TextField, Typography } from '@mui/material';
import { Field, FastField } from 'formik';
import { Category } from '@mui/icons-material';
import { useState,useEffect } from 'react';
import axios from 'axios';




export default function customTextField(props) {
    const mode=props.mode;
    const customerId=props.customerId;
    let readMode;
    if (props.mode === "read") {
      readMode = true;
    } else {
      readMode = false;
    }

    const baseURL = `http://topline-cti.com:8083/categoryData/${customerId}`

	const [categoryItemData, setCategoryItemData] = useState([]);
    let defaultValue;
	useEffect(() => {
		axios.get(baseURL)
			.then((response) => {
				setCategoryItemData(response.data);
			})
	}, [])
    categoryItemData.map((categoryData)=>
    {
        if(categoryData.itemId == props.data.itemId)
        {
            defaultValue=categoryData.value;
        } 
    })

    const textField = (props) => {
        return (
            <>
                <TextField
                    {...props}
                    variant="outlined"
                    fullWidth
                />
            </>
        )
    }
    const data = props.data;
    return (
        <div>
            <Field
                // name = {` ${data.categoryId}.${data.itemId} `}
                name = {`categoryData.${data.itemId}`}
                label={data.itemName}
                defaultValue={defaultValue}
                as={textField}
                InputProps={{
                    readOnly: readMode,
                  }}
                {...props}
        
            />
        </div>
    )
}
