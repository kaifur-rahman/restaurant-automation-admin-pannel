import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { DataGrid } from '@mui/x-data-grid';

//custom functions to export id of which row was clicked
import * as func from "./to-get-send-id.jsx"


export default function DataTable(props) {
  {/*for setting rows per page*/}
  const [pageSize, setPageSize] = React.useState(props.rowsPerPage);
  const [idSelected, newIdSelected]=React.useState(null);
  func.getId(idSelected);
  const customHeight=props.height;
  return (
    <Box style={{ height:customHeight, width: '100%',}}>
      <DataGrid
        rows={props.rows}
        columns={props.columns}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5,10,20,30]}
        onSelectionModelChange={(id) => {
          const selectedIDs =id;
          newIdSelected(selectedIDs[0]);
        }}
      />
  </Box>
  );
}
