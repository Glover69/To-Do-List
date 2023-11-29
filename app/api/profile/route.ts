// import { connectDB } from "@/app/lib/database";
// import { profileModel } from "@/models/profile";
// import { NextResponse } from "next/server";
// import multer from "multer";
// import AWS from "aws-sdk";
// import { v4 as uuidv4 } from "uuid";
// import formidable from 'formidable';

// import * as dotenv from 'dotenv';
// dotenv.config();

// const accessKeyId = process.env.ACCESS_KEY_ID;
// const secretAccessKey = process.env.SECRET_ACCESS_KEY;


// if (!accessKeyId) {
//   console.error('Access Key ID for AWS is missing. Check your environment variables.');
//   process.exit(1);
// }

// if (!secretAccessKey) {
//   console.error('Secret Access Key for AWS is missing. Check your environment variables.');
//   process.exit(1);
// }

// const s3 = new AWS.S3({
//   accessKeyId: accessKeyId,
//   secretAccessKey: secretAccessKey ,
//   region: "eu-north-1",
// });

// // Assuming you have a storage configuration for multer, for example:
// const storage = multer.memoryStorage(); // You might use a different storage strategy based on your needs

// const upload = multer({ storage });

// export async function POST(request: any){
//     // upload.single("photo"),


//     const {image, name } = await request.json();
//     // await connectDB();
//     // await profileModel.create({image, name});
//     // return NextResponse.json({ message: 'Profile Created' }, {status: 201});
// }

// export async function GET(){
//     await connectDB();
//     const profile = await profileModel.find();
//     return NextResponse.json({ profile });

// }
