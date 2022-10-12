import { Button, Card, CardContent, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { AxiosFetch } from "../AxiosFetch";
import ButtonAppBar from "../customerRelated/Appbar";

export default function CustomerGroupTable() {
  const navigate = useNavigate();
  const cw = 200;
  const axiosFetch = AxiosFetch();
  const [rows, setRows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const columns = [
    // { field: 'id', headerName: 'ID', width: 70 },
    { field: "groupId", headerName: "Group ID", flex:1 },
    {
      field: "groupDisplayName",
      headerName: "Group Display Name",
      flex:1,
    },
    { field: "parentGroup", headerName: "Parent Group", flex:1},
    {
      field: "edit",
      headerName: "Edit / Details",
      sortable: false,
      flex:1,
      renderCell: (params) => {
        const onClick = (e) => {
          e.stopPropagation(); // don't select this row after clicking
          console.log(params.row, "ppppp");
          navigate("/customerGroupDetail", { state: { data: params.row } });
        };
        return (
          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={onClick}
          >
            Edit
          </Button>
        );
      },
    },
    {
      field: "delete",
      headerName: "Delete",
      sortable: false,
      flex:1,
      renderCell: (params) => {
        const onClick = (e) => {
          e.stopPropagation(); // don't select this row after clicking
          console.log(params.row, "ppppp");
        };
        return (
          <Button
            size="small"
            variant="contained"
            color="error"
            onClick={onClick}
          >
            Delete
          </Button>
        );
      },
    },
  ];
  useEffect(() => {
    async function getData() {
      const response = await axiosFetch.get(`/group`);
      if (response.status === 200) {
        console.log(response.data);
        setRows(response.data);
        setIsLoading(false);
      }
    }
    getData();
  }, []);

  return isLoading ? (
    <div>Loading</div>
  ) : (
    <>
      <ButtonAppBar title="Group Table" />
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
            <Button
              variant="contained"
              size="large"
              fullWidth
              onClick={() => {
                navigate("/newCustomerGroup");
              }}
            >
              Create New Group
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Card elevation={4}>
              <CardContent>
                <div style={{ height: 600, width: "100%" }}>
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
