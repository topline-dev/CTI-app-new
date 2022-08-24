import { set } from "date-fns/esm";
import React from "react";
import { useEffect, useMemo, useState } from "react";
import CustomTextfield from "../formikInputs/CustomTextField";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import CustomSelect from "../formikInputs/CustomSelect";
import { Button } from "@mui/material";
import CustomMultiSelect from "../formikInputs/CustomMultiSelect";
import CustomMultiSelectCheck from "../formikInputs/CustomMultiSelctCheck";

export default function Test2() {
  let pp;

  const [test, setTest] = useState();
  const formValidation = Yup.object().shape({
    name11: Yup.string()
      .min(2, "Too Short!")
      .max(15, "Too Long!")
      .required("Required!"),
  });
  const list = [
    { value: 10, name: "ten" },
    { value: 20, name: "twenty" },
  ];
  const list2 = [
    { value: 100, name: "Oliver Hansen" },
    { value: 101, name: "Van Henry" },
    { value: 102, name: "April Tucker" },
    { value: 103, name: "Ralph Hubbard" },
    { value: 104, name: "Omar Alexander" },
    { value: 105, name: "Carlos Abbott" },
    { value: 106, name: "Miriam Wagner" },
    { value: 107, name: "Virginia Andrews" },
    { value: 108, name: "Bradley Wilkerson" },
    { value: 109, name: "Kelly Snyder" },
  ];
  return (
    <Formik
      enableReinitialize={true}
      initialValues={{ name11: "lllll" }}
      validationSchema={formValidation}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        console.log(values);
        //handleSubmit(values);
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
        <div>
          <br />
          <br />
          <br />
          <CustomTextfield data={{ name: "name11", label: "textfield" }} />
          <br />
          <br />
          <br />
          <CustomSelect
            data={{ name: "namess", label: "select", list: list }}
            mode="readd"
            defaultValue={[20]}
          />
          <br />
          <br />
          <br />
          <CustomMultiSelect
            data={{ name: "multiname", label: "multiselect", list: list2 }}
            mode="readd"
            defaultValue={[109,108,104]}
          />
          <br />
          <br />
          <CustomTextfield
            data={{ name: "name22", label: "text area" }}
            multiline
            rows={3}
          />
          <br />
          <br />
          <CustomTextfield
            data={{ name: "name33", label: "date" }}
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <br />
          <br />
          <CustomMultiSelectCheck
            data={{ name: "multiname2", label: "multil select checkbox", list: list2 }}
            defaultValue={[102, 104, 106]}
            mode="readd"
          />
          <Button type="submit">save</Button>
        </div>
      </Form>
    </Formik>
  );
}
