import { connectDB } from "@/app/lib/database";
import { categoriesModel } from "@/models/categories";
import { NextResponse } from "next/server";  


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
