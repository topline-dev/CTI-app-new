import '../../App.css';
import React from 'react';
import ButtonAppBar from '../newcustomer/Appbar';
import TemporaryDrawer from '../newcustomer/SideNav';
import { Grid,Card,CardContent,Button, Stack, TextField,Box } from '@mui/material';
import BasicSelectCustGroup from '../materialui/selectors/CustGroupSelect';
import BasicSelectProjectGroup from '../materialui/selectors/ProjectGroupSelect';
import {Tab,Tabs,AppBar} from '@mui/material';
import BasicInformation from './BasicInformation';
import ContractInformationForm from '../newcustomer/ContractInformation';

export default function CustomerSearchScreenIndex() {
    const [value,setValue]=React.useState(0);
    function handleTabs(e,val){
        setValue(val);
    }
  return (
    <>
        <ButtonAppBar title="Customer Search"/>
        <TemporaryDrawer/>
        <Grid container spacing={2} justifyContent={"center"} alignItems="stretch" direction="row">
            <Grid item  xs={12} md={3.5}>
                <Card elevation={4} >
                    <CardContent>
                        <Stack spacing={4}>
                                   {/* <item><Container sx={{backgroundColor:"primary.light",minHeight:"50px",justifyContent:"center"}}><h3>Information</h3></Container></item> */}
                            <Box><TextField type="number" variant='outlined' fullWidth label="Telephone number" /></Box>
                            <Box><BasicSelectCustGroup/></Box>
                            <Box><BasicSelectProjectGroup/></Box>
                            <Box><Button variant="contained" fullWidth>Search</Button></Box>
                            </Stack>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={7.5}>
                <Card  elevation={4}>
                    <CardContent>
                        <div>
                            <AppBar position='static' sx={{backgroundColor:"primary.light"}} color="primary">
                                <Tabs variant='fullWidth'  value={value} onChange={handleTabs} >
                                    <Tab label="Basic Information"/>
                                    <Tab label="Contract Information" />
                                    <Tab label="Call Log history"/>
                                </Tabs>
                            </AppBar>
                            <TabPanel value={value} index={0}>
                                <BasicInformation/>
                            </TabPanel>
                            <TabPanel  value={value} index={1}><ContractInformationForm/></TabPanel>
                            <TabPanel  value={value} index={2}>Item 3</TabPanel>
                        </div>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={11}>
                <Card elevation={4} sx={{minHeight:300}}>
                    <CardContent>
                        <h1>customer detail tab</h1>
                    </CardContent>
                </Card>      
            </Grid>
        </Grid>
    </>
  );
}

function TabPanel(props)
{
    const {children,value,index}=props;
    return(
    <div>
        {
            value===index && (
                <h1>{children}</h1>
            )
        }   
    </div>    
    );
}
