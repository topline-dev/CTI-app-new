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

export default function CategoryItemDetail() {
  //   const formValidation = Yup.object().shape({
  //     id: Yup.string()
  //       .required("Required!")
  //       .min(2, "Too Short!")
  //       .max(10, "Too Long!"),
  //     password: Yup.string().required("Required!"),
  //   });

  const navigate = useNavigate();
  const axiosFetch = AxiosFetch();
  const location = useLocation();
  //    console.log(location, "location item page");
  const itemId = location.state.itemId;
  const categoryId = location.state.categoryId;
  const categoryName = location.state.categoryName;
  const [flag, setFlag] = useState(false);

  const [isLoading, setIsLoading] = useState(true);
  const [initialValues, setInitialValues] = useState();
  const [itemOptionId, setItemOptionId] = useState([]);
 

  // {itemOptionId: 23, itemOptionValue: 'qqq'}
  // 1
  // : 
  // {itemOptionId: 24, itemOptionValue: 'www'}
  // 2
  // : 
  // {itemOptionId: 25, itemOptionValue: 'ee'}
  // 3
  // : 
  // {itemOptionId: 26, itemOptionValue: 'rrr'}
  // 4
  // : 
  // {itemOptionId: 27, itemOptionValue: 'aaa'}

  useEffect(() => {
    async function getData() {
      const response = await axiosFetch.get(`/categoryItemById/${itemId}`);
      console.log(response,"rrrr");
      if (response.status === 200) {
        var temp = {...response.data};
        temp.category = { categoryId: categoryId };
        temp.chips=[];
       response.data.itemOptions.map((data,index)=>{
          temp.chips[index]=data.itemOptionValue;
        });
        console.log(temp,"ttttt");
        setInitialValues(temp);
        setIsLoading(false);
      }
    }
    getData();
  }, []);

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
    // alert(JSON.stringify(values, null, 2));
    var APIvalues={...values};
    delete APIvalues.chips;
    delete APIvalues.itemId;
    delete APIvalues.itemOptions;
      const Response = await axiosFetch.put(`/categoryItems/${itemId}`, JSON.stringify(APIvalues));
      console.log(Response,"rrrr");
    // navigate(-1);
  };

  return isLoading ? (
    <div>Loading</div>
  ) : (
    
    <div>
      {/* {console.log(initialValues,"inin")} */}
      <ButtonAppBar title="Category Item Edit/Detail" />
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        // validationSchema={formValidation}
        onSubmit={(e) => handleSubmit(e)}
      >
        <Form>
       
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
                      {categoryName}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h3" gutterBottom align="center">
                      {initialValues.categoryName}
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
                        ],
                      }}
                      mode="read"
                    />
                    <br />
                    <div hidden={!flag}>
                      <Field
                        name="chips"
                        component={customChip}
                        label="Enter List Here (Read only)"
                        disabled
                      />
                      {/* <ChipInput fullWidth variant="outlined" /> */}
                    </div>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                    >
                      Save
                    </Button>
                  </Grid>

                  <Grid item xs={12} md={6}>
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
          <FormObserver />    
        </Form>
      </Formik>
    </div>
  );
}
