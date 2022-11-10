import { Button, Card, CardContent, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { AxiosFetch } from "../../AxiosFetch";
import EditCallFlagModal from "./EditCallFlagModal";
import Alert from "../../Alert";


export default function CallFlag() {

  //Alert
  const [alert, setAlert] = useState({open:false, type:"success", message:"Success"});
  const handleAlert = () => {
    setAlert(!alert);
  }

  async function refreshList() {
    const response = await axiosFetch.get(`/callLogGroup`);
    var data1=[];
    if (response.status === 200) {
      response.data.map((element) => {
        if(element.callFlag){
          element.callFlag.map((element1)=>{
            data1.push({
              id:element1.id,
              name:element1.name,
              groupName:element.name,
            })
          })
        }
      })
      setRows(data1);
      setIsLoading(false);
    }
  }
  useEffect(() => {
    async function getData() {
      const response = await axiosFetch.get(`/callLogGroup`);
      var data1=[];
      if (response.status === 200) {
        response.data.map((element) => {
          if(element.callFlag){
            element.callFlag.map((element1)=>{
              data1.push({
                id:element1.id,
                name:element1.name,
                groupName:element.name,
              })
            })
          }
        })
        setRows(data1);
        setIsLoading(false);
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
      headerName: "Call Flag Name",
      flex: 1,
    },
    {
      field: "groupName",
      headerName: "Call Group Name",
      flex: 1,
      // valueGetter: (params) => {return params.row.callLogGroup ? params.row.callLogGroup.name : ""}
    },
    {
      field: "edit",
      headerName: "Edit / Details",
      sortable: false,
      flex: 1,
      renderCell: (params) => {
        const onClick = (e) => {
          e.stopPropagation(); // don't select this row after clicking
          console.log(params.row, "ppppp");
          setModalData({ id: params.row.id, name: params.row.name, groupname:params.row.groupname });
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
      <EditCallFlagModal openModal={openModal} handleModalChange={handleModalChange} data={modalData} setAlert={setAlert} refreshList={refreshList} />
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
              Create New Call Flag
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
                    // checkboxSelection
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
