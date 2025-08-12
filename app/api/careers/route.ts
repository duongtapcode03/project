import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("Flexinet");
    const careers = await db.collection("careers").findOne({});

    return NextResponse.json(careers);
  } catch (error) {
    return NextResponse.json({ error: "Cannot fetch data" }, { status: 500 });
  }
}
