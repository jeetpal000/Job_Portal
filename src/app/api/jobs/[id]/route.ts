import { getJobById } from "@/src/components/pages/employerAllJob/employerAllJobAction";
import { JobPostTable } from "@/src/model/schema";
import { NextResponse } from "next/server";


export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
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
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

