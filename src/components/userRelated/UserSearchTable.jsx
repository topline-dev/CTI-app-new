import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";



const cw = 100;
// const tt = new Date().toLocaleString().replace(",", "");
const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];

export default function UserSearchTable(props) {
	const rows = props.rows;
	return (
		<>
			<div style={{ height: 400, width: "100%" }}>
				<DataGrid
					// getRowId={(row) => row.id}
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
