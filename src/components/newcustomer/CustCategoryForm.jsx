import React from 'react';
import { Card,Typography,CardContent,Tab,Tabs,AppBar} from '@mui/material';
import ContractInformationForm from './ContractInformation';
import { Field,FieldArray,useFormikContext,FastField } from 'formik';


function CustCategoryForm({field,form}) {
    //console.log(field,form);
    // let value9=form.values.custForm.customerGroupId;
    let value9='grp1';
    const testt = (e) =>{
        console.log('in here',e.onChange);
        return(
            <>
            </>
        )
    };
    
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
    tabPanel=tabPanelTable[value9];  
    tabTitle=tabTitleTable[value9];  
    if (typeof tabPanelTable[value9] ==='undefined' ) {
        tabPanel=['ef','call log history placeholder'];
        tabTitle=['Contract Information','Call log history'];
    }
    else{
        tabPanel=tabPanelTable[value9];  
        tabTitle=tabTitleTable[value9];  
    }
    
    
    return(
        <>
            <Card sx={{ minWidth: 275 }} elevation={4}>
              <CardContent>
                <Typography sx={{ fontSize: 15 }} color="black" style={{fontWeight:"bold"}} align="center" gutterBottom>
                  Customized Category Information
                </Typography>
                <FastField name='custForm.customerGroupId' as={testt} />
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