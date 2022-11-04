import React, { useState, useEffect } from 'react'
import { Card, CardContent, Tabs, Tab, AppBar } from '@mui/material'
import CategoryData from './CategoryData'
import { AxiosFetch } from "../../AxiosFetch";


function CategoryForm(props) {
    const axiosFetch=AxiosFetch();

    const customerId = props.customerId;

    //const mode = props.mode;
    //const groupId= props.groupId;
 
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
                    <CategoryData {...allProps(index)} mode={mode} customerId={customerId} />
                )}
            </div>
        );
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const tabHead = categoryArray.map((category, index) =>
        <Tab label={category.categoryName} wrapped index={index} key={index} />
    )
    const tabContent = categoryArray.map((category, index) =>
        <div key={index}>
            <TabPanel value={tabValue} index={index} >
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
                                {tabHead}
                            </Tabs>
                        </AppBar>
                        {tabContent}
                    </div>
                </CardContent>
            </Card>
    )
}

export default CategoryForm 
