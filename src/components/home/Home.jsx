import { Stack } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import ButtonAppBar from '../customerRelated/Appbar';

export default function Home() {
    return (
        <>
            <ButtonAppBar />
            <h1>Home</h1>
            <Stack>
                <Link to="/new">new customer screen</Link>
                <Link to="/customerSearch">customer search screen</Link>
                <Link to="/customizeCategory">customize category</Link>
                <Link to="/newCategoryitem">New Category Item</Link>
                <Link to="/customerDistribution">customer distribution</Link>
                <Link to="/customerEdit">customer Edit</Link>
                <Link to="/customerDetails">customer details</Link>
                <Link to="/customerEdit">customer Edit</Link>
                {/* <Link to="/newUser">New User</Link> */}
                {/* <Link to="/userDetail">User Detail</Link>
                <Link to="/userEdit">User Edit</Link> */}
                <Link to="/userSearch">User Search</Link>
                <Link to="/newCustomerGroup">New Customer Group</Link>
                <Link to="/customerGroupTable">Customer Group Table</Link>
                <Link to="/newCustomerProject">New Customer Project</Link>
                <Link to="/testPage" state={{ from: "occupation" }}>Test Page</Link>
                <Link to="/">Login Page</Link>
            </Stack>
        </>
    )
}
