import { faHome } from "@fortawesome/free-solid-svg-icons";
import Icon from "../../atoms/icon";
import Item from "../../atoms/menu-item";

export interface IMenuItem {
  name: string;
  path: string;
  action: Function;
}
export interface IProps {
  items: IMenuItem[];
  className?: string;
}
/**
 * How we should add props as array?
 * @param props
 * @returns
 */
// const Menu = (props: { items: IMenuItem[] }) => {
const Menu = (props: IProps) => {
  const { items, className } = props;
  return (
    <>
      <ol className={`${className} flex flex-row-reverse items-baseline`}>
        <Icon icon={faHome} className="px-4"></Icon>
        {items.map((x) => {
          const { name, action, path } = x;
          return (
            <Item key={x.name} path={path} title={name} action={action}></Item>
          );
        })}
      </ol>
    </>
  );
};

export default Menu;
