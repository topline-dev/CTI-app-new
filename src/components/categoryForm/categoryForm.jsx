import React from 'react'
import FormikTextField from './formikTextField'
import { Card, CardContent, Tabs, Tab, AppBar } from '@mui/material'
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


function categoryForm() {
    const [tabValue, setValue] = React.useState(0);

//     const [error, setError] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [items, setItems] = useState([]);

//   //This will work like componentDidMount
//   useEffect(() => {
//     fetch("https://api.example.com/items")
//       .then(res => res.json())
//       .then(
//         (result) => {
//           setIsLoaded(true);
//           setItems(result);
//         },
//         // Note: it's important to handle errors here
//         // instead of a catch() block so that we don't swallow
//         // exceptions from actual bugs in components.
//         (error) => {
//           setIsLoaded(true);
//           setError(error);
//         }
//       )
//   }, [])


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