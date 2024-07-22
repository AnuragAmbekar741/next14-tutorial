"use server"
import client from "@/db"


//server action - can be called from client or on server side.
export async function signup(email:string,password:string) {
    try{
        await client.user.create({
            data:{
                email:email,
                password:password
            }
        })
        return true
    }catch(err){
        return false
    }
}