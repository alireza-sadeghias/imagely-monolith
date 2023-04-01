import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../../atoms/icon";
export default function DropDownMenu(props) {
    const { items, className } = props;
    const [show, setShow] = useState(false);
    useEffect(() => {
        // onblur = (w: Window, ev: FocusEvent) => {};
    }, []);
    setShow;
    return (_jsxs("div", { className: `${className}`, children: [_jsx("a", { className: "border-none cursor-pointer" }), _jsx(Icon, { onClick: () => {
                    setShow(!show);
                }, className: "relative inline-block text-indigo-50", icon: faUserCircle }), _jsx("ul", { className: show ? "block absolute bg-slate-100 w-32" : "hidden absolute", children: items.map((x) => {
                    const { href, text, component } = x;
                    return (_jsx("li", { className: "p-1 no-underline block border-b border-sky-500 hover:bg-slate-400", children: _jsxs(Link, { to: href, children: [" ", text] }) }, text));
                }) })] }));
}
