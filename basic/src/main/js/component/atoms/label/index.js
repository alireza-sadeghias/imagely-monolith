import { jsx as _jsx } from "react/jsx-runtime";
export default function (props) {
    const { htmlFor, className, children } = props;
    return (_jsx("label", { htmlFor: htmlFor, className: className, children: children }));
}
