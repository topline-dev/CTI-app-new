import { Grid } from '@mui/material'
import React from 'react'
import CustomizeCheckBox from './customizeItems/CustomizeCheckBox'
import CustomizeDateTime from './customizeItems/CustomizeDateTime'
import CustomizeSelect from './customizeItems/CustomizeSelect'
import CustomizeTextField from './customizeItems/CustomizeTextField'

export default function CustomizeCategoryDetail(props) {
const data={
    type:"text",
    name:'text1',
    label:'text1',
}
const data3={
    type:"checkBox",
    name:'checkbox1',
    label:'checkbox1',
}
const data2={
    type:"textbox",
    name:'textbox1',
    label:'textbox1',
}
const data4={
    type:"select",
    name:'select 1',
    label:'select 1',
    list:["option1","e","r","t"],
}
const datadate={
    type:"date",
    name:'date1',
    label:'date label',
}
const data5={
    type:"text",
    name:'text5',
    label:'texteiwofi',
}
const data9={
    name:'datetime',
    label:'date time label',
}
  return (
    <div>
            <Grid container spacing={3} justifyContent="center" columns={13}>
                <Grid item xs={6}>
                    <CustomizeTextField data={data2} multiline rows={4}/>     
                </Grid>
                <Grid item xs={6}>
                    <CustomizeTextField data={data} />     
                </Grid>
                <Grid item xs={6}>
                    <CustomizeTextField data={data}/>     
                </Grid>
                <Grid item xs={6}>
                    <CustomizeCheckBox data={data3}/>     
                </Grid>
                <Grid item xs={6}>
                   <CustomizeSelect data={data4}/>    
                </Grid>
                <Grid item xs={6}>
                    <CustomizeTextField data={datadate}  InputLabelProps={{shrink: true,}} type="date"/>       
                </Grid>
                <Grid item xs={6}>
                    <CustomizeDateTime data={data9}/>   
                </Grid>
                <Grid item xs={6}>
                    <CustomizeTextField data={data5}/>     
                </Grid>
                
            </Grid>
    </div>
  )
}
