interface InputProps {
  value: number;
  onChange: (value: number) => void;
  placeholder?: string;
}

export default function Input({ value, onChange, placeholder }: InputProps) {
  return (
    <input
      type="number"
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      placeholder={placeholder}
      className="px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}
