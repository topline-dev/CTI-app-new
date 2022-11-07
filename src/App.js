import './App.css';
import React from 'react';
import { ThemeProvider, colors } from '@mui/material';
import { createTheme } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.css';
// import ReactDOM from 'react-dom/client';
import NewCustomerScreenIndex from './components/newcustomer/NewCustomerIndex';
import CustomizeCategory from "./components/customizeCategory/CustomizeCategory";
import CreateNewCategory from './components/customizeCategory/CreateNewCategory';
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
import CustomerGroupDetail from './components/cutomerGroupRelated/CustomerGroupDetail';
import EditCustomerGroup from './components/cutomerGroupRelated/EditCustomerGroup';
import NewCustomer from './components/customerRelated/NewCustomer';
import CustomizeCategoryTable from './components/customizeCategory/CustomizeCategoryTable';
import CustomizeCategoryEdit from './components/customizeCategory/CustomizeCategoryEdit';
import CategoryItemTable from './components/customizeCategory/customizeItemsRelated/CategoryItemTable';
import CreateNewItem from './components/customizeCategory/customizeItemsRelated/CreateNewItem';
import CategoryItemDetail from './components/customizeCategory/customizeItemsRelated/CategoryItemDetail';
import CustomerProjecTable from './components/customerProjectRelated/CustomerProjectTable';
import CustomerProjectDetail from './components/customerProjectRelated/CustomerProjectDetail';
import CallLogIndex from './components/callLogSettings/CallLogIndex';



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
          <Route exact path="/newCustomer" element={<NewCustomer/>} />
          <Route exact path="/customerSearch" element={<CustomerSearchScreenIndex />} />
          <Route exact path="/form" element={<CategoryForm />} />
          <Route exact path="/customizeCategory" element={<CustomizeCategory/>}/>
          <Route exact path="/customizeCategoryTable" element={<CustomizeCategoryTable/>}/>
          <Route exact path="/newCustomizeCategory" element={<CreateNewCategory/>}/>
          <Route exact path="/newCategoryItem" element={<CreateNewItem/>}/>
          <Route exact path="/categoryItemTable" element={<CategoryItemTable/>}/>
          <Route exact path="/categoryItemDetail" element={<CategoryItemDetail/>}/>
          <Route exact path="/customizeCategoryDetail" element={<CustomizeCategoryDetail/>}/>
          <Route exact path="/customizeCategoryEdit" element={<CustomizeCategoryEdit/>}/>
          <Route exact path="/customerDistribution" element={<CustomerGroupDistribution/>}/>
          <Route exact path="/customerDetail" element={<CustomerDetails/>}/>
          <Route exact path="/CustomerEdit" element={<CustomerEdit/>}/>
          <Route exact path="/newUser" element={<CreateNewUser/>}/>
          <Route exact path="/userDetail" element={<UserDetail/>}/>
          <Route exact path="/userEdit" element={<UserEdit/>}/>
          <Route exact path="/userSearch" element={<UserSearch/>}/>
          <Route exact path="/newCustomerGroup" element={<CreateNewCustomerGroup/>}/>
          <Route exact path="/customerGroupTable" element={<CustomerGroupTable/>}/>
          <Route exact path="/customerGroupDetail" element={<CustomerGroupDetail/>}/>
          <Route exact path="/editCustomerGroup" element={<EditCustomerGroup/>}/>
          <Route exact path="/newCustomerProject" element={<CreateNewCustomerProject/>}/>
          <Route exact path="/customerProjectTable" element={<CustomerProjecTable/>}/>
          <Route exact path="/customerProjectDetail" element={<CustomerProjectDetail/>}/>
          <Route exact path="/callLogSettings" element={<CallLogIndex/>}/>



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
