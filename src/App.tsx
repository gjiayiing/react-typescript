import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Draggable from 'react-draggable';
import { AppBar, Button, Typography } from '@mui/material';
import Panel from './components/Panel';

function App() {
  const [state, setState] = useState(false)
  function renderPanel() {
    setState(true)
  }
  return (
    <>
      <AppBar position='static'>
        <Typography variant="h6" color="inherit" component="div">
          Photos
        </Typography>
      </AppBar>
      <body style={{height:'100vh', width:'100vw'}}>
        <Button
          onClick={renderPanel}
        >
          Click H1
        </Button>
        {state ? <Panel /> : null}
      </body>
    </>
  );
}

export default App;
