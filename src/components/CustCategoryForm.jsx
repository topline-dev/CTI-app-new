import * as React from 'react';
import { Card,Typography,Button,CardActions,CardContent,Tab,Tabs,AppBar} from '@mui/material';
import ContractInformationForm from './ContractInformation';

function CustCategoryForm() {
    const [value,setValue]=React.useState(0);
    const handleTabs=(e,val)=>{
        setValue(val);
    }
    return(
        <>
            <Card sx={{ minWidth: 275 }} elevation="4">
              <CardContent>
                <Typography sx={{ fontSize: 15 }} color="black" style={{fontWeight:"bold"}} align="center" gutterBottom>
                  Customized Category Information
                </Typography>
            <div>
                <AppBar position='static' style={{background:"#07a74a42"}} colo>
                    <Tabs variant='fullWidth' onChange={handleTabs} value={value}>
                        <Tab label="Contract Information"/>
                        <Tab label="Call Log history"/>
                        <Tab label="Test"/>
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}><ContractInformationForm/></TabPanel>
                <TabPanel  value={value} index={1}>Item 2</TabPanel>
                <TabPanel  value={value} index={2}>Item 3</TabPanel>
            </div>
              </CardContent>
              {/* <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions> */}
          </Card>
        </>
    ); 
}
export default CustCategoryForm;

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