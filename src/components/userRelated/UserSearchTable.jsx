import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";




export default function UserSearchTable(props) {
  const navigate=useNavigate();
const cw = 100;
// const tt = new Date().toLocaleString().replace(",", "");
const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'userId', headerName: 'User ID', width: 130 },
    { field: 'lastName', headerName: 'Last name',headerAlign: 'center', width: 130 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'privilege', headerName: 'Role',  width: 130 },
    // {
    //   field: 'fullName',
    //   headerName: 'Full name',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (params) =>
    //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    // },
    {
      field: "edit",
      headerName: "Edit / Details",
      sortable: false,
      renderCell: (params) => {
        const onClick = (e) => {
  
          e.stopPropagation(); // don't select this row after clicking
          console.log(params.row,"ppppp");
          navigate("/userDetail",{state:{userId:params.row.userId}});

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
          console.log(params.row,"ppppp");
        };
        return <Button size="small" variant="contained" color="error" onClick={onClick}>Delete</Button>;
      },
    },
  ];

	const rows = props.rows;
	return (
		<>
			<div style={{ height: 400, width: "100%" }}>
				<DataGrid
					getRowId={(row) => row.id}
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
