interface IProps {
  value: string;
  type: "button" | "submit" | "reset";
  className?: string;
  onClick?: () => void;
  tooltip?: string;
}

export default function Button(props: IProps) {
  const { value, type, className, onClick, tooltip } = props;
  return (
    <button type={type} className={className} onClick={onClick}>
      {value}
    </button>
  );
}
