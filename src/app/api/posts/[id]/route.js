import { connectMongoDB } from "../../../../../lib/mongodb";
import Post from "../../../../../model/post";
import { NextResponse } from "next/server";

export async function GET(req ,{params}) {
    const {id} = await params;
    await connectMongoDB();
    const post = await Post.findOne({_id: id});
    return NextResponse.json({post}, {status:200})
}

export async function PUT(req , {params}) {
    const {id} = await params;
    const {newTitle:title, newImg:img, newContent:content} = await req.json();
    await connectMongoDB();
    await Post.findByIdAndUpdate(id, {title, img, content});
    return NextResponse.json({message:"Post update"}, {status:200});
}

export async function DELETE(req , {params}) {
    const {id} = await params;
    await connectMongoDB();
    await Post.deleteOne({_id : id});
    return NextResponse.json({message:"Post Delete"}, {status:200});
}

export async function DELETE(req) {
    const {id} = req.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Post.deleteOne({_id : id});
    return NextResponse.json({message:"Post Delete"}, {status:200});
}