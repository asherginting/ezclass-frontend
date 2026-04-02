const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function submitPlacementTest(data: Record<string, string>) {
  const res = await fetch(`${BASE_URL}/api/placement-test/submit`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to submit test");
  }

  return res.json();
}

export async function getPlacementResult(taskId: string) {
  const res = await fetch(`${BASE_URL}/api/placement-test/result/${taskId}`);

  if (!res.ok) {
    throw new Error("Failed to fetch result");
  }

  return res.json();
}
