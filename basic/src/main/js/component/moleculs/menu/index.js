import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Icon from "../../atoms/icon";
import Item from "../../atoms/menu-item";
/**
 * How we should add props as array?
 * @param props
 * @returns
 */
// const Menu = (props: { items: IMenuItem[] }) => {
const Menu = (props) => {
    const { items, className } = props;
    return (_jsx(_Fragment, { children: _jsxs("ol", { className: `${className} flex flex-row-reverse items-baseline`, children: [_jsx(Icon, { icon: faHome, className: "px-4" }), items.map((x) => {
                    const { name, action, path } = x;
                    return (_jsx(Item, { path: path, title: name, action: action }, x.name));
                })] }) }));
};
export default Menu;
