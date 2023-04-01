import { jsx as _jsx } from "react/jsx-runtime";
export default function Input(props) {
    const { className, type, name, id, placeholder, required, value } = props;
    return (_jsx("input", { type: type, className: className, name: name, id: id, value: value, placeholder: placeholder, required: required }));
}
