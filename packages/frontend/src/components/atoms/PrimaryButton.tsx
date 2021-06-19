const PrimaryButton = ({ onClick, text, type }: IPrimaryButtonProps) => {
  return (
    <button type={type} onClick={onClick}>
      {text}
    </button>
  );
};

interface IPrimaryButtonProps {
  text: string;
  type: 'button' | 'submit' | 'reset';
  onClick?: () => unknown;
}

export default PrimaryButton;
