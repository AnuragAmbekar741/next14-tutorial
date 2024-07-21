import { NextResponse,NextRequest } from "next/server";
import {PrismaClient} from "@prisma/client"

const client = new PrismaClient();

export async function GET(){
    return NextResponse.json({
        name:"Anurag Ambekar",
        email:"anuragambekar@gmail.com"
    })
}

export async function POST(req: NextRequest) {
    const body = await req.json();
    // should add zod validation here
    const user = await client.user.create({
        data: {
            email: body.email,
            password: body.password
        }
    });

    console.log(user.id);

    return NextResponse.json({ message: "Signed up" });
}