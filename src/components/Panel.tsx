import Draggable from "react-draggable"
import React, { useState } from 'react';
import { CardHeader } from "@mui/material";

import { Rnd } from "react-rnd";

interface PanelProps {

}
const Panel: React.FC = () => {
  const arr = new Array(10).fill('boop')
  return (
    <>
      {
        arr.map((item) => {
          return (
            <Rnd
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', zIndex: 10 }}
              default={{
                x: 100,
                y: 100,
                width: 200,
                height: 200,
              }}
            >
              Rnd Panel
            </Rnd>
          )
        })
      }
    </>
  )
}

export default Panel