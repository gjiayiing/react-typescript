import Draggable from "react-draggable"
import React, { useEffect, useState } from 'react';
import { Box, Button, Card, CardContent, CardHeader, CircularProgress } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import './Panel.css'
import { Rnd } from "react-rnd";
const { ResizableBox } = require('react-resizable');

interface PanelProps {
  name: string,
  color: string,
  defaultPosition: any,
  defaultSize: any,
}

const Panel: React.FC<PanelProps> = ({ name, color, defaultPosition, defaultSize }) => {
  //312 and 256
  const [state, setState] = useState({
    x: defaultPosition.x,
    y: defaultPosition.x,
    width: defaultSize.width,
    height: defaultSize.height,
  })
  const [originalHeight, setOriginalHeight] = useState({
    width: defaultSize.width,
    height: defaultSize.height,
  })
  const [isOpen, setIsOpen] = useState(true);
  const handleToggle = (name: string) => {
    const yeet = document.getElementById(name)
    // if (yeet) {
    //   yeet.style.height = '0px'
    // }
    setState({
      ...state,
      height: '0px',
    })
  }
  const handleExpand = (name: string) => {
    console.log('expand')
    const yeet = document.getElementById(name)
    if (yeet) {
      setState({
        ...state,
        height: `${originalHeight.height}px`,
      })
    }
  }
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Rnd
        style={{ border: '1px solid black', backgroundColor: `${color}` }}
        size={{ width: state.width, height: state.height }}
        position={{ x: state.x, y: state.y }}
        onDragStop={(e, d) => { setState({ ...state, x: d.x, y: d.y }) }}
        onResizeStop={(e, direction, ref, delta, position) => {
          setState({
            width: ref.style.width,
            height: ref.style.height,
            ...position,
          });
          setOriginalHeight({
            width: ref.style.width,
            height: ref.style.height,
          });
        }}
      >
        <Card style={{ height: '100%', width: '100%' }}>
          <CardHeader
            style={{ height: '42px', border: '1px solid black' }}
            title={name}
            action={
              <>
                <Button
                  onClick={() => {
                    {state.height === '42px' ? handleExpand(name)  : handleToggle(name)}
                  }}
                >
                  {state.height === '42px' ? <ExpandMoreIcon/>  : <ExpandLessIcon />}
                </Button>
              </>
            }
          />
                <CardContent id={name} style={{ height: 'calc(100%-42px)', backgroundColor: 'black' }}>

                </CardContent>
              </Card>
          </Rnd>
          {/* <Rnd
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
       
            <video
            height="100%"
            width="100%"
              controls
              src='./keshi.mp4'
            ></video>
            </Box>
          </Box>
        </Box>

      </Rnd> */}
        </>
        )
}

        export default Panel