import { jsx as _jsx } from "react/jsx-runtime";
const Typography = (props) => {
    const { value, className } = props;
    return _jsx("h1", { className: `prose prose-xl ${className}`, children: value });
};
export default Typography;
