import React, { useState } from 'react';
import axios from 'axios';
import Papa from "papaparse";
import Display from './Display';
import ButtonAppBar from '../customerRelated/Appbar';
import { Box, Button, Card, CardContent, Grid } from '@mui/material';
import { CheckBox, Kayaking } from '@mui/icons-material';
import Options from './Options';
import { Formik, Form } from "formik";



const Import = () => {

    const initialValues = {};

    const allowedExtensions = ["csv"];

    const [fileData, setFileData] = useState(false);

    const [error, setError] = useState("");

    const [file, setFile] = useState("");

    const handleFileChange = (e) => {
        setError("");

        if (e.target.files.length) {
            const inputFile = e.target.files[0];

            const fileExtension = inputFile.type.split("/")[1];
            if (!allowedExtensions.includes(fileExtension)) {
                setError("Please input a csv file");
                return;
            }
            setFile(inputFile);
        }
    };
    const handleParse = () => {
        if (!file) return setError("Enter a valid file");

        const reader = new FileReader();
        reader.onload = async ({ target }) => {
            const csv = Papa.parse(target.result, { header: false });
            // const columns = Object.keys(parsedData[0]);
            setFileData(csv.data);
            console.log(csv.data);
        };
        reader.readAsText(file);
    };

    const handleSubmit = async (values) => {
        console.log(values);
        const mappedValues = values.Column;
        var finalList = [];
        fileData.map((fileData1, index) => {
            var Customer = { categoryData: [] };
            fileData1.map((val, i) => {
                if (mappedValues[i] && mappedValues[i].charAt(0) == 'c') {
                    Customer[mappedValues[i]] = val;
                }
                else {
                    if (mappedValues[i]) {
                        var it = mappedValues[i].split('_')[1];
                        Customer.categoryData.push({ itemId: it, value: val })
                    }
                }
            })
            Customer.customerGroup = { groupId: values.groupId };
            finalList.push(Customer);
        })
        console.log(finalList);

    }

    return (
        <div>
            <ButtonAppBar title="Import" />
            <Formik
                enableReinitialize={true}
                initialValues={initialValues}
                // validationSchema={formValidation}
                onSubmit={(e) => handleSubmit(e)}
            >
                <Form>
                    <Box
                        sx={{
                            width: "100%",
                            alignItems: "center",
                            px: "5%",
                            py: "2%",
                            // background: "red",
                        }}
                    >
                        <Grid container columnSpacing={2} rowSpacing={4}>
                            <Grid item xs={12} md={12}>
                                <Card elevation={4}>
                                    <CardContent>
                                        <input
                                            onChange={handleFileChange}
                                            id="csvInput"
                                            name="file"
                                            type="File"
                                        />
                                        <Button onClick={handleParse} variant="contained">Load</Button>
                                        <div><input type="checkbox" name="skipLine"></input>Skip the first line
                                        </div><br />
                                        {fileData ? <div><hr /><br /><Options /></div> : ""}
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box
                        sx={{
                            width: "100%",
                            alignItems: "center",
                            px: "5%",
                            py: "2%",
                            // background: "red",
                        }}
                    >
                        <div>
                            {fileData ? <Display data={fileData} /> : "Load a file to see content"}
                        </div>
                    </Box>
                </Form>
            </Formik>
        </div>
    )
}

export default Import;
