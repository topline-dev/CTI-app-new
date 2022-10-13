import './App.css';
import React from 'react';
import { ThemeProvider, colors } from '@mui/material';
import { createTheme } from '@mui/material';
// import ReactDOM from 'react-dom/client';
import NewCustomerScreenIndex from './components/newcustomer/NewCustomerIndex';
import CustomizeCategory from "./components/customizeCategory/CustomizeCategory";
import CreateNewCategory from './components/customizeCategory/CreateNewCategory';
import CreateNewItem from "./components/customizeCategory/CreateNewItem";
import CustomizeCategoryDetail from './components/customizeCategory/CustomizeCategoryDetail';
import CustomerGroupDistribution from "./components/customerRelated/customerSearch/customerDistribution/CustomerGroupDistribution"
import CategoryForm from './components/customerRelated/categoryForm/CategoryForm';

import CustomerSearchScreenIndex from './components/customerRelated/customerSearch/CustomerSearchIndex';
import Home from './components/home/Home';
import ButtonAppBar from './components/customerRelated/Appbar';
import { Routes, Route } from "react-router-dom";
// import CreateNewCategory from './components/customizeCategory/CreateNewCategory';
// import CustomizeCategory from './components/customizeCategory/CustomizeCategory';
// import CreateNewItem from './components/customizeCategory/CreateNewItem';
// import CustomizeCategoryDetail from './components/customizeCategory/CustomizeCategoryDetail';
// import CustomerGroupDistribution from './components/customer_search/customerDistribution/CustomerGroupDistribution';
// import TestFile from './components/testFolder/TestFile';
import CustomerDetails from './components/customerRelated/customerDetail/CustomerDetails';
import Test2 from './components/testFolder/Test2';
import CustomerEdit from './components/customerEdit/CustomerEdit';
import LoginIndex from './components/login/LoginIndex';
import PrivateRoutes from './components/routes/PrivateRoutes';
import LoginState from './context/LoginState';
import CreateNewUser from './components/userRelated/CreateNewUser';
import UserSearch from './components/userRelated/UserSearch';
import CreateNewCustomerGroup from './components/cutomerGroupRelated/CreateNewCustomerGroup';
import CreateNewCustomerProject from './components/customerProjectRelated/CreateNewCustomerProject';
import UserDetail from './components/userRelated/UserDetail';
import UserEdit from './components/userRelated/UserEdit';
import CustomerGroupTable from './components/cutomerGroupRelated/CustomerGroupTable';
import Import from './components/import/Import';


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
    <LoginState>
    <ThemeProvider theme={themex}>
      <Routes>

        <Route exact path="/" element={<LoginIndex />}/>

        {/* <Route exact path="/testPage" element={<Test2/>}/> */}
        <Route element={<PrivateRoutes />}>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/new" element={<NewCustomerScreenIndex />} />
          <Route exact path="/customerSearch" element={<CustomerSearchScreenIndex />} />
          <Route exact path="/form" element={<CategoryForm />} />
          <Route exact path="/customizeCategory" element={<CustomizeCategory/>}/>
          <Route exact path="/newCustomizeCategory" element={<CreateNewCategory/>}/>
          <Route exact path="/newCategoryItem" element={<CreateNewItem/>}/>
          <Route exact path="/customizeCategoryDetail" element={<CustomizeCategoryDetail/>}/>
          <Route exact path="/customerDistribution" element={<CustomerGroupDistribution/>}/>
          <Route exact path="/CustomerDetails" element={<CustomerDetails/>}/>
          <Route exact path="/CustomerEdit" element={<CustomerEdit/>}/>
          <Route exact path="/newUser" element={<CreateNewUser/>}/>
          <Route exact path="/userDetail" element={<UserDetail/>}/>
          <Route exact path="/userEdit" element={<UserEdit/>}/>
          <Route exact path="/userSearch" element={<UserSearch/>}/>
          <Route exact path="/newCustomerGroup" element={<CreateNewCustomerGroup/>}/>
          <Route exact path="/customerGroupTable" element={<CustomerGroupTable/>}/>
          <Route exact path="/newCustomerProject" element={<CreateNewCustomerProject/>}/>
          <Route exact path="/testPage" element={<Test2/>}/>
          <Route exact path="/import" element={<Import/>}/>
        </Route>
        <Route path="*" element={<ButtonAppBar title="Error! Page not found" />} />

      </Routes>
    </ThemeProvider >
    </LoginState>

  );
}

export default App;
