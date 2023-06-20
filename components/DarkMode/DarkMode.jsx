"use client"
import React from 'react'
import styles from "./DarkMode.module.css"
import { useContext } from 'react'
import { ThemeContext } from '@/context/ThemeContext'
const DarkMode = () => {
  const {toggle, mode} = useContext(ThemeContext); //acessing toogle and mode from themecontext
  return (
    <div className={styles.container} onClick={toggle} > 
        <div className={styles.icon}>🌙</div>
        <div className={styles.icon}>🔆</div>
        <div className={styles.ball} style={mode === "light"? {left:"2px"} : {right:"2px"}} />
    </div>
  )
}

export default DarkMode