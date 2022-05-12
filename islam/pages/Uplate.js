import Head from 'next/head'
import Image from 'next/image'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import styles from '../styles/Home.module.css'
import React,{createContext,useState,useEffect} from 'react'
import { CounterContext } from '../Components/CounterContext'
import { SumContext } from '../Components/SumContext'
import Uplata from '../Components/Uplata'
import useLocalStorage from '../CustomHooks/useLocalStorage'




export default function Uplate() {

  useEffect(() => {
  
  
     
    setCounter(counterLocal?counterLocal:0)
    setSum(sumLocal?sumLocal:0)
   
   
  }, [])
  const [counterLocal,setCounterLocal]=useLocalStorage("counter")
  const [sumLocal,setSumLocal]=useLocalStorage("sum")
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
