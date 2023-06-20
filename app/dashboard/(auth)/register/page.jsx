'use client'

import React, { useState } from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Register = () => {
    const [err,setErr] = useState(false);

    const router = useRouter()
    
    const handleSubmit = async (e) =>{
      e.preventDefault()

      const name = e.target[0].value  //instead of usestate here using form (username - 0)
      const name = e.target[1].value  //instead of usestate here using form (1 -email)
      const name = e.target[2].value  //instead of usestate here using form   (2-password)

      try{
        const res = await fetch("/api/auth/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                name,email,password,
            })
        });

        res.status === 201 && router.push("/dashboard/login?success=account cretaed")

      }catch(err){
        setErr(true);
      }
    }

  return (
    <div className={styles.container} onSubmit={handleSubmit}>
        <form className={styles.form}>
            <input type="text" placeholder='username' className={styles.input} required />
            <input type="email" placeholder='email' className={styles.input} required />
            <input type="password" placeholder='password' className={styles.input} required />

            <button className={styles.button}>Register</button>
        </form>
        {err && "something went wrong"}
        <Link href='/dashboard/login'>Login with existing account</Link>
    </div>
  )
}

export default Register