import { NextResponse } from "next/server"
import connect from "@/utils/db"
import post from "@/models/post";
//fetching data from mongo
export const GET = async (request, {params}) =>{

    const {id} = params //getting id for single post

    try{
       await connect()   //waiting for connection
       const posts = await post.findById(id) //fetching single post from post.js using id 
       return new NextResponse(JSON.stringify(posts),{status:200})
    }catch(err){
        return new NextResponse("Database Error",{status:500});  
    }
}