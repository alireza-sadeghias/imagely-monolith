interface IProps {
  className?: string;
  htmlFor?: string;
  children?: any;
}

export default function (props: IProps) {
  const { htmlFor, className, children } = props;
  return (
    <label htmlFor={htmlFor} className={className}>
      {children}
    </label>
  );
}
