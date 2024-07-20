import { NextResponse } from "next/server";

export async function GET(){
    return NextResponse.json({
        name:"Anurag Ambekar",
        email:"anuragambekar@gmail.com"
    })
}

export async function POST(request: Request) {
  const { username, password } = await request.json();
  console.log('Username:', username);
  console.log('Password:', password);

  return NextResponse.json({ message: 'Sign up successful' });
}