// src/App.js
import React from 'react';
import Navbar from './Navbar';
import { Box, Typography } from '@mui/material';
import InfoCard from './InfoCard.js';
import viva from './viva.png';
import logo from './logo.png';
function App() {


  return (
    <div>
   <Navbar />
      <Box
          component="img"
          sx={{
            width: '100%',
            height:'500px',
            display: 'block'
          }}
          alt="Landing"
          src={viva}
        />
        <Box sx={{ textAlign: 'center', padding: 2 }}>
        <Typography
  variant="h2"
  sx={{
   
     fontFamily: 'ROBOTO'
  }}
>
      WLECOME TO VIVA
      </Typography>
      <Typography
  variant="h5"
  sx={{
     fontFamily: 'Archivo'
  }}
>
Welcome to a world of limitless possibilities, 
where the journey is <br />as exhilarating as the destination, 
and where every moment<br /> is an opportunity to make your mark on the canvas of existence.<br />
 The only limit is the extent of your imagination.
      </Typography>
      </Box>
      <InfoCard />
      <Box
      sx={{
        display: 'flex',
        justifyContent: 'center', // Center horizontally
        alignItems: 'center',     // Center vertically
      }}
    >
      <Box
        component="img"
        sx={{
          height: '100px',         // Fixed height
          width: 'auto',           // Maintain aspect ratio
          display: 'block',        // Ensure the image is treated as a block element
        }}
        alt="Landing"
        src={logo}
      />
    </Box>
    </div>
  );
}

export default App;
