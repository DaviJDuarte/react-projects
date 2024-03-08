interface ButtonProps {
  children: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export default function Button({
  children,
  onClick,
  className,
  disabled,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-gray-600 text-white p-2 rounded-lg cursor-pointer disabled:brightness-50 disabled:cursor-not-allowed active:brightness-75 hover:brightness-90 ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
