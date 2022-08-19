import React, { useState, useEffect } from 'react'
import { Card, CardContent, Tabs, Tab, AppBar } from '@mui/material'
import CategoryData from './categoryData'
import axios from 'axios'

function categoryForm(props) {
    const [tabValue, setValue] = useState(0);

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [categoryArray, setCategoryArray] = useState([]);

    if (props.check === "true") {
        setCategoryArray()
    }

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



    //This will work like componentDidMount
    useEffect(() => {
        if (props.groupId && props.groupId > 0) {
            const baseURL = `http://topline-cti.com:8083/category/${props.groupId}`
            axios.get(baseURL)
                .then((response) => {
                    setCategoryArray(response.data);
                })
        }

    }, [props.groupId])


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const tabHead = categoryArray.map((category, index) =>
        <Tab label={category.categoryName} wrapped index={index} />
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