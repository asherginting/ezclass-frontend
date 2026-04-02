"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { questions } from "../data/questions";
import { QuestionCard } from "./QuestionCard";
import { testSchema } from "../schema/test.schema";
import { useSubmitTest } from "../hooks/useSubmitTest";

export function TestForm() {
  const router = useRouter();
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [error, setError] = useState<string | null>(null);
  const { mutate, isPending } = useSubmitTest();

  function handleSelect(questionId: string, value: string) {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  }

  function handleSubmit() {
    const result = testSchema.safeParse({ answers });

    if (!result.success || Object.keys(answers).length !== questions.length) {
      setError("Please answer all questions");
      return;
    }

    setError(null);

    mutate(answers, {
      onSuccess: (data) => {
        router.push(`/result/${data.taskId}`);
      },
      onError: () => {
        setError("Something went wrong. Please try again.");
      },
    });
  }

  return (
    <div className="max-w-xl w-full space-y-6">
      <h1 className="text-2xl font-semibold text-center">
        English Placement Test
      </h1>

      <p className="text-slate-400 text-center">Answer all questions below</p>

      {questions.map((q) => (
        <QuestionCard
          key={q.id}
          question={q.question}
          options={q.options}
          selected={answers[q.id] || null}
          onSelect={(value) => handleSelect(q.id, value)}
        />
      ))}

      {error && <p className="text-red-400 text-sm text-center">{error}</p>}

      <button
        onClick={handleSubmit}
        disabled={Object.keys(answers).length !== questions.length || isPending}
        className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition text-white py-3 rounded-xl font-medium"
      >
        {isPending ? "Submitting..." : "Submit Answer"}
      </button>
    </div>
  );
}
