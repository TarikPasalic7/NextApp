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
 
  const [price, setPrice] = useState(0)
  const [counter, setCounter] = useContext(CounterContext);
  const [sum,setSum]=useContext(SumContext);
  const [first, setfirst] = useState(false)
  const [kurbanCounter,setKurbanCounter]=useState(0);
  const [oldPrice, setoldPrice] = useState(0)
  
 
  const keyName=data.name+"bool"
  useEffect(() => {
   setfirst(JSON.parse(localStorage.getItem(keyName))?JSON.parse(localStorage.getItem(keyName)):false)
   
  }, [])
  
  useEffect(() => {
    
    setPrice(localStorage.getItem(data.name) ) 
   setKurbanCounter(JSON.parse(localStorage.getItem(data.name)))
 
   
  }, [counter])

  

  const setPriceOnChange=(e)=>{
    
      setPrice(e.target.value)
     
  }

  const onClickEvent=()=>{
  
    let key=data.name
    key=="Kurban"?JSON.stringify(localStorage.setItem(key,kurbanCounter)):localStorage.setItem(key,price)
    JSON.stringify(localStorage.setItem(keyName,first))
    ;
    
    setSum(Number(sum)-oldPrice + Number(price));
    setoldPrice(Number(price))
   
    if(!first)
    {
      if(key=="Kurban")
      {
        setSum(Number(sum)+(Number(data.price)*kurbanCounter));
        setCounter(Number(counter) + Number(kurbanCounter))
      }
      else{
       
      setCounter(++counter)
      }
     
      setfirst(true)
    }

}
const Add=()=>{
 setKurbanCounter(++kurbanCounter)
 
 

}
const Remove=()=>{
  setKurbanCounter(--kurbanCounter)
  

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
          minHeight: "42px"}} variant="outlined" color='success' onClick={onClickEvent} >UPLATI</Button></Stack>:<><TextField id="outlined-basic"  onChange={setPriceOnChange}  variant="outlined" value={price} size="small"/> <Button onClick={onClickEvent}  sx={{color:"#25AAA0",maxWidth: "80px",
          maxHeight: "42px",
          minWidth: "80px",
          minHeight: "42px"}} variant="outlined" color='success'>UPLATI</Button></>}
  
  </Box>
    </Card>
    
  )
}
