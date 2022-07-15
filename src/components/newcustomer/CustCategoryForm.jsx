import React,{useEffect, useState} from 'react';
import { Card,Typography,CardContent,Tab,Tabs,AppBar} from '@mui/material';
import ContractInformationForm from './ContractInformation';
import { Field,FieldArray,useFormikContext,FastField } from 'formik';


function CustCategoryForm(props) {
    //const [valueGrp,setValueGrp]=useState('grp1');
    const valueGrp=props.data;
    const [value,setValue]=React.useState(0);
    const handleTabs=(e,val)=>{
        setValue(val);
    }
    const tabTitleTable={
        grp1:["Contract Information","Call Log history","test","d"],
        grp2:["Contract Information","Call Log history","shipphing box","shipphing box","shipphing box","shipphing box"],
        grp3:["Contract Information","Call Log history","shipphing box"]
    }
    const tabPanelTable={
        grp1:[<ContractInformationForm/>,'ewf'],
        grp2:["Contract Information",<ContractInformationForm/>,"shipphing box","shipphing box","shipphing box","shipphing box"],
        grp3:["Contract Information",<ContractInformationForm/>,"shipphing box"]
    }

    let tabPanel;
    let tabTitle;
    if (typeof tabPanelTable[valueGrp] ==='undefined' ) {
        tabPanel=['ef','call log history placeholder'];
        tabTitle=['Contract Information','Call log history'];
    }
    else{
        tabPanel=tabPanelTable[valueGrp];  
        tabTitle=tabTitleTable[valueGrp];  
    }
    
    
    return(
        <>
            <Card sx={{ minWidth: 275 }} elevation={4}>
              <CardContent>
                <Typography sx={{ fontSize: 15 }} color="black" style={{fontWeight:"bold"}} align="center" gutterBottom>
                  Customized Category Information
                </Typography>
                <FastField name='custForm.customerGroupId'>
                {
                    (props)=>{
                        //setValueGrp(props.field.value);
                    }
                }
                </FastField>
            <div>
                <AppBar position='static' sx={{backgroundColor:"primary.light"}} color="primary">
                    <Tabs variant='fullWidth'  value={value} onChange={handleTabs}>
                        {tabTitle.map((tt,index)=>(
                            <Tab label={tt} key={index} />
                            )
                        )}
                    </Tabs>
                </AppBar>
                {tabPanel.map((tp,index)=>(
                    <TabPanel value={value} index={index} key={index}>{tp}</TabPanel>
                    )
                )}
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