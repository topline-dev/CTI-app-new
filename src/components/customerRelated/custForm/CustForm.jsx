import React from "react";
import { Card, Grid, Typography, CardContent } from "@mui/material";
import CustomTextField from "../../formikInputs/CustomTextField";
import CustomSelect from "../../formikInputs/CustomSelect";
import GroupSelect from "../../formikInputs/GroupSelect";

export default function CustForm(props) {
  let readMode = props.mode === "read" ? "read" : "";
  

  return (
    <>
      <Card sx={{ minWidth: 275 }} elevation={4}>
        <CardContent>
          <Typography
            sx={{ fontSize: 15 }}
            color="black"
            style={{ fontWeight: "bold" }}
            align="center"
            gutterBottom
          >
            Customer Information
          </Typography>
          <Grid container columnSpacing={1} rowSpacing={1}>
            <Grid item xs={4}>
              <CustomTextField
                mode={readMode}
                data={{ name: "customerLastName", label: "Last Name" }}
              />
            </Grid>
            <Grid item xs={4}>
              <CustomTextField
                mode={readMode}
                data={{
                  name: "customerFirstName",
                  label: "First Name",
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <CustomTextField
                mode={readMode}
                data={{ name: "customerAge", label: "Age" }}
              />
            </Grid>
           
            <Grid item xs={4}>
              <CustomTextField
                mode={readMode}
                data={{ name: "customerLastRuby", label: "Last Ruby" }}
              />
            </Grid>
            <Grid item xs={4}>
              <CustomTextField
                mode={readMode}
                data={{
                  name: "customerFirstRuby",
                  label: "First Ruby",
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <CustomSelect
								mode={readMode}
								data={{
									name: "customerSex",
									label: "Sex",
									list:
										[
											{ value: "Male", name: "Male" },
											{ value: "Female", name: "Female" },
											{ value: "Other", name: "Other" }
										]
								}} />
            </Grid>
            <Grid item xs={7}>
              <CustomTextField
                mode={readMode}
                type="email"
                data={{ name: "customerEmail", label: "Email" }}
              />
            </Grid>
            <Grid item xs={5}>
              <CustomTextField
                mode={readMode}
                type="date"
                InputLabelProps={{ shrink: true }}
                data={{ name: "customerBirthday", label: "Birthday" }}
              />
            </Grid>
            {/* <Grid item xs={6}>
              <CustomTextField
                mode={readMode}
                type="number"
                data={{ name: "telephone", label: "Telephone" }}
              />
            </Grid> */}
            
            <Grid item xs={7}>
              <CustomTextField
                mode={readMode}
                data={{ name: "customerAddress1", label: "Address 1" }}
              />
            </Grid>
            <Grid item xs={5}>
              <CustomTextField
                mode={readMode}
                type="number"
                data={{ name: "customerZipCode", label: "ZipCode" }}
              />
            </Grid>
            <Grid item xs={6}>
              <CustomTextField
                mode={readMode}
                data={{ name: "customerAddress2", label: "Address 2" }}
              />
            </Grid>
            <Grid item xs={6}>
              <CustomTextField
                mode={readMode}
                data={{ name: "customerAddress3", label: "Address 3" }}
              />
            </Grid>
            <Grid item xs={7}>
              <CustomTextField
                mode={readMode}
                data={{ name: "customerAddress4", label: "Address 4" }}
              />
            </Grid>
            <Grid item xs={5}>
              <CustomTextField
                mode={readMode}
                data={{
                  name: "customerBusinessType",
                  label: "Profession",
                }}
              />
            </Grid>
           
            <Grid item xs={6}>
              <CustomTextField
                mode={readMode}
                data={{ name: "customerFirstUserId", label: " First User Id" }}
              />
            </Grid>
            <Grid item xs={6}>
              <CustomTextField
                mode={readMode}
                data={{ name: "customerSecondUserId", label: " Second User Id" }}
              />
            </Grid>
            <Grid item xs={12}>
              <GroupSelect
               mode={readMode}
               name= "customerGroup.groupId"
               />
            </Grid>
            
            {/* <Grid item xs={7}>
              <CustomTextField
                mode={readMode}
                data={{ name: "customerGroup.groupId", label: "Address 4" }}
              />
            </Grid> */}
            {/* <Grid item xs={6}>
              <CustomSelect
                mode={readMode}
                
                data={{
                  name: "customerGroupId",
                  label: "Group",
                  list: [
                    { value: 1, name: "Getter" },
                    { value: 2, name: "Setter" },
                    { value: 3, name: "Better" },
                  ],
                }}
              />
            </Grid> */}
            {/* <Grid item xs={6}>
              <CustomSelect
                mode={readMode}
                data={{
                  name: "project",
                  label: "Project",
                  list: [
                    { value: 1, name: "Project 1" },
                    { value: 2, name: "Project 2" },
                    { value: 3, name: "Project 3" },
                  ],
                }}
              />
            </Grid> */}
            <Grid item xs={6}>
              <CustomTextField
                mode={readMode}
               
                disabled
                data={{
                  name: "customerRegisterUserId",
                  label: "Author",
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <CustomTextField
                mode={readMode}
               
                disabled
                data={{
                  name: "customerModifyUserId",
                  label: "Last Updated by",
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <CustomTextField
                mode={readMode}
                multiline
                rows={3}
                data={{ name: "customerMemo1", label: "Memo 1" }}
              />
            </Grid>
            <Grid item xs={6}>
              <CustomTextField
                mode={readMode}
                multiline
                rows={3}
                data={{ name: "customerMemo2", label: "Memo 2" }}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
