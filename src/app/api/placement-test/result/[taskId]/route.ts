import { NextRequest, NextResponse } from "next/server";

const callCount: Record<string, number> = {};

export async function GET(
  _: NextRequest,
  { params }: { params: Promise<{ taskId: string }> },
) {
  const { taskId } = await params;

  callCount[taskId] = (callCount[taskId] || 0) + 1;

  if (callCount[taskId] < 3) {
    return NextResponse.json({
      status: "processing",
    });
  }

  return NextResponse.json({
    status: "completed",
    score: Math.floor(Math.random() * 100),
    level: "Intermediate",
    certificateUrl: "https://example.com/certificate.pdf",
  });
}
