import { PowerSettingsNew } from '@mui/icons-material';
import './App.css';
import { Box, Button, CircularProgress } from '@mui/material';
import { ResizableBox } from 'react-resizable';
import { useState, useEffect } from 'react';
function App() {
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
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  })
  //window.innerheight
  return (

          <ResizableBox className="box hover-handles" width={640} height={512} minConstraints={[150, 150]}
    style={{border:'1px solid black'}}
    >
        {isLoading? <CircularProgress/> :
        <video src='keshi.mp4' autoplay controls style={{height:'inherit' ,width:"inherit" ,aspectRatio:'640/512' }} type='video/mp4' />
        } 
    </ResizableBox>


  );
}

export default App;
