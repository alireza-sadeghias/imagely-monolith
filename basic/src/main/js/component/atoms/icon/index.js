import { jsx as _jsx } from "react/jsx-runtime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Icon = (props) => {
    const { icon, className, onClick = () => { } } = props;
    return (_jsx(FontAwesomeIcon, { icon: icon, className: className, onClick: () => onClick() }));
};
export default Icon;
