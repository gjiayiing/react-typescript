import { PowerSettingsNew } from '@mui/icons-material';
import './App.css';
import { Box, Button } from '@mui/material';

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
  return (
    <div style={{maxHeight: '100%', maxWidth:'100%', border: '1px solid black'}}>
      <div>asdasd</div>
      <div style={{ maxHeight: 'inherit', overflow:'scroll'}}>
      <Box sx={{ display:'flex', flexDirection:'row', justifyContent: 'space-between' }}>
    <video controls src='keshi.mp4' type='video/mp4' height='200px' width='200px'>
   
    </video>
        {/* {
          Object.keys(tradeList).map((id) => (
<div>
<div>{tradeList[id].name}</div>
            <div>
              <Button sx={{ 
                width: '35px',
                height: '35px'
               }}>
                <PowerSettingsNew />
               </Button>
               <Button sx={{ 
                width: '35px',
                height: '35px'
               }}>
                <PowerSettingsNew />
               </Button>
            </div>
</div>
          ))
        } */}
        </Box>

        
      </div>

    </div>

  );
}

export default App;
