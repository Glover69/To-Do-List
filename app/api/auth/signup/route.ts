import { connectDB } from "@/app/lib/database";
import { authModel } from "@/models/auth";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';  


export async function POST(request: any){
    const {username, password, fullname } = await request.json();
    await connectDB();

    const existingUser = await authModel.findOne({ username });
    if (existingUser) {
        return NextResponse.json({ message: 'Username already exists.' }, { status: 400 });
      }

    const hashedPassword = await bcrypt.hash(password, 10);
    
    const newUser = await authModel.create({username, password: hashedPassword, fullname});
    return NextResponse.json({ message: 'Signed Up successfully', userId: newUser._id, fullname }, { status: 201 });

}