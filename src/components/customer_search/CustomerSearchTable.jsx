import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { Box, AppBar, Toolbar, Typography, Container } from "@mui/material";
import { useState, useEffect } from "react";

const cw = 100;
const tt = new Date().toLocaleString().replace(",", "");
const columns = [
  { field: "id", headerName: "ID", width: 40 },
  { field: "firstName", headerName: "First name", width: 90 },
  { field: "lastName", headerName: "Last name", width: 90 },
  {
    field: "phone",
    headerName: "Phone Number",
    // type: 'number',
    width: 120,
  },
  {
    field: "nextdate",
    headerName: "Next Date",
    type: "date",
    width: 110,
  },
  {
    field: "lastup",
    headerName: "last updated",
    type: "datetime",
    width: cw,
  },
  { field: "adrress1", headerName: "Address 1", width: 120 },
  { field: "adrress2", headerName: "Address 2", width: cw },
  { field: "custgrp", headerName: "Customer group", width: 120 },
  { field: "prjgrp", headerName: "project group", width: cw },
  {
    field: "edit",
    headerName: "Edit / Details",
    sortable: false,
    renderCell: (params) => {
      const onClick = (e) => {
        e.stopPropagation(); // don't select this row after clicking
      };
      return <Button onClick={onClick}>edit</Button>;
    },
  },
  {
    field: "delete",
    headerName: "Delete",
    sortable: false,
    renderCell: (params) => {
      const onClick = (e) => {
        e.stopPropagation(); // don't select this row after clicking
      };
      return <Button onClick={onClick} >delete</Button>;
    },
    width:90,
  },
];

export default function CustomerSearchTable(props) {
  const formData = props.formData;
  console.log(formData[0].phoneNumber, "ttttttt");
  const rows = [
    {
      id: 1,
      lastName: "Snow",
      firstName: "Jon",
      phone: 3276784,
      nextdate: tt,
      lastup: tt,
      adrress1: "werr2323f",
      adrress2: "fw2efwefwe",
      custgrp: "sa",
      prjgrp: "project 99",
    },
    {
      id: 2,
      lastName: "user",
      firstName: "kana",
      phone: 6776784,
      nextdate: tt,
      lastup: tt,
      adrress1: "test address here",
      adrress2: "address 2",
      custgrp: "spa",
      prjgrp: "project 100",
    },
    {
        id: 3,
        lastName: "test2",
        firstName: "kana",
        phone: 6776784,
        nextdate: tt,
        lastup: tt,
        adrress1: "test address here",
        adrress2: "addrress 2",
        custgrp: "spa",
        prjgrp: "project 100",
      },
      {
        id: 4,
        lastName: "test2",
        firstName: "kana",
        phone: 6776784,
        nextdate: tt,
        lastup: tt,
        adrress1: "test address here",
        adrress2: "addrress 2",
        custgrp: "spa",
        prjgrp: "project 100",
      },
      {
        id: 200,
        lastName: "test2",
        firstName: "kana",
        phone: 6776784,
        nextdate: tt,
        lastup: tt,
        adrress1: "test address here",
        adrress2: "addrress 2",
        custgrp: "spa",
        prjgrp: "project 100",
      },
  ];
  return (
    <div style={{ height: 400, width: "100%" }}>
      <div>{formData[0].phoneNumber}</div>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
