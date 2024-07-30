import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import circle from './circle-v-red.png';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"sx={{ backgroundColor: 'white',height:'70px' }}>
        <Toolbar>  
       
          <img src={circle} alt="Logo" style={{ height: '80px' }} />
        
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color:'black' }}>
            Viva Culture Center
          </Typography>
          <Button sx={{color:'black'}} >CONTACT</Button>
          <Button sx={{color:'black'}}>ABOUT US</Button>
          <Button sx={{color:'black'}}>BLOG</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
