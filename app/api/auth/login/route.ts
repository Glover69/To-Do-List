// import { connectDB } from "@/app/lib/database";
// import { authModel } from "@/models/auth";
// import { NextResponse } from "next/server";
// import bcrypt from 'bcrypt';  


// export async function POST(request: any){
//     const {username, password } = await request.json();
//     await connectDB();

//     const hashedPassword = await bcrypt.hash(password, 10);
    
//     await authModel.create({username, password: hashedPassword});
//     return NextResponse.json({ message: 'Signed Up successfully' }, {status: 201});

// }