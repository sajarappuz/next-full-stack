import { NextResponse } from "next/server"
import connect from "@/utils/db"
import post from "@/models/post";
//fetching data from mongo
export const GET = async (request) =>{

    try{
       await connect()   //waiting for connection
       const posts = await post.find() //fetching post from post.js
       return new NextResponse(JSON.stringify(posts),{status:200})
    }catch(err){
        return new NextResponse("Database Error",{status:500});  
    
}}