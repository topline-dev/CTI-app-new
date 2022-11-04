import React, { useState, useEffect } from 'react'
import { Card, CardContent, Tabs, Tab, AppBar } from '@mui/material'
import CategoryData from '../../categoryForm/CategoryData'
import CallLogCategory from './CallLogCategory';
import { AxiosFetch } from "../../../AxiosFetch";


function CustomerDetailCategory(props) {
    const axiosFetch=AxiosFetch();


    const customerId = props.customerId;
    const mode = props.mode || "";
    let groupId= props.groupId;
    // groupId=2;

    const [tabValue, setValue] = useState(0);
    // const [error, setError] = useState(null);
    const [isLoading, setisLoading] = useState(true);
    const [categoryArray, setCategoryArray] = useState([]);

    //This will work like componentDidMount
    useEffect(() => {
        setisLoading(true);
        async function getData(){
            if (props.groupId && props.groupId > 0) {
                const response = await axiosFetch.get(`/category/${groupId}`);
                // const response = await axiosFetch.get(`/category`);
                if(response.status === 200){
                    console.log(response);
                    setCategoryArray(response.data);
                    setisLoading(false);
                }
            }
        }
        getData();
    }, [props.groupId])

    function allProps(index) {
        return categoryArray[index];
    }

    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (

            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                
                {value === index && (
                    value == 0 ? <CallLogCategory/> :
                    <CategoryData {...allProps(index-1)} mode={mode} customerId={customerId} />
                )}
            </div>
        );
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(newValue);
    };

    const tabHead = categoryArray.map((category, index) =>
        <Tab label={category.categoryName} wrapped index={index+1} key={index+1} />
    )
    const tabContent = categoryArray.map((category, index) =>
        <div key={index}>
            <TabPanel value={tabValue} index={index+1} >
                {category.categoryName}
            </TabPanel>
        </div>
    )
    return (
        isLoading ? <div> Loading </div> :
            <Card sx={{ minWidth: 275 }} elevation={4}>
                <CardContent>
                    <div>
                        <AppBar position='static' sx={{ backgroundColor: "primary.light" }} color="primary">
                            <Tabs value={tabValue} onChange={handleChange} scrollButtons="auto" aria-label="scrollable auto tabs example" centered>
                                <Tab label="Call Log" wrapped index='0' key='0' />
                                {tabHead}
                            </Tabs>
                        </AppBar>
                        <TabPanel value = {tabValue} index={0}>Call Log Hello</TabPanel>
                        {tabContent}
                    </div>
                </CardContent>
            </Card>
    )
}

export default CustomerDetailCategory 
