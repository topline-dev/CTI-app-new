import { Button, Card, CardContent, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { AxiosFetch } from "../../AxiosFetch";
import Alert from "../../Alert";
import EditCallGroupModal from "./EditCallGroupModal";

export default function CallGroup() {

  //Alert
  const [alert, setAlert] = useState({open:false, type:"success", message:"Success"});
  const handleAlert = () => {
    setAlert(!alert);
  }

  async function refreshList() {
    const response = await axiosFetch.get(`/callLogGroup`);
    if (response.status === 200) {
      // console.log(response,"cust detail response");
      setRows(response.data);
      setIsLoading(false);
    }
    else{
      console.log("Hello");
    }
  }

  useEffect(() => {
    async function getData() {
      const response = await axiosFetch.get(`/callLogGroup`);
      if (response.status === 200) {
        // console.log(response,"cust detail response");
        setRows(response.data);
        setIsLoading(false);
      }
      else{
        console.log("Hello");
      }
    }
    getData();
  }, []);

  const [openModal, setOpenModal] = useState(false);

  const [modalData, setModalData] = useState();

  const handleModalChange = () => {
    console.log(openModal);
    setOpenModal(!openModal);
  }

  const axiosFetch = AxiosFetch();
  const [rows, setRows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const columns = [
    { field: "id", headerName: "ID", flex: 1 },
    {
      field: "name",
      headerName: "Call Group Name",
      flex: 1,
    },
    {
      field: "edit",
      headerName: "Edit / Details",
      sortable: false,
      flex: 1,
      renderCell: (params) => {
        const onClick = (e) => {
          e.stopPropagation(); // don't select this row after clicking
          setModalData({ id: params.row.id, name: params.row.name });
          handleModalChange();
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
      flex: 1,
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
            disabled
          >
            Delete
          </Button>
        );
      },
    },
  ];

  return isLoading ? (
    <div>Loading</div>
  ) : (
    <>
    <Alert data={alert} handleAlert={handleAlert}/>
      <EditCallGroupModal openModal={openModal} handleModalChange={handleModalChange} data={modalData} setAlert={setAlert} refreshList={refreshList}/>
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
                setModalData({});
                handleModalChange();
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
                    // getRowId={(row) => row.CallGroup}
                    rows={rows}
                    columns={columns}
                    pageSize={20}
                    rowsPerPageOptions={[5]}
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
