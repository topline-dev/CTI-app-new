import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosClient from "../axios";



async function handleDelete(customerId){
	const response = await axiosClient.delete(`/customers/${customerId}`);
	if(response.status === 200){
		alert("Customer Deleted");
	}
}

export default function CustomerSearchTable(props) {
	const navigate=useNavigate();
	const cw = 100;
// const tt = new Date().toLocaleString().replace(",", "");
const columns = [
	{ field: "customerId", headerName: "ID", width: 40 },
	{ field: "customerLastName", headerName: "Last name", width: 90 },
	{ field: "customerFirstName", headerName: "First name", width: 90 },
	{
		field: "phone",
		headerName: "Phone Number",
		// type: 'number',
		width: 120,
	},
	{
		field: "customerNextCallDateTime",
		headerName: "Next Call Date",
		type: "date",
		width: 110,
	},
	{
		field: "customerModifyDateTime",
		headerName: "last updated",
		type: "datetime",
		width: cw,
	},
	{ field: "customerAddress1", headerName: "Address 1", width: 120 },
	{ field: "customerAddress2", headerName: "Address 2", width: cw },
	{ field: "customerGroupId", headerName: "Customer group", width: 120 },
	{ field: "prjgrp", headerName: "project group", width: cw },
	{
		field: "edit",
		headerName: "Edit / Details",
		sortable: false,
		renderCell: (params) => {
			const onClick = (e) => {

				e.stopPropagation(); // don't select this row after clicking
				console.log(params.row,"ppppp");
          navigate("/customerDetail",{state:{customerId:params.row.customerId}});
			};
			return <Button size="small" variant="contained" color="primary" onClick={onClick}>Edit</Button>;
		},
	},
	{
		field: "delete",
		headerName: "Delete",
		sortable: false,
		renderCell: (params) => {
			const onClick = (e) => {
				e.stopPropagation(); // don't select this row after clicking
				handleDelete(params.row.customerId);
			};
			return <Button variant="text" color="error" onClick={onClick}>Delete</Button>;
		},
		width: 90,
	},
];
	const rows = props.rows;
	// const rows = props.rows;



	return (
		<>
			<div style={{ height: 500, width: "100%" }}>
				<DataGrid
					getRowId={(row) => row.customerId}
					rows={rows}
					columns={columns}
					pageSize={20}
					rowsPerPageOptions={[5]}
					checkboxSelection
				/>
			</div>
		</>
	);
}
