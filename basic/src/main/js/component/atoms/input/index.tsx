interface IProps {
  className?: string;
  type?: string;
  name?: string;
  id?: string;
  value?:string
  placeholder?: string;
  required?: boolean;
}
export default function Input(props: IProps) {
  const { className, type, name, id, placeholder, required,value } = props;
  return (
    <input
      type={type}
      className={className}
      name={name}
      id={id}
      value={value}
      placeholder={placeholder}
      required={required}
    ></input>
  );
}
