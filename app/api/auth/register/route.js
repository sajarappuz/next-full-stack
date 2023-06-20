import User from "@/models/User";
import { NextResponse } from "next/server";

export const POST = async(request) =>{
   const {name,email,password} = await request.json();

   await connect()
   try{
    const newUser = new User()

   }catch(err){
    return new NextResponse(err.message,{
       status:500,
    })
   }
}