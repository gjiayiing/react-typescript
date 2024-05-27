import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Rnd } from 'react-rnd';
import axios from 'axios';
import { AgGridReact } from 'ag-grid-react';
import { ColDef } from 'ag-grid-community';
import '@ag-grid-community/styles/ag-grid.css';
import '@ag-grid-community/styles/ag-theme-balham.css';
// interface Product {
//   title: string;
//   description: string;
//   price: number;
//   stock: number;
// }
function App() {
  const [rowData, setRowData] = useState([]);
  useEffect(() => {
    axios.get('https://dummyjson.com/products').then((response) => {
      const products = response.data.products;
      setRowData(products);
    });
  }, []);

  const columnDefs: ColDef[] = [
    { headerName: 'Title', field: 'title', sortable: true, filter: true },
    { headerName: 'Description', field: 'description', sortable: true, filter: true },
    { headerName: 'Price', field: 'price', sortable: true, filter: true },
    { headerName: 'Stock', field: 'stock', sortable: true, filter: true },
  ];
  // Pagination options
  const paginationPageSize = 10; // Number of rows per page
  const defaultColDef = {
    sortable: true,
    filter: true,
  };
  const [state, setState] = useState({
    width: 500,
    height: 800,
    x: 0,
    y: 0
  })
  return (

    <Rnd
      style={{ border: '1px solid black' }}
      size={{
        width: state.width,
        height: state.height
      }}
      position={{
        x: state.x,
        y: state.y,
      }}
      onDragStop={(e, d) => { setState({ ...state, x: d.x, y: d.y }) }}
      onResize={(e, direction, ref, delta, position) => {
        setState({
          width: ref.offsetWidth,
          height: ref.offsetHeight,
          ...position,
        });
      }}
    >
      <div style={{ height: "100%", width: "100%" }}
        className="ag-theme-balham">
        <AgGridReact
          rowSelection="multiple"
          columnDefs={columnDefs}
          rowData={rowData}
          pagination={true}
          paginationAutoPageSize
          // paginationPageSize={paginationPageSize}
          // domLayout='autoHeight'
          defaultColDef={defaultColDef}
        />
      </div>
    </Rnd>
  );
}

export default App;
