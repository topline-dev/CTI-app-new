import { Button, Card, CardContent, Grid } from '@mui/material';
import { Box } from '@mui/system';
import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { AxiosFetch } from '../AxiosFetch';

export default function CustomerGroupTable() {
    const navigate=useNavigate();
    const cw = 100;
    const axiosFetch=AxiosFetch();
    const [rows, setRows]=useState([]);
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'groupId', headerName: 'Group ID', width: 130 },
        { field: 'groupDisplayName', headerName: 'Group Display Name',headerAlign: 'center', width: 130 },
        { field: 'parentGroup', headerName: 'Parent Group', width: 130 },
        { field: 'privilege', headerName: 'Role',  width: 130 },
        
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
      useEffect(() => {
        async function getData() {
          const response = await axiosFetch.get(`/group`);
          if (response.status === 200) {
             console.log(response.data);
            setRows(response.data);
            };
          }
        getData();
      }, []);
    
        return (
            <>
            <Box
            sx={{
              alignItems: "center",
              px: "5%",
              py: "2%",
              // background: "red",
            }}
          >
            <Grid container columnSpacing={2} rowSpacing={4}>
              <Grid item xs={12}>
                <Card elevation={4}>
                  <CardContent>
                  <div style={{ height: 400, width: "100%" }}>
                  <DataGrid
                        getRowId={(row) => row.groupId}
                        rows={rows}
                        columns={columns}
                        pageSize={20}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                    />
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
            </>
        );
}
