import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid'

import Button from '@mui/material/Button';



function Section1() {
  return (
    <>
       <CssBaseline />
      <Container maxWidth={false} sx={{minHeight:750,backgroundImage:"  url('https://uplata.islamskazajednica.ba/images/homepage-background.jpg')  ",backgroundSize:"cover",marginTop:8}}  >
      <Container maxWidth="sm">

      <Box
      
      display="flex"
      justifyContent="center"
      alignItems="center"
       marginTop={40}
      fontSize={40}
      color="white"
    >
     
          ELEKTRONSKI KANAL UPLATE
         
      
    </Box>
    <Box
      
      display="flex"
      justifyContent="center"
      alignItems="center"
       
      fontSize={25}
      color="white"
    >
     
     ZEKATA, SADEKATU-L-FITRA I KURBANA
         
      
    </Box>
    <Box
      
      display="flex"
      justifyContent="center"
      alignItems="center"
       marginTop={4}
      fontSize={25}
      color="white"
    >
     
     <Button  variant="contained" sx={{backgroundColor:"#25AAA0"}} size="large">REGISTRUJ SE</Button>
         
      
    </Box>
   
  
      </Container>
      </Container>
    </>
  )
}

export default Section1