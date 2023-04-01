import { jsx as _jsx } from "react/jsx-runtime";
import { Link } from "react-router-dom";
const Item = (props) => {
    const { title, action, path } = props;
    return (
    /**TODO - how we should add onhover*/
    _jsx(Link, { to: path, className: "mx-2 cursor-pointer hover:decoration-solid hover:decoration-sky-500", children: title }));
};
export default Item;
