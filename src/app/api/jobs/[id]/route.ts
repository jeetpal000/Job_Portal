import { JobPostTable } from "@/src/model/schema";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { CreateServer } from "@/src/utils/db";

export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    await CreateServer();
    // Next.js 16 requires await here
    const { id } = await context.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid Job ID" }, { status: 400 });
    }

    const job = await JobPostTable.findById(id).lean();

    if (!job) {
      return NextResponse.json({ error: "Job not found" }, { status: 404 });
    }

    return NextResponse.json({
      ...job,
      _id: job._id.toString(),
      date: job.date,
    });
  } catch (error) {
    console.error("GET job error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
