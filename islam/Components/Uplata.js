import React,{ useContext,useEffect } from 'react'
import {Container,Grid,TextField,Card,CardMedia,Button,Typography} from '@mui/material'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { CounterContext } from './CounterContext';
import { SumContext } from './SumContext';

export default function Uplata() {
    const [counter,setCounter]=useContext(CounterContext)
    const [sum,setSum]=useContext(SumContext);
   

    const style = {
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
      };

  return (
      <Container  maxWidth="lg"  display="flex"
      justifyContent="center"
      alignItems="center" sx={{marginTop:25}}>
        <Grid container spacing={2}  >
  <Grid item xs={8} minHeight="500" >
   
  </Grid>
  <Grid item xs={4} minHeight="500" textAlign="center">
  <Typography variant="h4" component="h2">
  Vaša uplata
</Typography>
  <List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem button>
        <ListItemText primary="Ukupno:"/>
        {counter}
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText primary="Ukupan iznos:" />
        {sum}
      </ListItem>
    
    </List>
 
    <TextField
          id="standard-multiline-static"
         
          multiline
          rows={4}
          defaultValue="Komentar"
          variant="standard"
          sx={{paddingY:5}}
        />

<Card >
      <CardMedia
        component="img"
        alt=""
       
        image="https://uplata.islamskazajednica.ba/_next/image?url=%2Fimages%2Fcards.png&w=640&q=75"
      />
      </Card>
      <Button variant="contained" sx={{color:"white",backgroundColor:"#25AAA0",marginTop:4}}>Prijavi se</Button>
  </Grid>
 
</Grid>
      </Container>
  
  )
}
