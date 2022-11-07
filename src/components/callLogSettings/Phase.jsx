import { Button, Card, CardContent, Grid, MenuItem, Select, TextField, InputLabel } from "@mui/material";
import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { AxiosFetch } from "../AxiosFetch";
// import EditCallFlagModal from "./EditCallFlagModal";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

export default function Phase() {

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
      headerName: "Phase",
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
          console.log(params.row, "ppppp");
          setModalData({ id: params.row.id, name: params.row.name });
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
        { id: 1, name: "Phase 1" },
        { id: 2, name: "Phase 2"},
        { id: 3, name: "Phase 3"},
        { id: 4, name: "Phase 4"}
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
              Create New Phase
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

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

function EditCallFlagModal({ openModal, handleModalChange, data }) {

    const axiosFetch = AxiosFetch();

    // const HandleCreateTicket1 = () => {
    //     const { values } = useFormikContext();
    //     useEffect(() => {
    //         const submitTicketAPI = async (CallLog) => {
    //             CallLog.user = {userId:"admin"}
    //             CallLog.customer = {customerId:1}
    //             const response = await axiosFetch.post(`/ticket`, CallLog)
    //         }
    //         if(values.CallLog){
    //             submitTicketAPI(values.CallLog)
    //         }

    //     }, [values.submitTicket])

    //     return null;

    // }

    const handleCreateTicket = () => {
        window.alert("Request completed");
        handleModalChange();
    }
    return (
        <div>
            {/* <HandleCreateTicket1/> */}
            <Modal
                open={openModal}
                onClose={handleModalChange}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Call Log Phase
                    </Typography>
                    <Grid container spacing={1} justifyContent={"center"} id="modal=modal-description">
                        <Grid item xs={4}>
                            <TextField id="id" label="Id" variant="outlined" value={data ? data.id : ""} disabled />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField id="name" label="Phase" variant="outlined" value={data ? data.name : ""} />
                        </Grid>
                        <Grid item xs={4}>
                            <Button id="submitTicket" name="submitTicket" size="large" variant="contained" fullWidth onClick={handleCreateTicket}>Save</Button>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </div>
    );
}
