import { connectDB } from "@/app/lib/database";
import { categoriesModel } from "@/models/categories";
import { NextResponse } from "next/server";

export async function PUT(request, {params}){
    const { id } = params;
    const { newColor: color, newIcon: icon, newColorId: colorId, newIconId: iconId } = await request.json();
    await connectDB();
    await categoriesModel.findByIdAndUpdate(id, {color, icon, colorId, iconId});
    return NextResponse.json({ message: "Category Updated"}, {status: 200})
}

export async function GET(request, {params}){
    const { id } = params;
    await connectDB();
    console.log("id:", id);
    const category = await categoriesModel.findOne({_id: id});
    return NextResponse.json({ category }, {status: 200})
}