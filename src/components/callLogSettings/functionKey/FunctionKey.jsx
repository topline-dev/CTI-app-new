import { Button, Card, CardContent, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Alert from "../../Alert";
import { AxiosFetch } from "../../AxiosFetch";
import FunctionKeyModal from "./FunctionKeyModal";

export default function FunctionKey() {

    //Alert
    const [alert, setAlert] = useState({ open: false, type: "success", message: "Success" });
    const handleAlert = () => {
        setAlert(!alert);
    }

    async function refreshList() {
        const response = await axiosFetch.get(`/functionKey`);
        if (response.status === 200) {
            setRows(response.data);
            setIsLoading(false);
        }
        else{
            setAlert({ open: true, message: "Something went wrong", type: "error" });
        }
    }

    useEffect(() => {
        async function getData() {
            const response = await axiosFetch.get(`/functionKey`);
            if (response.status === 200) {
                console.log(response.data);
                setRows(response.data);
                setIsLoading(false);
            }
            else{
                setAlert({ open: true, message: "Something went wrong", type: "error" });
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
            headerName: "Function Key",
            flex: 1,
        },
        {
            field: "callLogGroup.name",
            headerName: "Call Group",
            flex: 1,
            valueGetter: (params) => {return params.row.callLogGroup ? params.row.callLogGroup.name : ""}
        },
        {
            field: "callFlag.name",
            headerName: "Call Flag",
            flex: 1,
            valueGetter: (params) => {return params.row.callFlag ? params.row.callFlag.name : ""}
        },
        {
            field: "edit",
            headerName: "Edit / Details",
            sortable: false,
            flex: 1,
            renderCell: (params) => {
                const onClick = (e) => {
                    e.stopPropagation(); // don't select this row after clicking
                    setModalData({ 
                        id: params.row.id, 
                        name: params.row.name, 
                        callLogGroup:{
                            id:params.row.callLogGroup ? params.row.callLogGroup.id : ""
                        },
                        callFlag:{
                            id:params.row.callFlag ? params.row.callFlag.id : ""
                        }
                    });
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
            <FunctionKeyModal openModal={openModal} handleModalChange={handleModalChange} data={modalData} setAlert={setAlert} refreshList={refreshList}/>
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
                                setModalData({ name: "", callLogGroup: {}, callFlag: {} });
                                handleModalChange();
                            }}
                        >
                            Create New Key Configuration
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
