import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { Box, AppBar, Toolbar, Typography, Container } from "@mui/material";
import { useState, useEffect } from "react";

const cw = 100;
const tt = new Date().toLocaleString().replace(",", "");
const columns = [
  { field: "id", headerName: "ID", width: 40 },
  { field: "customerFirstName", headerName: "First name", width: 90 },
  { field: "customerLastName", headerName: "Last name", width: 90 },
  {
    field: "phone",
    headerName: "Phone Number",
    // type: 'number',
    width: 120,
  },
  {
    field: "customerNextCallDateTime",
    headerName: "Next Date",
    type: "date",
    width: 110,
  },
  {
    field: "customerModifyDateTime",
    headerName: "last updated",
    type: "datetime",
    width: cw,
  },
  { field: "customerAddress1", headerName: "Address 1", width: 120 },
  { field: "customerAddress2", headerName: "Address 2", width: cw },
  { field: "id", headerName: "Customer group", width: 120 },
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
      return <Button onClick={onClick}>delete</Button>;
    },
    width: 90,
  },
];

export default function CustomerSearchTable(props) {
  const formData = props.formData;
  console.log(formData[0].phoneNumber, "ttttttt");
  const rows = [
    {
      id: 1,
      customerLastName: "Snow",
      customerFirstName: "Jon",
      phone: 3276784,
      customerNextCallDateTime: tt,
      lastup: tt,
      customerAddress1: "werr2323f",
      customerAddress2: "fw2efwefwe",
      id: "sa",
      prjgrp: "project 99",
    },
    {
      id: 2,
      customerLastName: "user",
      customerFirstName: "kana",
      phone: 6776784,
      customerNextCallDateTime: tt,
      lastup: tt,
      customerAddress1: "test address here",
      customerAddress2: "address 2",
      id: "spa",
      prjgrp: "project 100",
    },
    {
      id: 3,
      customerLastName: "test2",
      customerFirstName: "kana",
      phone: 6776784,
      customerNextCallDateTime: tt,
      lastup: tt,
      customerAddress1: "test address here",
      customerAddress2: "addrress 2",
      id: "spa",
      prjgrp: "project 100",
    },
    {
      id: 4,
      customerLastName: "test2",
      customerFirstName: "kana",
      phone: 6776784,
      customerNextCallDateTime: tt,
      lastup: tt,
      customerAddress1: "test address here",
      customerAddress2: "addrress 2",
      id: "spa",
      prjgrp: "project 100",
    },
    {
      id: 200,
      customerLastName: "test2",
      customerFirstName: "kana",
      phone: 6776784,
      customerNextCallDateTime: tt,
      lastup: tt,
      customerAddress1: "test address here",
      customerAddress2: "addrress 2",
      id: "spa",
      prjgrp: "project 100",
    },
    {
      id: 201,
      customerLastName: "test2",
      customerFirstName: "kana",
      phone: 6776784,
      customerNextCallDateTime: tt,
      lastup: tt,
      customerAddress1: "test address here",
      customerAddress2: "addrress 2",
      id: "spa",
      prjgrp: "project 100",
    },
    {
      id: 202,
      customerLastName: "test2",

      phone: 6776784,
      customerNextCallDateTime: tt,
      lastup: tt,
      customerAddress1: "test address here",
      customerAddress2: "addrress 2",
      id: "spa",
      prjgrp: "project 100",
      customerFirstName: "testt",
    },
  ];
  return (
    <>
      <div style={{ height: 500, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={20}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </>
  );
}
