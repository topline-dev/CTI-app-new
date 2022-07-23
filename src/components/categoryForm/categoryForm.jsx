import React, { useState, useEffect } from 'react'
import FormikTextField from './formikTextField'
import { Card, CardContent, Tabs, Tab, AppBar } from '@mui/material'
import CategoryData from './categoryData'
import axios from 'axios'

function categoryForm() {
    const [tabValue, setValue] = useState(0);

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [categoryArray, setCategoryArray] = useState([]);

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
                    <CategoryData {...allProps(index)} />
                )}
            </div>
        );
    }

    const baseURL = "http://localhost:8083/categories"

    //This will work like componentDidMount
    useEffect(() => {
        axios.get(baseURL)
        .then((response) => {
            setCategoryArray(response.data);
        })
    }, [])


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const tabHead = categoryArray.map((category, index) =>
        <Tab label={category.categoryName} wrapped />
    )
    const tabContent = categoryArray.map((category, index) =>
        <div>
            <TabPanel value={tabValue} index={index}>
                {category.categoryName}
            </TabPanel>
        </div>
    )
    return (
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

export default categoryForm