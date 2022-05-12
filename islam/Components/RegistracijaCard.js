import React from 'react'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
export default function RegistracijaCard({image,title,text}) {
  return (
    <Card sx={{ maxWidth: 400,height:400}}>
    <CardMedia
      component="img"
      alt={title}
      height="200"
      image={image}
      sx={{objectFit:"contain"}}
    />
<CardContent  sx={{textAlign:"center",color:"#25AAA0"}}>
      <Typography gutterBottom variant="h5" component="div" >
       {title}
      </Typography>
      <Typography variant="body2" color="text.secondary"   sx={{color:"#25AAA0"}}>
     {text}
      </Typography>
      <Button variant="contained" sx={{color:"white",backgroundColor:"#25AAA0",marginTop:4}}>{title}</Button>
    </CardContent>
   
    
  
  </Card>
  )
}
