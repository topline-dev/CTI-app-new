import React from 'react'
import FormikTextField from './formikTextField'
import { Tabs, Tab } from '@mui/material'
import CategoryData from './categoryData'

const categoryArray = [
    {
        categoryId: 1,
        categoryName: "Shipping Box",
    },
    {
        categoryId: 2,
        categoryName: "Box",
    },
    {
        categoryId: 3,
        categoryName: "Ping Box",
    }
]

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


function form() {
    const [tabValue, setValue] = React.useState(0);

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
        <div>
            <Tabs value={tabValue} onChange={handleChange} scrollButtons="auto" aria-label="scrollable auto tabs example" centered>
                {tabHead}
            </Tabs>
            {tabContent}
        </div>
    )
}

export default form