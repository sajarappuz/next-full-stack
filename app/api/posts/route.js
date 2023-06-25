import { NextResponse } from "next/server"
import connect from "@/utils/db"
import post from "@/models/post";
//fetching data from mongo
export const GET = async (request) =>{

    const url = new URL(request.url);

    const username = url.searchParams.get("username");

    try{
       await connect()   //waiting for connection
       const posts = await post.find( username && { 
        username
       }); //fetching post from post.js
       return new NextResponse(JSON.stringify(posts),{status:200})
    }catch(err){
        return new NextResponse("Database Error",{status:500});  
    
}}

//adding data to mongo
export const POST = async (request) =>{
    const body = await request.json()
    

    const newPost = new post(body);

    try{
       await connect();  //waiting for connection
       await newPost.save();
       return new NextResponse("post created",{status:201})
    }catch(err){
        return new NextResponse("Database Error",{status:500});  
    
}}