import React from 'react'
import Uppy from '@uppy/core'
import Tus from '@uppy/tus'
import { DragDrop, DashboardModal, useUppy, Dashboard } from '@uppy/react'
import XHRUpload from '@uppy/xhr-upload'
import ProgressBar from '@uppy/progress-bar'

import { Grid, Box, Button, Card, CardContent } from "@mui/material";
import ButtonAppBar from "../customerRelated/Appbar";
import { Formik, Form } from "formik";
import CustomTextfield from "../formikInputs/CustomTextField";
import CustomSelect from "../formikInputs/CustomSelect";
import { useNavigate } from "react-router";
import { width } from '@mui/system'

import '@uppy/core/dist/style.css'
import '@uppy/drag-drop/dist/style.css'

import '@uppy/core/dist/style.css'
import '@uppy/dashboard/dist/style.css'


// const uppy = new Uppy({
//   meta: { type: 'avatar' },
//   restrictions: { maxNumberOfFiles: 1 },
//   autoProceed: true,
// })

// uppy.use(Tus, { endpoint: '/upload' })

// uppy.on('complete', (result) => {
//   const url = result.successful[0].uploadURL
//   console.log(url);
// })

const Import = () => {

    const initialValues = {};

    const uppy = useUppy(() => {
        return new Uppy({
            id: "Yippee",
            debug: true,
            autoProceed: true,
            restrictions: { maxNumberOfFiles: 1 }
        })
            // .use(ProgressBar, {
            //     target: '.UppyProgressBar',
            //     hideAfterFinish: false
            // })
            // .use(Dashboard, {
            //     id: 'Dashboard',
            //     hideUploadButton: false,
            //     target: '#drag-drop-area', inline: true })
            // .use(XHRUpload, {
            //     endpoint: 'http://localhost:8082/import/file',
            //     method: 'Post',
            //     formData: true,
            //     fieldName: 'file',

            // })
            .on('upload-success', (file, response) => {
                console.log("upload success")
                console.log(file.name)
                console.log(response)

            })
            .on('complete', (result) => {
                console.log("completed");
                const url = result.successful[0].uploadURL
                console.log(url);
                console.log(result);

            })
            .on('error', (error) => {
                console.error(error.stack)
            })
    });

    return (
        <div>
            <ButtonAppBar title="Import management" />
            <Formik
                enableReinitialize={true}
                initialValues={initialValues}
            // validationSchema={formValidation}
            // onSubmit={(e) => handleSubmit(e)}
            >
                <Form>
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
                                <Card elevation={4}>
                                    <CardContent>
                                        <Grid container columnSpacing={1} rowSpacing={2}>
                                            <Grid item xs={6}>
                                                <CustomTextfield
                                                    data={{ name: "userId", label: "Group ID" }}
                                                    type="text"
                                                />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <CustomTextfield
                                                    data={{ name: "userId1", label: "Project" }}
                                                    type="text"
                                                />
                                            </Grid>
                                            <Grid item xs={12} md={12}>
                                                Hello
                                            </Grid>

                                            <Grid item xs={6}>
                                                <Button
                                                    type="submit"
                                                    variant="contained"
                                                    size="large"
                                                    fullWidth
                                                >
                                                    Upload File
                                                </Button>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Button variant="contained" size="large" fullWidth danger>
                                                    Cancel
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>
                </Form>
            </Formik>
            {/* <DragDrop
                width="80%"
                height="20%"
                uppy={uppy}
                locale={{
                    strings: {
                        dropHereOr: 'Drop the file here or %{browse}',
                        browse: 'browse',
                    }
                }}
            /> */}
            <Dashboard
                uppy={uppy}
                // plugins={['Webcam']}
                // {...props}
            />
        </div>
    )

    //   return (
    //     <div>
    //       <img src={currentAvatar} alt="Current Avatar" />
    //       <DragDrop
    //         uppy={uppy}
    //         locale={{
    //           strings: {
    //             // Text to show on the droppable area.
    //             // `%{browse}` is replaced with a link that opens the system file selection dialog.
    //             dropHereOr: 'Drop here or %{browse}',
    //             // Used as the label for the link that opens the system file selection dialog.
    //             browse: 'browse',
    //           },
    //         }}
    //       />
    //     </div>
    //   )
}

export default Import;