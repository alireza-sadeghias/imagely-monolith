import { jsx as _jsx } from "react/jsx-runtime";
export default function Button(props) {
    const { value, type, className, onClick, tooltip } = props;
    return (_jsx("button", { type: type, className: className, onClick: onClick, children: value }));
}
