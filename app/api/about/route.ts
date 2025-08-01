import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("Flexinet");
    const about = await db.collection("about").findOne({});

    return NextResponse.json(about);
  } catch (error) {
    return NextResponse.json({ error: "Cannot fetch data" }, { status: 500 });
  }
}
