import { NextResponse, NextRequest } from "next/server";
import client from "@/db"


export async function GET(req:NextRequest) {
  const user = await client.user.findFirst()

  return NextResponse.json({
    name: "Anurag Ambekar",
    email: user?.email
  })
}

export async function POST(req: NextRequest) {
  //params,headers and body
  // const headers = req.headers.get("authorization")
  // const params = req.nextUrl.searchParams.get("name")
  // console.log(body,headers,params)
  try {
    const body = await req.json();
    const user = await client.user.create({
      data: {
        email: body.email,
        password: body.password
      }
    });
    console.log(user.id);
    return NextResponse.json({ message: "signed up" });

  } catch (err) {
    console.log(err)
    return NextResponse.json({ message: "error while signing up" });
  }
}