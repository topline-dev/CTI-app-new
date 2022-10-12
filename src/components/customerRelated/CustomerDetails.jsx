// import "../../App.css";
// import React, { useEffect, useState } from "react";
// import { Button, Grid, Stack } from "@mui/material";
// import ButtonAppBar from "./Appbar";
// import CustForm from "./custForm/CustForm";
// import { Formik, Form } from "formik";
// import CategoryForm from "./categoryForm/CategoryForm";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import axiosClient from "./axios";

// export default function CustomerDetails() {
//   console.log("in customer detail");
//   const customerId = 1;
//   let initialValues;
//   let categoryobj={};
//   let customerobj={};
//   let groupId;
//   const [customerData, setCustomerData] = useState();
//   const [isLoading, setIsLoading] = useState(true);

//   const baseURL = `http://topline-cti.com:8082/customers/${customerId}`;

//   if (typeof customerData != "undefined" && isLoading === true) {
//     setIsLoading(false);
//   }

//   //This will work like componentDidMount
//   useEffect(() => {
//     axios.get(baseURL).then((response) => {
//       setCustomerData(response.data);
//     });
//   }, []);

//   if (isLoading) {
//     console.log("isloading is false");
//     return <div><h1>server not connected</h1></div>;
//   } else {
//     customerData.categoryData.map((data,index)=>{
//       categoryobj[data.itemId]=data.value;
//     })
//     initialValues = { 
//       custData: customerData,
//       categoryData: categoryobj,
//      };
//      groupId=customerData.groupId;
//     //  delete initialValues.custData.categoryData;
//     console.log(groupId,"isloading is true");
//      console.log(customerData,"ccccc");
//      console.log(initialValues,"pppp");
//     return (
//       <>
//         <ButtonAppBar title="Customer Detail" />
//         {/* <TemporaryDrawer /> */}
//         <Formik
//           enableReinitialize={true}
//           initialValues={initialValues}
//           // validationSchema={formValidation}
//           onSubmit={async (values) => {
//             await new Promise((r) => setTimeout(r, 500));
//             console.log(values);
//             //handleSubmit(values);
//             alert(JSON.stringify(values, null, 2));
//           }}
//         >
//           <Form>
//             <Grid container spacing={2} justifyContent={"center"}>
//               <Grid item xs={12} md={5.5}>
//                 <CustForm mode="read" />
//               </Grid>
//               <Grid item xs={12} md={5.5}>
//                 <CategoryForm
//                   mode="read"
//                   customerId={customerId}
//                   groupId={groupId}
//                 />
//                 <br />
//                 <Stack direction="row" spacing={2}>
//                   {/* <Button variant="contained" size="large" fullWidth>
//                     Edit
//                   </Button> */}
//                   {/* <Link to="/customerEdit">customer Edit</Link> */}
//                   <Button as={Link} to="/customerEdit" variant="contained" size="large" fullWidth>
//                     Edit
//                   </Button>
//                 </Stack>
//               </Grid>
//             </Grid>
//           </Form>
//         </Formik>
//       </>
//     );
//   }
// }
