import {
  Button,
  Grid,
  Typography,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { AxiosFetch } from "../../AxiosFetch";


export default function CategoryItemTable(props) {
  const navigate = useNavigate();
  const axiosFetch = AxiosFetch();
  // const location = useLocation();
  // const data = location.state.data;
  //   console.log(location,"lllll");

  const [rows, setRows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const data=props.data;
  const categoryId = data.categoryId;
  const categoryName = data.categoryName;

  // const categoryName = location.state.data.categoryName;

  const columns = [
    { field: "itemId", headerName: "Item ID", flex: 1 },
    { field: "itemName", headerName: "Item Name", flex: 1 },
    // {
    //   field: "customerGroup",
    //   headerName: "Group Name",
    // //   headerAlign: "center",
    //   flex:1,
    //   renderCell: (params) => {
    //     return <div>{params.row.customerGroup.groupDisplayName}</div>;
    //   },
    // //   valueFormatter: (params) => params.row,
    // },
    { field: "itemType", headerName: "Item Type", flex: 1 },
    { field: "mandatory", headerName: "Mandatory", flex: 1 },
    { field: "visible", headerName: "Visible", flex: 1 },
    { field: "registerUserId", headerName: "Register User ID", flex: 1 },
    {
      field: "edit",
      headerName: "Edit / Details",
      sortable: false,
      renderCell: (params) => {
        const onClick = (e) => {
          e.stopPropagation(); // don't select this row after clicking
          //   console.log(params.row, "ppppp");
          navigate("/categoryItemDetail", {
            state: {
              itemId: params.row.itemId,
              categoryId: categoryId,
              categoryName: categoryName,
            },
          });
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
      const response = await axiosFetch.get(`/categoryItems/${categoryId}`);
      if (response.status === 200) {
        console.log(response.data, "ccc");
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
      {/* {console.log(rows,"rrrr")} */}
      {/* <ButtonAppBar title="Category Item Table" /> */}
      {/* <Box
        sx={{
          alignItems: "center",
          px: "5%",
          py: "2%",
          // background: "red",
        }}
      > */}
      <Grid container columnSpacing={2} rowSpacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom align="center">
            {rows[0].category.categoryName} Item List
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            size="large"
            fullWidth
            onClick={() => {
              navigate("/newCategoryItem", { state: { data: data } });
            }}
          >
            Create New Category Item
          </Button>
        </Grid>

        <Grid item xs={12}>
          <div style={{ height: 500, width: "100%" }}>
            <DataGrid
              getRowId={(row) => row.itemId}
              rows={rows}
              columns={columns}
              pageSize={20}
              rowsPerPageOptions={[10]}
              checkboxSelection
            />
          </div>
        </Grid>
      </Grid>
      {/* </Box> */}
    </>
  );
}
