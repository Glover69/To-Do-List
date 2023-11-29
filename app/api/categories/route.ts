import { connectDB } from "@/app/lib/database";
import { categoriesModel } from "@/models/categories";
import { NextResponse } from "next/server";
// import Cors from 'micro-cors';

// // Create the CORS middleware
// const cors = Cors({
//   allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Add the HTTP methods you want to allow
//   origin: '*', // Change this to the specific origin(s) you want to allow or set it to '*' for any origin
// });

  


export async function POST(request: any){
    const {color, icon, categoryName } = await request.json();
    await connectDB();
    await categoriesModel.create({color, icon, categoryName});
    return NextResponse.json({ message: 'Category Created' }, {status: 201});

}

export async function GET(){
    await connectDB();
    const categories = await categoriesModel.find();
    return NextResponse.json({ categories});

}

export async function DELETE(request: any){
    const id = request.nextUrl.searchParams.get("id");
    await connectDB();
    await categoriesModel.findByIdAndDelete(id);
    return NextResponse.json({ message: 'Category Deleted' }, {status: 200});
}
