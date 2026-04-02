import { NextResponse } from "next/server";

export async function POST() {
  await new Promise((res) => setTimeout(res, 1000));
  return NextResponse.json({
    taskId: crypto.randomUUID(),
    status: "processing",
  });
}
