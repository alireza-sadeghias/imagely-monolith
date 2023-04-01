interface IProps {
  className?: string;
  children?: JSX.Element;
}

export default function (props: IProps) {
  const { className, children } = props;
  return <div className={className}>{children}</div>;
}
