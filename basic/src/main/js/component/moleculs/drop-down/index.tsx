import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../../atoms/icon";

export interface IDropDownItem {
  href: string;
  text: string;
  component: React.ReactNode;
}

interface IProps {
  items: IDropDownItem[];
  className?: string;
}

export default function DropDownMenu(props: IProps) {
  const { items, className } = props;
  const [show, setShow] = useState(false);

  useEffect(() => {
    // onblur = (w: Window, ev: FocusEvent) => {};
  }, []);

  setShow;

  return (
    <div className={`${className}`}>
      <a className="border-none cursor-pointer" />
      <Icon
        onClick={() => {
          setShow(!show);
        }}
        className="relative inline-block text-indigo-50"
        icon={faUserCircle}
      />
      <ul
        className={
          show ? "block absolute bg-slate-100 w-32" : "hidden absolute"
        }
      >
        {items.map((x) => {
          const { href, text, component } = x;
          return (
            <li
              key={text}
              className="p-1 no-underline block border-b border-sky-500 hover:bg-slate-400"
            >
              <Link to={href}> {text}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
