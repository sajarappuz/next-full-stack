'use client'
import Image from "next/image"
import styles from "./page.module.css"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import useSWR from 'swr'



const Dashboard = () => {

  //fetching data using useeffect

  // const[data,setData] = useState([]);
  // const[error,setError] = useState(false);
  // const[isLoading,setIsLoading] = useState(false);
  
  // useEffect(()=>{
  //    const getData = async () =>{
  //     setIsLoading(true);
  //       const res = await fetch('https://jsonplaceholder.typicode.com/posts',{
  //          cache: 'no-store' 
  //       });
       
  //       if (!res.ok) {
        
  //         setError(true)
  //       }
       
  //      const data = await res.json()

  //       setData(data);
  //       setIsLoading(false);
      
      
  //    };
  //    getData()
  // },[])


  const session = useSession();

  const router = useRouter();

  //fetching using swr instead of useeffect
  const fetcher = (...args) => fetch(...args).then(res => res.json());
  const { data ,mutate , error, isLoading } = useSWR(`/api/posts?username = ${session?.data?.user.name}`, fetcher);
     
  const handleDelete = async(id)=>{
     try{
       await fetch(`/api/posts/${id}`,{
        method:"DELETE",
       });
       mutate()
     }catch(err){
      console.log(err);
     }
  }
   
  const handleSubmit = async (e)=>{
    e.preventDefault;
   

    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try{
     await fetch("/api/posts",{
      method:"POST",
      body: JSON.stringify({
        title,desc,img,content,username:session.data.user.name,
      }),
     });
     mutate()
     e.target.reset()
    }catch(err){
      console.log(err);
    }

  }

  if(session.status === "loading"){
     return <p>Loading...</p>;
  }
  if(session.status === "unauthenticated"){
     router?.push("/dashboard/login")
  }

  if(session.status === "authenticated"){
    return (
      <div className={styles.container}>
        <div className={styles.posts}>
        
          {isLoading ? "loading" : data?.map(item =>(
          
          <div className={styles.post} key={item._id}>
        <div className={styles.imgContainer}>
          <Image src={item.img} alt="" fill={true} className={styles.img}/>
        </div>
        <h2 className={styles.postcontainer}>
                  {item.title}
        </h2>
        <span className={styles.delete} onClick={()=>handleDelete(item._id)}>X</span>
        </div>))}
        </div>
        
        <form className={styles.new} onSubmit={handleSubmit}>
           <h1>Add New Post</h1>
           <input type="text" placeholder="Title" className={styles.input} />
           <input type="text" placeholder="Desc" className={styles.input} />
           <input type="text" placeholder="Image" className={styles.input} />
           <textarea placeholder="Content" id="" cols="30" rows="10"  className={styles.textarea}></textarea>
           <button className={styles.button}>Send</button>
        </form></div>
       )
      
 }
      

}

export default Dashboard;