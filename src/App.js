import './App.css';
import React from 'react';
import { ThemeProvider,colors} from '@mui/material';
import { createTheme } from '@mui/material';
// import ReactDOM from 'react-dom/client';
import NewCustomerScreenIndex from './components/newcustomer/NewCustomerIndex';
import CustomerSearchScreenIndex from './components/customer_search/CustomerSearchIndex';
import Home from './components/home/Home';
import ButtonAppBar from './components/newcustomer/Appbar';
import {
  HashRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


const themex = createTheme({
  palette: {
    primary:{
      main:"#07a74a",
      light:"#07a74a42",
      dark: colors.green[800],
      
    },
    secondary: {
      main: "#00b0ff",
      light: "#33bfff",
      dark:"#007bb2"
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={themex}>
      <>
        <Routes>
            <Route exact path="/home" element={<Home/>}/>
            <Route exact path="/new" element={<NewCustomerScreenIndex/>}/>
            <Route exact path="/cust" element={<CustomerSearchScreenIndex/>}/>
            <Route path="*" element={<ButtonAppBar title="Error! Page not found"/>}/>            
         </Routes>
      </>
    </ThemeProvider>
   
  );
}

export default App;
