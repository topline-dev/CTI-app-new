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
                <Link to="/customer">customer search screen</Link>
                {/* <Link to="/customizeCategory">customize category</Link>
                <Link to="/newCategoryitem">New Category Item</Link>
                <Link to="/customerDistribution">customer distribution</Link>
                <Link to="/customerEdit">customer Edit</Link> */}
                <Link to="/customer/3">customer details</Link>
                <Link to="/testPage">Test Page</Link>
            </Stack>
        </>
    )
}
