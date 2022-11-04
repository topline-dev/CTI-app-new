import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { Field, Form, Formik, useFormikContext } from "formik";
import ChipInput from "material-ui-chip-input";
import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { AxiosFetch } from "../../AxiosFetch";
import ButtonAppBar from "../../customerRelated/Appbar";
import CustomSelect from "../../formikInputs/CustomSelect";
import CustomTextField from "../../formikInputs/CustomTextField";



export default function CreateNewItem() {
  //   const formValidation = Yup.object().shape({
  //     id: Yup.string()
  //       .required("Required!")
  //       .min(2, "Too Short!")
  //       .max(10, "Too Long!"),
  //     password: Yup.string().required("Required!"),
  //   });

  let navigate = useNavigate();
  const axiosFetch = AxiosFetch();
  const location = useLocation();
  const data=location.state.data;
    // console.log(location, "location item page");
  const [flag, setFlag] = useState(true);

  const initialValues = {
    itemName: "",
    visible: "",
    category: {
      categoryId: data.categoryId,
    },
    itemType: "",
    registerUserId: 3603,
    mandatory: "",
    chips: [],
  };

  const FormObserver = () => {
    const { values } = useFormikContext();
    useEffect(() => {
      // console.log(values);
      if (
        values.itemType === "select" ||
        values.itemType === "multipleselect"
      ) {
        setFlag(true);
      } else {
        setFlag(false);
      }
    }, [values.itemType]);
    return null;
  };

  const customChip = ({ children, form, field, ...props }) => {
    const { name, value } = field;
    const { setFieldValue } = form;

    const handleAddChip = (props) => {
      setFieldValue(name, [...value, props]);
    };
    const handleDeleteChip = (props, index) => {
      setFieldValue(name, [
        ...value.slice(0, index),
        ...value.slice(index + 1),
      ]);
    };

    return (
      <>
        <ChipInput
          fullWidth
          variant="outlined"
          label={props.label}
          name={props.name}
          value={value}
          onAdd={(chip) => handleAddChip(chip)}
          onDelete={(chip, index) => handleDeleteChip(chip, index)}
          {...props}
        />
      </>
    );
  };

  const handleSubmit = async (values) => {
    // console.log(values);
    // alert(JSON.stringify(values, null, 2));
    var chips=[...values.chips];
    var APIvalues={...values};
    APIvalues.itemOptions=[];
    delete APIvalues.chips;
    chips.map((data,index)=>{
      APIvalues.itemOptions[index]={'itemOptionValue':data}
    })
    console.log(APIvalues,"aaaa");
      const Response = await axiosFetch.post('/categoryItem', JSON.stringify(APIvalues));
      console.log(Response);
    //navigate("/home");
  };

  

  return (
    <div>
      <ButtonAppBar title="New Category Item" />
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        // validationSchema={formValidation}
        onSubmit={(e) => handleSubmit(e)}
      >
        <Form>
          <FormObserver />
          <Box
            sx={{
              alignItems: "center",
              px: "20%",
              py: "5%",
              // background: "red",
            }}
          >
            <Card elevation={4}>
              <CardContent>
                <Grid container columnSpacing={1} rowSpacing={4}>
                  <Grid item xs={12}>
                    <Typography variant="h3" gutterBottom align="center">
                     {data.categoryName}
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <CustomTextField
                      data={{ name: "itemName", label: "Item Name" }}
                    />
                  </Grid>

                  <Grid item xs={4}>
                    <CustomSelect
                      data={{
                        name: "visible",
                        label: "Visibility",
                        list: [
                          { name: "visible", value: true },
                          { name: "hidden", value: false },
                        ],
                      }}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <CustomSelect
                      data={{
                        name: "mandatory",
                        label: "Mandatory",
                        list: [
                          { name: "yes", value: true },
                          { name: "no", value: false },
                        ],
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <CustomSelect
                      data={{
                        name: "itemType",
                        label: "Item Type",
                        list: [
                          { name: "text", value: "text" },
                          { name: "select", value: "select" },
                          {
                            name: "multipleselect",
                            value: "multipleselect",
                          },
                          { name: "date", value: "date" },
                          { name: "datetime", value: "datetime" },
                          { name: "checkbox", value: "checkbox" },
                        ],
                      }}
                    />
                    <br />
                    <div hidden={!flag}>
                      <Field
                        name="chips"
                        component={customChip}
                        label="Enter List Here"
                        
                      />
                      {/* <ChipInput fullWidth variant="outlined" /> */}
                    </div>
                  </Grid>
                  <Grid item xs={4}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                    >
                      Save
                    </Button>
                  </Grid>
                  <Grid item xs={4}>
                    <Button variant="contained" size="large" fullWidth>
                      Save and New
                    </Button>
                  </Grid>

                  <Grid item xs={4}>
                    <Button
                      variant="contained"
                      sx={{ backgroundColor: "error.light" }}
                      color="error"
                      size="large"
                      onClick={() => {
                        navigate(-1);
                      }}
                      fullWidth
                    >
                      Cancel
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Box>
        </Form>
      </Formik>
    </div>
  );
}
