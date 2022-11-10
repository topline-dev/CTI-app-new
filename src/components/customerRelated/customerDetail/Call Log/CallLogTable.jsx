// import { Mic } from '@mui/icons-material';
import MicIcon from '@mui/icons-material/Mic';
import { IconButton, Popover, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React, { useState, useEffect } from 'react'
import { AxiosFetch } from '../../../AxiosFetch';

function CallLogTable() {

  const [rows, setRows] = useState([]);

  const [loading, setLoading] = useState(true);

  const axiosFetch = AxiosFetch();

  //Hover
  const [anchorEl, setAnchorEl] = useState(null);
  const [popOverText, setPopOverText] = useState("");
  const handlePopoverOpen = (event, name) => {
    setPopOverText(name);
    setAnchorEl(event.currentTarget);
  };
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

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
    { field: "id", headerName: "ID", width: 50 },
    { field: "starttime", headerName: "Start date", width: 130 },
    { field: "title", headerName: "Title", width: 130 },
    { field: "phase", headerName: "Phase", width: 130 },
    { field: "caller", headerName: "Caller", width: 130 },
    // { field: "modify", headerName: "", width: 110 },
    // { field: "customerAddress4", headerName: "Last upd.", width: 100 },
    { 
      field: "memo", 
      headerName: "Memo", 
      width: 180,
      renderCell: (params) => {
        return <div
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={(event) => {handlePopoverOpen(event, params.row.memo)}}
        onMouseLeave={handlePopoverClose}
      >
        {params.row.memo}
      </div>
      }
    },
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

  const open = Boolean(anchorEl);

  return (
    <div style={{ height: 500, width: "100%" }}>
				<DataGrid
					// getRowId={(row) => row.customerId}
					rows={rows}
					columns={columns}
					pageSize={20}
					rowsPerPageOptions={[5]}
				/>
        
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1 }}>{popOverText}</Typography>
      </Popover>
			</div>

  )
}

export default CallLogTable