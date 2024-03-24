import React from "react";
import { Button } from "@mui/material";

const tradeList = {
    "H1" : {
      name:'h1',
    },
    "H2": {
      name:'h2',
    },
    "H3": {
      name: 'h3'
    },
    "H4": {
      name: 'h4'
    },
    "H5": {
      name: 'h5'
    },
    "H6": {
      name: 'h6'
    },
    "H7": {
      name: 'h7'
    },
    "H8": {
      name: 'h8'
    },
    "H9": {
      name: 'h9'
    },
    
  }
interface popOverProps {
  callback: () => any
}
const PopoverComponent: React.FC<popOverProps>=({callback}) => {
  return(
    <>
    <Button onClick={callback}>Test 1</Button>
    <Button>Test 2</Button>
  </>
  )
}
;

export default PopoverComponent;