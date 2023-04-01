import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import DropDownMenu from "../../moleculs/drop-down";
import Menu from "../../moleculs/menu";
import SearchBox from "../../moleculs/seachbox";
import Cart from "../cart";
import History from "../history/index";
import Repository from "../repository";
const Header = () => {
    const home = {
        name: "صفحه اصلی",
        action: (name) => {
            console.log(name);
        },
        path: "/",
    };
    const galeries = {
        name: "گالری",
        action: () => {
            console.log(name);
        },
        path: "/gallery",
    };
    const aboutUs = {
        name: "درباره ما",
        action: () => {
            console.log("about us");
        },
        path: "/about-us",
    };
    const items = [home, galeries, aboutUs];
    const history = {
        text: "تاریخچه",
        href: "/history",
        component: _jsx(History, {}),
    };
    const cart = {
        text: "سبد خرید",
        href: "/card",
        component: _jsx(Cart, {}),
    };
    const exit = {
        text: "خروج",
        href: "/exit",
        component: _jsx(Repository, {}),
    };
    const dropDownItems = [history, cart, exit];
    return (_jsxs("div", { className: "p-2 text-lg flex list-none justify-between border-b border-blue-400 bg-blue-400 drop-shadow content-center items-baseline text-slate-50", children: [_jsx(DropDownMenu, { className: "text-blue-500", items: dropDownItems }), _jsx(SearchBox, { className: "text-gray-900" }), _jsx(Menu, { className: "text-slate", items: items })] }));
};
export default Header;
