import DropDownMenu, { IDropDownItem } from "../../moleculs/drop-down";
import Menu, { IMenuItem } from "../../moleculs/menu";
import SearchBox from "../../moleculs/seachbox";
import Cart from "../cart";
import History from "../history/index";
import Repository from "../repository";

const Header = () => {
  const home: IMenuItem = {
    name: "خانه",
    action: (name: IMenuItem["name"]) => {
      console.log(name);
    },
    path: "/",
  };
  const galeries: IMenuItem = {
    name: "گالری",
    action: () => {
      console.log(name);
    },
    path: "/gallery",
  };
  const aboutUs: IMenuItem = {
    name: "درباره ما",
    action: () => {
      console.log("about us");
    },
    path: "/about-us",
  };
  const items = [home, galeries, aboutUs];

  const history: IDropDownItem = {
    text: "تاریخچه",
    href: "/history",
    component: <History />,
  };
  const cart: IDropDownItem = {
    text: "سبد خرید",
    href: "/card",
    component: <Cart />,
  };
  const exit: IDropDownItem = {
    text: "خروج",
    href: "/exit",
    component: <Repository />,
  };

  const dropDownItems = [history, cart, exit];

  return (
    <div className="p-2 text-lg flex list-none justify-between border-b border-blue-400 bg-blue-400 drop-shadow content-center items-baseline text-slate-50">
      <DropDownMenu className="text-blue-500" items={dropDownItems} />
      <SearchBox className="text-gray-900"></SearchBox>
      <Menu className="text-slate" items={items} />
    </div>
  );
};

export default Header;
