import Draggable from "react-draggable"
import React, { useState } from 'react';
import { CardHeader } from "@mui/material";
import './Panel.css'
const { ResizableBox } = require('react-resizable');

interface PanelProps {

}
const Panel: React.FC = () => {
  const [x, setX] = React.useState(640);
  const [y, setY] = React.useState(576);
  function resizePanel(e: any, {size} : any) {
    const aspectRatio = size.width / size.height;
    const headerHeight = 64

    const newWidth = Math.round(aspectRatio * (size.height - headerHeight)) + headerHeight;
    setX(newWidth)
    setY(size.height - headerHeight)
  }
  return (
    <>
      <Draggable
      >
        <ResizableBox style={{ border: '1px solid black' }}
          height={y}
          width={x}
          onResize={resizePanel}
          handle={<span className="custom-handle custom-handle-se" />}
        >
          <div>
            <CardHeader
              title="VIDEOFEED"
            />
            <div style={{ backgroundColor: 'green' }}>
              <video
              controls
                src='./keshi.mp4'
              ></video>
            </div>

          </div>

        </ResizableBox>
      </Draggable>
    </>
  )
}

export default Panel