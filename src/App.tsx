import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Rnd } from 'react-rnd';
import axios from 'axios';
import { AgGridReact } from 'ag-grid-react';
import { ColDef, IDateFilterParams } from 'ag-grid-community';
import '@ag-grid-community/styles/ag-grid.css';
import '@ag-grid-community/styles/ag-theme-balham.css';
import moment from 'moment';
// interface Product {
//   title: string;
//   description: string;
//   price: number;
//   stock: number;
// }
function App() {
  const [rowData, setRowData] = useState([
    { id:1,date: 1718030460631},
    { id:2,date: 1718030460631 },
    { id:3,date: 1718030475718 },
    { id:4,date: 1718030475718 },
    { id:5,date: 1719030486668 },
    { id:6,date: 1720030486668 },
    { id:7,date: 1618030486668 },
    { id:8,date: 1258030486668 },
    // {id:1,asd:"2020-10-25T04:34:21Z"},
    //   {id:2,asd:"2020-04-23T20:21:55Z"},
    //   {id:3,asd:"2020-05-01T16:16:38Z"},
    //   {id:4,asd:"2020-11-24T22:10:03Z"},
    //   {id:5,asd:"2020-08-10T13:52:03Z"},
    //   {id:6,asd:"2020-10-18T18:49:19Z"},
    //   {id:7,asd:"2020-11-30T00:51:26Z"},
    //   {id:8,asd:"2020-03-28T13:30:51Z"},
    //   {id:9,asd:"2020-12-18T12:39:26Z"},
    //   {id:10,asd:"2020-03-13T18:39:02Z"},
    //   {id:11,asd:"2021-02-13T15:03:47Z"},
    //   {id:12,asd:"2020-03-11T14:03:56Z"},
    //   {id:13,asd:"2021-01-14T06:38:59Z"},
    //   {id:14,asd:"2020-08-17T06:50:21Z"},
    //   {id:15,asd:"2020-04-03T18:34:12Z"},
    //   {id:16,asd:"2020-08-08T19:21:06Z"},
    //   {id:17,asd:"2020-10-25T18:24:39Z"},
    //   {id:18,asd:"2020-03-12T14:45:03Z"},
    //   {id:19,asd:"2021-01-11T12:45:54Z"},
    //   {id:20,asd:"2020-03-22T09:37:58Z"}

  ]);
  useEffect(() => {
    // axios.get('https://dummyjson.com/products').then((response) => {
    //   const products = response.data.products;
    //   setRowData(products);
    // });
    // setRowData(
    //   {date: '11 Jun 2024 11:55:23'}
    // )
  }, []);
  const getValue=(params: any) => {
 
    return moment(params).format("DD/MM/YYYY").toString()


  }

  var filterParams: IDateFilterParams = {
    comparator: (filterLocalDateAtMidnight: Date, cellValue: string) => {
      var dateAsString = getValue(cellValue);
      if (dateAsString == null) return -1;
      var dateParts = dateAsString.split("/");
      var cellDate = new Date(
        Number(dateParts[2]),
        Number(dateParts[1]) - 1,
        Number(dateParts[0]),
      );
      if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
        return 0;
      }
      if (cellDate < filterLocalDateAtMidnight) {
        return -1;
      }
      if (cellDate > filterLocalDateAtMidnight) {
        return 1;
      }
      return 0;
    },

    inRangeFloatingFilterDateFormat: "Do MMM YYYY",
  };
  const columnDefs: ColDef[] = [
    { headerName: 'Date', field: 'date', filter: 'agDateColumnFilter',  

    filterParams: filterParams,
    
    valueFormatter:(params: any) => getValue(params.value),
    
    // filterParams:{
    //   browserDatePicker: true,
    //   valueFormatter:(params: any) => getValue(params.value)
    // },


    

  },


    // }, valueGetter:(params: any) => getValue(params.data.date),  filterValueGetter:(params: any)=>getValue(params.data.date)},
    { headerName: 'sdf', field: 'id', },
    // { headerName: 'Description', field: 'description', sortable: true, filter: true },
    // { headerName: 'Price', field: 'price', sortable: true, filter: true },
    // { headerName: 'Stock', field: 'stock', sortable: true, filter: true },
  ];
  // Pagination options
  const paginationPageSize = 10; // Number of rows per page
  const defaultColDef = {
    sortable: true,
    filter: true,
  };

  return (

    <div style={{ width: '500px', height: '500px' }}>
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
    </div>
  );
}

export default App;
