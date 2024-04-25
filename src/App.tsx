import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Draggable from 'react-draggable';
import { AppBar, Button, Typography } from '@mui/material';
import Panel from './components/Panel';

function App() {
  const [state, setState] = useState(false)
  const test = [
    {
      name: 'archie',
      color: 'purple'
    },
    {
      name: 'bob',
      color: 'green'
    },
    {
      name: 'clarinda',
      color: 'blue'
    }
  ]
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
      <Button
        onClick={renderPanel}
      >
        Click it
      </Button>
      {state ?
        Object.values(test).map((item) => {
          return (
            <Panel
              key={item.name}
              name={item.name}
              color={item.color}
              defaultPosition={{ x: 100, y: 100 }}
              defaultSize={{ width: 500, height: 500 }}

            />)
        })

        : null}

    </>
  );
}

export default App;
