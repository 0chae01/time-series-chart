interface ButtonProps {
  value: string;
  curQueryData: string[];
  toggleFilter: (id: string) => void;
}

const Button = ({ value, curQueryData, toggleFilter }: ButtonProps) => {
  return (
    <button
      onClick={() => toggleFilter(value)}
      className={curQueryData.includes(value) ? "active" : ""}
    >
      {value}
    </button>
  );
};

export default Button;
