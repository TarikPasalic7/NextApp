import React ,{ useState,useEffect } from "react";


 
export default function useLocalStorage(key,initialValue){
const [value,setValue]=useState(()=>{
    return returnValue;
})



useEffect(() => {
localStorage.setItem(key,JSON.stringify(value))

  
}, [value])
useEffect(() => {
    function getSavedValue(key,initialValue){
   
        // Perform localStorage action
        const savedValue= JSON.parse(localStorage.getItem(key))
    if(savedValue) return savedValue
    if(initialValue instanceof Function) return initialValue()
    return initialValue;
       
      
    
    }
    returnValue=getSavedValue(key,initialValue)
      console.log(returnValue)
    }, [])

return [value,setValue]



}