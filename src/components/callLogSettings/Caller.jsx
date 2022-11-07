import { Button, Card, CardContent, Grid, MenuItem, Select, TextField, InputLabel } from "@mui/material";
import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { AxiosFetch } from "../AxiosFetch";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Form, Formik } from "formik";
import CustomTextField from '../formikInputs/CustomTextField'

export default function Caller() {

  useEffect(() => {
    async function getData() {
      const response = await axiosFetch.get(`/caller`);
      if (response.status === 200) {
        // console.log(response,"cust detail response");
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
      headerName: "Caller",
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

  return isLoading ? (
    <div>Waiting For Backend API to be created</div>
  ) : (
    <>
      <EditModal openModal={openModal} handleModalChange={handleModalChange} data={modalData} />
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
              Create New Caller
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

function EditModal({ openModal, handleModalChange, data }) {

  const initialValues = data;

  const axiosFetch = AxiosFetch();


  const handleSubmit = async (values) => {
    if (values && !values.id) {
      const response = await axiosFetch.post('/callLogGroup', { name: values.name, registerUserId: "3603" });
      if (response.status === 200) {
        window.alert("Saved Successfully");
      }
      else {
        window.alert("Error encountered");
      }
    }
    else {
      const response = await axiosFetch.put(`/callLogGroup/${values.id}`, { name: values.name, modifyUserId: "3703" });
      if (response.status === 200) {
        window.alert("Group updated Successfully");
      }
      else {
        window.alert("Error encountered");
      }
    }
    handleModalChange();
  }

  return (
      <Modal
      open={openModal}
      onClose={handleModalChange}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
  >
      <Formik
          enableReinitialize={true}
          initialValues={initialValues}
          // validationSchema={formValidation}
          onSubmit={(values) => {
              handleSubmit(values)
          }}
      >
          <Form>

              <Box sx={style}>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                      Call Log Caller
                  </Typography>
                  <Grid container spacing={1} justifyContent={"center"} id="modal=modal-description">
                      <Grid item xs={4}>
                          <CustomTextField mode="read" data={{ name: "id", label: "Caller" }} disabled/>
                      </Grid>
                      <Grid item xs={4}>
                          <CustomTextField data={{ name: "name", label: "Caller" }} />
                      </Grid>
                      <Grid item xs={4}>
                      <Button type="submit" size="large" variant="contained" fullWidth>Save</Button>
                      </Grid>
                  </Grid>
              </Box>
          </Form>
      </Formik>
  </Modal>

  );
}
