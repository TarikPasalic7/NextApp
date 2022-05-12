import React from 'react'
import styles from '../styles/Home.module.css'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
export default function Main() {
  return (
    <main className={styles.main}>
      
     <Section1/>
     <Section2/>
     <Section3/>

  </main>
  )
}
