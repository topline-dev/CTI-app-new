import { Button, Card, CardContent, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { AxiosFetch } from "../../AxiosFetch";
import EditCallFlagModal from "./EditCallFlagModal";

export default function CallFlag() {


  useEffect(() => {
    async function getData() {
      const response = await axiosFetch.get(`/callFlag`);
      if (response.status === 200) {
        setRows(response.data);
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
      field: "callLogGroup.name",
      headerName: "Call Group Name",
      flex: 1,
      valueGetter: (params) => {return params.row.callLogGroup ? params.row.callLogGroup.name : ""}
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
          // navigate("/customerGroupDetail", { state: { data: params.row } });
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
  useEffect(() => {
    async function getData() {
      // const response = await axiosFetch.get(`/group`);
      // if (response.status === 200) {
      //   console.log(response.data);
      //   setRows(response.data);
      //   setIsLoading(false);
      // }

      setRows([
        { id: 1, name: "Flag 1", groupname: "Group 1" },
        { id: 2, name: "Flag 2", groupname: "Group 2" },
        { id: 3, name: "Flag 3", groupname: "Group 2" },
        { id: 4, name: "Flag 4", groupname: "Group 3"}
      ])
      setIsLoading(false);

    }
    getData();
  }, []);

  return isLoading ? (
    <div>Loading</div>
  ) : (
    <>
      <EditCallFlagModal openModal={openModal} handleModalChange={handleModalChange} data={modalData} />
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