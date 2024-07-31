import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebaseConfig' 
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';


export default function OutlinedCard() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({
    name: false,
    phone: false,
    email: false,
  });
  const [helperTexts, setHelperTexts] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const validateForm = () => {
    let valid = true;
    let errors = { name: false, phone: false, email: false };
    let helperTexts = { name: '', phone: '', email: '' };

    if (!name.trim()) {
      valid = false;
      errors.name = true;
      helperTexts.name = 'Full Name is required';
    }

    if (!phone.trim() || !/^\d+$/.test(phone)) {
      valid = false;
      errors.phone = true;
      helperTexts.phone = 'Phone Number is required and must be numeric';
    }

    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      valid = false;
      errors.email = true;
      helperTexts.email = 'A valid Email is required';
    }

    setErrors(errors);
    setHelperTexts(helperTexts);
    return valid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      try {
        await addDoc(collection(db, 'contacts'), {
          name,
          email,
          phone,
        });
        alert('Data saved successfully!');
        setName('');
        setEmail('');
        setPhone('');
      } catch (error) {
        console.error('Error adding document: ', error);
        alert('Error saving data');
      }
  
      console.log('Form Submitted', { name, phone, email });
    }
  };
  

  return (
    <Box 
      sx={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // Full viewport height
        overflow: 'hidden', // Ensure background image doesn’t overflow
        padding: 2,
      }}
    >

      <Card
        variant="outlined"
        sx={{
          width: '100%',
          maxWidth: '700px',
          padding: 2,
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          position: 'relative',
          zIndex: 1, // Ensure card is above the background image
        }}
      >
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Enter your Information
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              id="full-name"
              label="Full Name"
              variant="outlined"
              margin="dense"
              fullWidth
              value={name}
              onChange={(e)=>setName(e.target.value)}
              error={errors.name}
        helperText={helperTexts.name}
              
            /><br />
            <TextField
              id="phone-number"
              label="Phone Number"
              variant="outlined"
              margin="dense"
              fullWidth
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
              error={errors.phone}
              helperText={helperTexts.phone}
              inputProps={{ inputMode: 'numeric' }}
              
            /><br />
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              margin="dense"
              fullWidth
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              error={errors.email}
        helperText={helperTexts.email}
            />
            <CardActions sx={{ justifyContent: 'flex-end' }}>
              <Button
                type="submit"
                size="large"
                variant="contained"
                sx={{ backgroundColor: 'black' }}
              >
                Submit
              </Button>
            </CardActions>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}
