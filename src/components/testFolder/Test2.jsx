import React from "react";
import { useEffect, useState } from "react";
import CustomTextfield from "../formikInputs/CustomTextField";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import CustomSelect from "../formikInputs/CustomSelect";
import { Button } from "@mui/material";
import CustomMultiSelect from "../formikInputs/CustomMultiSelect";
import CustomMultiSelectCheck from "../formikInputs/CustomMultiSelctCheck";
import { InputAdornment} from "@mui/material";
import { Visibility,VisibilityOff } from "@mui/icons-material";
import { useLocation } from "react-router";
import { useContext } from "react";
import LoginContext from "../../context/LoginContext";
import logo from "./logo.jpg";

export default function Test2() {
  const a=useContext(LoginContext);
  //console.log(a,"context");

  const location = useLocation();
  console.log(location,"location state of test page");

useEffect(()=>{
  a.setToken(true);
},[])


  const [toggle_password,settoggle_password]=useState(false);

  // const [test, setTest] = useState();
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
          <img src={logo} alt="Topline" ></img>
          <br />
          <br />
          <CustomTextfield data={{ name: "name11", label: "textfield" }}
             type = { toggle_password ? "text" : "password" }
            InputProps = {
              {
                endAdornment: ( 
                <InputAdornment position="end"> {
                    toggle_password ? ( 
                    <Visibility className = "cursor_pointer"
                      onClick = {(e)=>{
                          settoggle_password(false)
                      }
                       
                      }
                      />
                    ) : ( 
                    <VisibilityOff 
                    onClick = {(e)=>{
                      settoggle_password(true)
                  }
                   
                  }
                      />
                    )
                  } 
                  </InputAdornment>
                ),
              }
            }
          />
          <br />
          <br />
          <br />
          <CustomSelect
            data={{ name: "basicSelect", label: "select", list: list }}
          />
          <br />
          <br />
          <br />
          <CustomMultiSelect
            data={{ name: "multiname", label: "multiselect", list: list2 }}
            
          />
          <br />
          <br />
          <CustomMultiSelectCheck
            data={{ name: "multiname2", label: "multil select checkbox", list: list2 }}
            // defaultValue={[102, 104, 106]}
           
          />
          <br />
          <br />
          <CustomTextfield
            data={{ name: "name33", label: "date" }}
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth={false}
          />
          <br />
          <br />
          <CustomTextfield
            data={{ name: "name22", label: "text area" }}
            multiline
            rows={3}
          />
          <Button type="submit">save</Button>
        </div>
      </Form>
    </Formik>
  );
}
