import Head from 'next/head'
import Image from 'next/image'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import styles from '../styles/Home.module.css'
import React,{createContext,useState,useEffect} from 'react'
import { CounterContext } from '../Components/CounterContext'
import { SumContext } from '../Components/SumContext'
import Uplata from '../Components/Uplata'


let init;
let sumInit
if (typeof window !== 'undefined') {
  // Perform localStorage action
init=localStorage?.getItem("counter")?localStorage?.getItem("counter"):0
sumInit=localStorage?.getItem("sum")?localStorage?.getItem("sum"):0;

}
  

export default function Uplate() {

  useEffect(() => {
  
  
     
  setCounter(init )
  setSum(sumInit)
   
   
  }, [])
  const [counter, setCounter] = useState("");
  const [sum, setSum] = useState("")
  return (
    <CounterContext.Provider value={[counter,setCounter]}>
        <SumContext.Provider value={[sum,setSum]}>
    <div className={styles.container}>
    <Header/>
    <Uplata/>
    <Footer/>
    </div></SumContext.Provider>
    </CounterContext.Provider>
  )
}
