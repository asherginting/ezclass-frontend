"use client";

import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useResultPolling } from "@/features/placement-test/hooks/useResultPolling";

export default function ResultPage() {
  const router = useRouter();
  const params = useParams();
  const taskId = params.taskId as string;

  const { data, isLoading, isError } = useResultPolling(taskId);

  if (isLoading || data?.status === "processing") {
    return (
      <main className="min-h-screen flex items-center justify-center text-center">
        <div className="space-y-3 animate-pulse">
          <p className="text-lg font-medium">Processing your result...</p>
          <p className="text-sm text-slate-400">This may take a few seconds</p>
        </div>
      </main>
    );
  }

  if (isError) {
    return (
      <main className="min-h-screen flex items-center justify-center text-center">
        <div className="space-y-3">
          <p className="text-red-400 font-medium">Failed to load result</p>

          <button
            onClick={() => window.location.reload()}
            className="bg-orange-500 px-4 py-2 rounded-lg"
          >
            Retry
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-slate-800 p-8 rounded-2xl shadow-lg text-center max-w-md w-full">
        <h1 className="text-2xl font-semibold mb-4">Your Result</h1>

        <p className="mb-2">Score: {data?.score ?? "-"}</p>
        <p className="mb-2">Level: {data?.level ?? "-"}</p>

        {data?.certificateUrl && (
          <a
            href={data.certificateUrl}
            target="_blank"
            className="text-orange-400 underline"
          >
            View Certificate
          </a>
        )}

        <button
          onClick={() => router.push("/")}
          className="mt-6 w-full bg-slate-700 hover:bg-slate-600 transition text-white py-2 rounded-xl"
        >
          Take Test Again
        </button>
      </div>
    </main>
  );
}
