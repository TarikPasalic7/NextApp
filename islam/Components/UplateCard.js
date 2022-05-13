import React,{useState,useContext,useEffect} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import IndeterminateCheckBoxOutlinedIcon from '@mui/icons-material/IndeterminateCheckBoxOutlined';
import { CounterContext } from './CounterContext';
import { SumContext } from './SumContext';
import useLocalStorage from '../CustomHooks/useLocalStorage';




export default function UplateCard({data}) {
 
  const keyName=data.name
  const keyNameBoolean=data.name+"bool";
  
  const [price, setPrice] = useLocalStorage(keyName)
  const [counter, setCounter] = useContext(CounterContext);
  const [sum,setSum]=useContext(SumContext);
  const [first, setfirst] = useLocalStorage(keyNameBoolean)
  const [kurbanCounter,setKurbanCounter]=useLocalStorage("kurbanCounter");
  const [oldPrice, setoldPrice] = useLocalStorage("oldPrice");
  
 
  
  useEffect(() => {
   setfirst(first?first:false)
 setPrice(price?price:0)
 setKurbanCounter(kurbanCounter?kurbanCounter:0)
 setoldPrice(oldPrice?oldPrice:0)
   
  }, [])
  

  

  const setPriceOnChange=(e)=>{
    
      setPrice(e.target.value)
     
  }

  const onClickEvent=()=>{
     
    
    setSum(Number(sum)-oldPrice + Number(price));
    setoldPrice(Number(price))
   
    if(!first)
    {
      setCounter(++counter)
      setfirst(true)
    }

}
const Add=()=>{
 setKurbanCounter(++kurbanCounter)
 setSum(sum+data.price)
 setCounter(++counter)
 setfirst(true);
 

}
const Remove=()=>{
  setKurbanCounter(--kurbanCounter)
  setSum(sum-data.price)
 setCounter(--counter)
 setfirst(true);

}

  return (
    <Card sx={{ maxWidth: 400,height:500 }}>
      <CardMedia
        component="img"
        alt={data.name}
        height="185"
        image={data.image}
      />
      <CardContent sx={{height:220}}>
        <Typography gutterBottom variant="h5" component="div">
         {data.name}
        </Typography>
        <Typography  variant="body2" color="text.secondary">
          {data.text}
        </Typography>
      </CardContent>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '20ch'}
      }}
     
      noValidate
      autoComplete="off"
    >
      
     {data.price? 
     <Stack direction="row" spacing={2}>
      
      
        <Typography variant="h5" >{data.price}</Typography> <IndeterminateCheckBoxOutlinedIcon fontSize="large" onClick={Remove} /> <Typography variant="h5"  >{kurbanCounter?kurbanCounter:0} </Typography> <AddBoxOutlinedIcon onClick={Add} fontSize="large" />
       <Button   sx={{color:"#25AAA0",maxWidth: "80px",
          maxHeight: "42px",
          minWidth: "80px",
          minHeight: "42px"}} variant="outlined" color='success' onClick={onClickEvent} >UPLATI</Button></Stack>:<><TextField id="outlined-basic" data-testid="textField" onChange={setPriceOnChange}  variant="outlined" value={price} size="small"/> <Button onClick={onClickEvent}  sx={{color:"#25AAA0",maxWidth: "80px",
          maxHeight: "42px",
          minWidth: "80px",
          minHeight: "42px"}} variant="outlined" color='success'>UPLATI</Button></>}
  
  </Box>
    </Card>
    
  )
}
