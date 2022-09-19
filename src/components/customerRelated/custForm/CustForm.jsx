import React from "react";
import { Card, Grid, Typography, CardContent } from "@mui/material";
import CustomTextField from "../../formikInputs/CustomTextField";
import CustomSelect from "../../formikInputs/CustomSelect";

export default function CustForm(props) {
  let readMode = props.mode === "read" ? true : false;

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
                data={{ name: "custData.customerLastName", label: "Last Name" }}
              />
            </Grid>
            <Grid item xs={4}>
              <CustomTextField
                mode={readMode}
                data={{
                  name: "custData.customerFirstName",
                  label: "First Name",
                }}
              />
            </Grid>
            <Grid item xs={4}>
              {/* <CustomSelect
								mode={readMode}
								defaultValue={["Male"]}
								data={{
									name: "custData.customerSex",
									label: "Sex",
									list:
										[
											{ value: "Male", name: "Male" },
											{ value: "Female", name: "Female" },
											{ value: "Other", name: "Other" }
										]
								}} /> */}
            </Grid>
            <Grid item xs={4}>
              <CustomTextField
                mode={readMode}
                data={{ name: "custData.customerLastRuby", label: "Last Ruby" }}
              />
            </Grid>
            <Grid item xs={4}>
              <CustomTextField
                mode={readMode}
                data={{
                  name: "custData.customerFirstRuby",
                  label: "First Ruby",
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <CustomTextField
                mode={readMode}
                type="date"
                InputLabelProps={{ shrink: true }}
                data={{ name: "custData.customerBirthday", label: "Birthday" }}
              />
            </Grid>
            <Grid item xs={6}>
              <CustomTextField
                mode={readMode}
                type="number"
                data={{ name: "telephone", label: "Telephone" }}
              />
            </Grid>
            <Grid item xs={6}>
              <CustomTextField
                mode={readMode}
                type="email"
                data={{ name: "custData.customerEmail", label: "Email" }}
              />
            </Grid>
            <Grid item xs={7}>
              <CustomTextField
                mode={readMode}
                data={{ name: "custData.customerAddress1", label: "Address 1" }}
              />
            </Grid>
            <Grid item xs={5}>
              <CustomTextField
                mode={readMode}
                type="number"
                data={{ name: "custData.customerZipCode", label: "ZipCode" }}
              />
            </Grid>
            <Grid item xs={6}>
              <CustomTextField
                mode={readMode}
                data={{ name: "custData.customerAddress2", label: "Address 2" }}
              />
            </Grid>
            <Grid item xs={6}>
              <CustomTextField
                mode={readMode}
                data={{ name: "custData.customerAddress3", label: "Address 3" }}
              />
            </Grid>
            <Grid item xs={7}>
              <CustomTextField
                mode={readMode}
                data={{ name: "custData.customerAddress4", label: "Address 4" }}
              />
            </Grid>
            <Grid item xs={5}>
              <CustomTextField
                mode={readMode}
                data={{
                  name: "custData.customerBusinessType",
                  label: "Profession",
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <CustomSelect
                mode={readMode}
                defaultValue={[1]}
                data={{
                  name: "custData.customerGroupId",
                  label: "Group",
                  list: [
                    { value: 1, name: "Getter" },
                    { value: 2, name: "Setter" },
                    { value: 3, name: "Better" },
                  ],
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <CustomSelect
                mode={readMode}
                defaultValue={[1]}
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
            </Grid>
            <Grid item xs={6}>
              <CustomTextField
                mode={readMode}
                value="3603"
                disabled
                data={{
                  name: "custData.customerRegisterUserId",
                  label: "Author",
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <CustomTextField
                mode={readMode}
                value="0000"
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
                data={{ name: "custData.customerMemo1", label: "Memo 1" }}
              />
            </Grid>
            <Grid item xs={6}>
              <CustomTextField
                mode={readMode}
                multiline
                rows={3}
                data={{ name: "custData.customerMemo2", label: "Memo 2" }}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
