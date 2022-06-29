import * as React from 'react';
import { Card,Typography,CardContent,Tab,Tabs,AppBar} from '@mui/material';
import ContractInformationForm from './ContractInformation';
function CustCategoryForm(props) {
    const [value,setValue]=React.useState(0);
    const handleTabs=(e,val)=>{
        setValue(val);
    }
    const tabtitle=["Contract Information","Call Log history","test","d"];
    const tabpanel=[<ContractInformationForm/>,'xx','yy','ww'];
    
    return(
        <>
            <Card sx={{ minWidth: 275 }} elevation={4}>
              <CardContent>
                <Typography sx={{ fontSize: 15 }} color="black" style={{fontWeight:"bold"}} align="center" gutterBottom>
                  Customized Category Information
                </Typography>
            <div>
                <AppBar position='static' sx={{backgroundColor:"primary.light"}} color="primary">
                    <Tabs variant='fullWidth'  value={value} onChange={handleTabs}>
                        {tabtitle.map((tt,index)=>(
                            <Tab label={tt} key={index} />
                            )
                        )}
                        {/* <Tab label="Contract Information" />
                        <Tab label="Call Log history"/>
                        <Tab label="Test"/> */}
                    </Tabs>
                </AppBar>
                {tabpanel.map((tp,index)=>(
                            <TabPanel value={value} index={index} key={index}>{tp}</TabPanel>
                            )
                        )}
                {/* <TabPanel value={value} index={0}><ContractInformationForm/></TabPanel>
                <TabPanel  value={value} index={1}>Item 2</TabPanel>
                <TabPanel  value={value} index={2}>Item 3</TabPanel> */}
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