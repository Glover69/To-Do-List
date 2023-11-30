// pages/api/auth/user/[userId].ts
import { connectDB } from "@/app/lib/database";
import { authModel } from "@/models/auth";
import { NextResponse } from "next/server";

// export default async function handler(request: any) {
//   try {
//     await connectDB();

//     // Extract userId from the query parameters
//     const { userId } = request.query;

//     // Fetch user details based on userId
//     const user = await authModel.findById(userId);

//     if (!user) {
//       // If user not found, return an appropriate response
//       return NextResponse.json({ message: 'User not found' }, { status: 404 });
//     }

//     // Return user details
//     return NextResponse.json({ fullName: user.fullName });
//   } catch (error) {
//     console.error('Error fetching user details:', error);
//     // Handle other errors and return an appropriate response
//     return NextResponse.json({ message: 'Error fetching user details' }, { status: 500 });
//   }
// }

export async function GET(request, {params}){
    const { userId } = params;

    await connectDB();

    const user = await authModel.findOne({_id: userId});

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ fullName: user.fullName });
}




