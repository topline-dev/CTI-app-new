import {Stack } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import ButtonAppBar from '../newcustomer/Appbar';

export default function Home(){
    return(
        <>
            <ButtonAppBar />
            <h1>Home</h1>
            <Stack>
                <Link to="/new">new customer screen</Link>
                <Link to="/cust">customer search screen</Link>
                <Link to="/customizeCategory">customize category</Link>
                <Link to="/newCategoryitem">New Category Item</Link>

            </Stack>
        </>
    )
}