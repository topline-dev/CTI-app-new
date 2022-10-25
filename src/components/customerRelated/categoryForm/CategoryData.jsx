import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import axiosClient from "../axios";
import CustomTextField from "../../formikInputs/CustomTextField";
import { AxiosFetch } from "../../AxiosFetch";
import CustomSelect from "../../formikInputs/CustomSelect";
import CustomCheckbox from "../../formikInputs/CustomCheckbox";
import { Form, Formik } from "formik";
import CustomMultiSelectCheck from "../../formikInputs/CustomMultiSelectCheck";

function CategoryData(props) {
  const axiosFetch = AxiosFetch();
  const mode = props.mode;
  // const customerId = props.customerId;

  const [categoryItems, setCategoryItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //console.log(categoryItems);
  useEffect(() => {
    async function getData() {
      const response = await axiosFetch.get(
        `/categoryItems/${props.categoryId}`
      );
      if (response.status === 200) {
        setCategoryItems(response.data);
        setIsLoading(false);
      }
    }
    getData();
  }, []);

  function renderItem(item) {
    switch (item.itemType) {
      case "text": {
        return (
          <CustomTextField
            mode={mode}
            data={{ name: `categoryData.${item.itemId}`, label: item.itemName }}
          />
        );
      }

      case "date": {

        return (
          <CustomTextField
            mode={mode}
            data={{ name: `categoryData.${item.itemId}`, label: item.itemName }}
            type="date"
            InputLabelProps={{ shrink: true }}
          />
        );
      }
      case "datetime": {
        return (
          <CustomTextField
            mode={mode}
            data={{ name: `categoryData.${item.itemId}`, label: item.itemName }}
            type="datetime-local"
            InputLabelProps={{ shrink: true }}
          />
        );
      }
      case "select": {
        var list = [];
		// console.log(item,"iii");
        item.itemOptions.map((data, index) => {
          list[index] = {
            value: data.itemOptionValue,
            name: data.itemOptionValue,
          };
        });
        // console.log(list, "lll");
        return  (
          <CustomSelect
            data={{
              name: `categoryData.${item.itemId}`,
              label: item.itemName,
              list: list,
            }}
            mode={mode}
          />
        ) 
      }
      case "multipleselect": {
        var list = [];
        item.itemOptions.map((data, index) => {
          list[index] = {
            value: data.itemOptionValue,
            name: data.itemOptionValue,
          };
        });
        // console.log(list, "lll");
        return (
          <CustomMultiSelectCheck
            data={{
              name: `categoryData.${item.itemId}`,
              label: item.itemName,
              list: list,
            }}
            mode={mode}
          />
        );
      }
      case "checkbox": {
        return (
          <CustomCheckbox
            data={{ name: `categoryData.${item.itemId}`, label: item.itemName }}
            mode={mode}
          />
          
        );
      }
      // Add all cases here for the category options.
      default:
        return <div></div>;
        break;
    }
  }

  const items = categoryItems.map((item, index) => {
	// console.log(item,"nnnn");
	return item.visible ? (
    <Grid item xs={6} key={index}>
      {renderItem(item)}
    </Grid>
  ) : <div key={index}></div>

});

  return isLoading ? (
    <div>Loading</div>
  ) : (
    <Grid container columnSpacing={2} rowSpacing={2}>
      {items}
    </Grid>
  );
}

export default CategoryData;
