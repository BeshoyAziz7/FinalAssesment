interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  active?: boolean;
}

export default function Button({ children, onClick, active = false }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-lg font-medium transition-all ${
        active
          ? 'bg-blue-600 text-white'
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
      }`}
    >
      {children}
    </button>
  );
}
