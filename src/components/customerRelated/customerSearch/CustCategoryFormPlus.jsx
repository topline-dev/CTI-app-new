import React, { useState, useEffect } from 'react'
import { Card, CardContent, Tabs, Tab, AppBar } from '@mui/material'
import CategoryData from '../categoryForm/CategoryData';
import axios from 'axios';
import CustFormLite from "./CustFormLite";
import axiosClient from '../axios';
import { AxiosFetch } from '../../AxiosFetch';

function CustCategoryFormPlus(props) {
    const [tabValue, setValue] = useState(0);
    const axiosFetch = AxiosFetch();

    // const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);
    const [categoryArray, setCategoryArray] = useState([]);
    // const groupId = props.groupId;


    function allProps(index) {
        return categoryArray[index];
    }

    function TabPanel(props) {
        const { children, value, index, ...other } = props;
        if (props.check === "true") {
            return (
                <div>
                    {
                        value === index && (
                            <h1>{children}</h1>
                        )
                    }
                </div>
            );
        }

        return (

            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <CategoryData {...allProps(index - 1)} />
                )}
            </div>
        );
    }

    //This will work like componentDidMount
    useEffect(() => {
        async function getdata() {
            if (props.groupId && props.groupId > 0) {
                const response = await axiosFetch.get(`/category/${props.groupId}`);
                if (response.status === 200)
                    setCategoryArray(response.data);
            }
        }
        getdata();
    }, [props.groupId])


const handleChange = (event, newValue) => {
    setValue(newValue);
};

const tabHead = categoryArray.map((category, index) =>
    <Tab label={category.categoryName} wrapped />
)
const tabContent = categoryArray.map((category, index) =>
    <div>
        <TabPanel value={tabValue} index={1 + index}>
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
                        <Tab label="Customer Information" wrapped />
                        {tabHead}
                    </Tabs>
                </AppBar>
                <TabPanel value={tabValue} index={0} check="true">
                    <CustFormLite />
                </TabPanel>
                {tabContent}
            </div>
        </CardContent>
    </Card>
)
}

export default CustCategoryFormPlus