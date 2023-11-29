import { connectDB } from "@/app/lib/database";
import { profileModel } from "@/models/profile";
import { NextResponse } from "next/server";

export async function PUT(request, {params}){
    const { id } = params;
    const { newImage: image, newName: name} = await request.json();
    await connectDB();
    await profileModel.findByIdAndUpdate(id, {name, image});
    return NextResponse.json({ message: "Profile Updated"}, {status: 200})
}

// export async function GET(request, {params}){
//     const { id } = params;
//     await connectDB();
//     console.log("id:", id);
//     const category = await profileModel.findOne({_id: id});
//     return NextResponse.json({ category }, {status: 200})
// }