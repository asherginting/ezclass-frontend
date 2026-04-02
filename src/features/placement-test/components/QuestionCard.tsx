type Props = {
  question: string;
  options: string[];
  selected: string | null;
  onSelect: (value: string) => void;
};

export function QuestionCard({ question, options, selected, onSelect }: Props) {
  return (
    <div className="bg-slate-800 p-6 rounded-2xl shadow-lg">
      <h2 className="text-lg font-medium mb-4">{question}</h2>

      <div className="grid grid-cols-2 gap-3">
        {options.map((option) => {
          const isSelected = selected === option;

          return (
            <button
              key={option}
              onClick={() => onSelect(option)}
              className={`p-3 rounded-xl border transition text-left ${
                isSelected
                  ? "bg-orange-500 text-white border-orange-500"
                  : "bg-slate-700 border-slate-600 hover:bg-slate-600"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}
