import './App.css';
import React from 'react';
import { ThemeProvider, colors } from '@mui/material';
import { createTheme } from '@mui/material';
// import ReactDOM from 'react-dom/client';
import NewCustomerScreenIndex from './components/newcustomer/NewCustomerIndex';
import CustomerSearchScreenIndex from './components/customer_search/CustomerSearchIndex';
import Home from './components/home/Home';
import CategoryForm from './components/categoryForm/categoryForm.jsx';
import ButtonAppBar from './components/newcustomer/Appbar';
import { Routes, Route } from "react-router-dom";
import CreateNewCategory from './components/customizeCategory/CreateNewCategory';
import CustomizeCategory from './components/customizeCategory/CustomizeCategory';
import CreateNewItem from './components/customizeCategory/CreateNewItem';
import CustomizeCategoryDetail from './components/customizeCategory/CustomizeCategoryDetail';
import CustomerGroupDistribution from './components/customer_search/customerDistribution/CustomerGroupDistribution';


const themex = createTheme({
  palette: {
    primary: {
      main: "#07a74a",
      light: "#07a74a42",
      dark: colors.green[800],

    },
    secondary: {
      main: "#00b0ff",
      light: "#33bfff",
      dark: "#007bb2"
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={themex}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/new" element={<NewCustomerScreenIndex />} />
        <Route exact path="/cust" element={<CustomerSearchScreenIndex />} />
        <Route exact path="/form" element={<CategoryForm />} />
        <Route exact path="/customizeCategory" element={<CustomizeCategory/>}/>
        <Route exact path="/newCustomizeCategory" element={<CreateNewCategory/>}/>
        <Route exact path="/newCategoryItem" element={<CreateNewItem/>}/>
        <Route exact path="/customizeCategoryDetail" element={<CustomizeCategoryDetail/>}/>
        <Route exact path="/customerDistribution" element={<CustomerGroupDistribution/>}/>
        <Route path="*" element={<ButtonAppBar title="Error! Page not found" />} />
      </Routes>
    </ThemeProvider >
   
  );
}

export default App;
