import React,{useEffect,useState} from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import  Box  from '@mui/material/Box';
import  Grid  from '@mui/material/Grid';
import UplateCard from './UplateCard';
import axios from 'axios';
import { minHeight } from '@mui/system';

function Section3() {
const [data, setData] = useState([])
const callDataAsync= async ()=>{
      
    const tempData= await axios.get("http://localhost:3000/api/uplate");
    setData(tempData.data)
}

useEffect(() => {
  
   
callDataAsync();
 
}, [])


  return (
    <>
    
    <CssBaseline />
   <Container maxWidth={false} sx={{minHeight:500}}  >
   <Container   >
   <Box
      
      display="flex"
      justifyContent="center"
      alignItems="center"
       marginTop={10}
      fontSize={50}
      color="#25AAA0"
      paddingBottom={2}
      
    >
     
     VRSTE UPLATE
         
      
    </Box>
    <Box
      
      display="flex"
      justifyContent="center"
      alignItems="center"
       
      fontSize={25}
      color="#25AAA0"
      paddingBottom={10}
    >
     
     Ponuđene vrste uplate koje možete obaviti putem ovog portala su kratko opisane ispod.
         
      
    </Box>

    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ sm: 8, md: 12 }}>
  {data.map((uplate, index) => (
    <Grid item xs={2}  md={4} key={index}>
     <UplateCard  data={uplate}/>
    </Grid>
  ))}
</Grid>

   </Container>
   </Container>
 </>
  )
}

export default Section3