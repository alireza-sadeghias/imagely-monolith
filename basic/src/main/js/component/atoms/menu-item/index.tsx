import { Link } from "react-router-dom";

interface IProps {
  title: string;
  path: string;
  action: Function;
}

const Item = (props: IProps) => {
  const { title, action, path } = props;
  return (
    /**TODO - how we should add onhover*/
    <Link
      to={path}
      className="mx-2 cursor-pointer hover:decoration-solid hover:decoration-sky-500"
    >
      {title}
    </Link>
  );
};

export default Item;
