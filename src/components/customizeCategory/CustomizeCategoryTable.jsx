import { Box, Button, Card, CardContent, Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { AxiosFetch } from "../AxiosFetch";
import ButtonAppBar from "../customerRelated/Appbar";

export default function CustomizeCategoryTable() {
  const navigate = useNavigate();
  const axiosFetch = AxiosFetch();

  const [rows, setRows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const columns = [
    { field: "categoryId", headerName: "ID", flex:0.5 },
    { field: "categoryName", headerName: "Category Name", flex:1 },
    {
      field: "customerGroup",
      headerName: "Group Name",
    //   headerAlign: "center",
      flex:1,
      renderCell: (params) => {
        return <div>{params.row.customerGroup.groupDisplayName}</div>;
      },
    //   valueFormatter: (params) => params.row,
    },
    { field: "registerUserId", headerName: "Register User ID", flex:1 },
    { field: "visible", headerName: "Visible", flex:0.5 },
    {
      field: "edit",
      headerName: "Edit / Details",
      sortable: false,
      renderCell: (params) => {
        const onClick = (e) => {
          e.stopPropagation(); // don't select this row after clicking
          console.log(params.row, "ppppp");
          navigate("/customizeCategoryDetail",{state:{categoryId:params.row.categoryId}});
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
      const response = await axiosFetch.get(`/category`);
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
      <ButtonAppBar title="Customize Category Table" />
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
                navigate("/newCustomizeCategory");
              }}
            >
              Create New Category
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Card elevation={4}>
              <CardContent>
                <div style={{ height: 700, width: "100%" }}>
                  <DataGrid
                    getRowId={(row) => row.categoryId}
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
