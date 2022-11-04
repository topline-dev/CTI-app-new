// import { Mic } from '@mui/icons-material';
import MicIcon from '@mui/icons-material/Mic';
import { IconButton } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React from 'react'

function CallLogTable() {

  const columns = [
    { field: "customerId", headerName: "ID", width: 30 },
    { field: "customerLastName", headerName: "Start date", width: 90 },
    { field: "customerFirstName", headerName: "Title", width: 90 },
    { field: "customerAddress1", headerName: "Phase", width: 90 },
    { field: "customerAddress2", headerName: "Status", width: 90 },
    { field: "customerAddress3", headerName: "Last Upd. by", width: 110 },
    { field: "customerAddress4", headerName: "Last upd.", width: 100 },
    { field: "customerAddress5", headerName: "Memo", width: 160 },
    {
      field: "recording",
      headerName: <IconButton aria-label="mic"><MicIcon/></IconButton>,
      sortable: false,
      renderCell: (params) => {
        const onClick = (e) => {
          e.stopPropagation(); // don't select this row after clicking
          // handleDelete(params.row.customerId);
        };
        return <IconButton aria-label="mic" onClick={onClick}><MicIcon/></IconButton>;
      },
      width: 47,
    },
  ];

  const rows = [
    
  ];
  return (
    <div style={{ height: 500, width: "100%" }}>
				<DataGrid
					getRowId={(row) => row.customerId}
					rows={rows}
					columns={columns}
					pageSize={20}
					rowsPerPageOptions={[5]}
					// checkboxSelection
				/>
			</div>

  )
}

export default CallLogTable