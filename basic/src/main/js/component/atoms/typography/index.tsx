interface IProps {
  value?: string;
  className?: string;
}


const Typography = (props: IProps) => {
  const { value, className } = props;
  return <h1 className={`prose prose-xl ${className}`}>{value}</h1>;
};

export default Typography;
