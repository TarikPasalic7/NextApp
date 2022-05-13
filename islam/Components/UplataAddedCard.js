import React,{ useContext,useEffect } from 'react'
import {TextField,Card,Button,Typography,Stack,CardContent} from '@mui/material'
import Box from '@mui/material/Box';
import useLocalStorage from '../CustomHooks/useLocalStorage';
import { SumContext } from './SumContext';
import { CounterContext } from './CounterContext';

import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import IndeterminateCheckBoxOutlinedIcon from '@mui/icons-material/IndeterminateCheckBoxOutlined';

export default function UplataAddedCard({data}) {
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

       const onChangePrice =(e)=>{
           
        setPrice(e.target.value);
        setSum(Number(sum)-oldPrice + Number(e.target.value));
          setoldPrice(Number(e.target.value))
       
       }
       const Add=()=>{
        setKurbanCounter(++kurbanCounter)
        setSum(sum+data.price)
        setCounter(++counter)
        
       
       }
       const Remove=()=>{
        setKurbanCounter(--kurbanCounter)
        setSum(sum-data.price)
       setCounter(--counter)
      
      }
      const UkloniCard=()=>{
      setfirst(false);
      if(data.price)
      {
          setSum(Number(sum)-(Number(data.price)*kurbanCounter))
          setCounter(counter-kurbanCounter)
          setKurbanCounter(0)
          
      }
      else{
        setSum(Number(sum)-Number(price))
        setCounter(--counter)
        setPrice(0);
      }
      
      }
      

  return (
  
       <>
       {first?
    <Card sx={{ maxWidth:600,height:300,marginTop:5 }}>
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
         <Button   sx={{color:"red",maxWidth: "80px",
            maxHeight: "42px",
            minWidth: "80px",
            minHeight: "42px"}} variant="outlined" color='error' onClick={UkloniCard} >UKLONI</Button></Stack>:<><TextField id="outlined-basic" data-testid="textField" onChange={onChangePrice}  variant="outlined" value={price} size="small"/> <Button onClick={UkloniCard}  sx={{color:"red",maxWidth: "80px",
            maxHeight: "42px",
            minWidth: "80px",
            minHeight: "42px"}} variant="outlined" color='error'>UKLONI</Button></>}
    
    </Box>
      </Card>:null}</>
  )
}
