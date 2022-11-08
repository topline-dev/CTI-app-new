// import { Mic } from '@mui/icons-material';
import MicIcon from '@mui/icons-material/Mic';
import { IconButton } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { AxiosFetch } from '../../../AxiosFetch';

function CallLogTable() {

  const [rows, setRows] = useState([]);

  const [loading, setLoading] = useState(true);

  const axiosFetch = AxiosFetch();

  useEffect(() => {
    async function getData() {
      const response = await axiosFetch.get(`/ticket`);
      if (response.status === 200) {
        // console.log(response,"cust detail response");
        setRows(response.data);
        setLoading(false);
      }
      else {
        window.alert("Error! Bad request");
      }
    }
    getData();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 30 },
    { field: "starttime", headerName: "Start date", width: 90 },
    { field: "title", headerName: "Title", width: 90 },
    { field: "phase", headerName: "Phase", width: 90 },
    { field: "caller", headerName: "Caller", width: 90 },
    // { field: "customerAddress3", headerName: "Last Upd. by", width: 110 },
    // { field: "customerAddress4", headerName: "Last upd.", width: 100 },
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