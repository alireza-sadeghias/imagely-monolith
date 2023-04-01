import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet } from "react-router-dom";
import Footer from "../../organism/footer";
import Header from "../../organism/header";
export default function ViewTemplate() {
    return (_jsxs("div", { className: "font-face bg-neutral-50 h-full", children: [_jsx(Header, {}), _jsx(Outlet, {}), _jsx(Footer, {})] }));
}
