import Draggable from "react-draggable"
import React, { useEffect, useState } from 'react';
import { Box, CardHeader, CircularProgress } from "@mui/material";
import './Panel.css'
import { Rnd } from "react-rnd";
const { ResizableBox } = require('react-resizable');

interface PanelProps {

}

const Panel: React.FC = () => {
  //312 and 256
  function viewHeight(pixels: number) {
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    console.log(h, 'innerheight')
    return ((pixels + 42) / h) * 100;
  }
  function viewWidth(pixels: number) {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    console.log(w, 'innerwidth')
    return (pixels / w) * 100;
  }
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  console.log(viewWidth)
  return (
    <>
      <Rnd
        lockAspectRatio={1.25}
        lockAspectRatioExtraHeight={42}
        bounds={'window'}
        default={{
          x: 0,
          y: 0,
          width: `${viewWidth(320)}vw`,
          height: `${viewHeight(256)}vh`,
        }}
        style={{ border: '1px solid black' }}
        // defaultSize={{ width: '50vw', height: '50vw' }}

        dragHandleClassName={'yeet'}
      >
        <Box style={{ display: 'flex', height: 'inherit', width: 'inherit', flexDirection: 'column' }}>
          <CardHeader className={"yeet"} style={{ height: '42px', padding: '0px', display:'block'}}
            title="VIDEOFEED"
          />
          <Box style={{ display: 'flex', height: 'calc(100% - 42px)', width: 'inherit', flexDirection: 'column',justifyContent: 'center', alignItems:'center', backgroundColor: 'green' }}>
            <Box>
            {/* <CircularProgress /> */}
            <video
            height="100%"
            width="100%"
              controls
              src='./keshi.mp4'
            ></video>
            </Box>
          </Box>
        </Box>

      </Rnd>
    </>
  )
}

export default Panel