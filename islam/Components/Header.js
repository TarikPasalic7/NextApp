import React,{useContext,useEffect} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { CounterContext } from './CounterContext';
import { SumContext } from './SumContext';
import useLocalStorage from '../CustomHooks/useLocalStorage';
import Link from 'next/link';


export default function Header() {
   
    const [counter,setCounter]=useContext(CounterContext)
    const [sum,setSum]=useContext(SumContext)
    
    
     //const [counterLocal,setCounterLocal]=useLocalStorage("counter")

    useEffect(() => {
      
     JSON.stringify(localStorage.setItem("counter",counter)) 
     
    }, [counter])
    useEffect(() => {
      
      localStorage.setItem("sum",sum)
      
     }, [sum])
    
    
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="fixed" sx={{backgroundColor:"white"}}>
      <Toolbar >
      
        <Typography variant="h6" component="div" sx={{ flexGrow: 1,color:"black" }}>
          Islamska Zajednica
        </Typography>
     
        <Typography variant="h6"  sx={{ color:"black",marginRight:1 }}>
          {counter}
        </Typography>
<Link href="/Uplate"> 
        <IconButton
          size="large"
          edge="start"
          
          aria-label="menu"
          sx={{ mr: 1 ,color:"black"}}
        >
           
          <AddShoppingCartIcon/>
        </IconButton></Link>
        <IconButton
          size="large"
          edge="start"
        
          aria-label="menu"
          sx={{ mr: 2 ,color:"black"}}
        >
           
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  </Box>
  )
}
