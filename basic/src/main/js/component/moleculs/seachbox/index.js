import { jsx as _jsx } from "react/jsx-runtime";
import { useNavigate } from "react-router-dom";
export default function SearchBox(props) {
    const { className } = props;
    const navigate = useNavigate();
    return (_jsx("input", { className: `${className} w-96 rounded-xl text-end py-2 px-4 text-sm focus-visible:outline-none`, placeholder: "\u062A\u0635\u0648\u06CC\u0631 \u062E\u0648\u062F \u0631\u0627 \u062C\u0633\u062A \u0648 \u062C\u0648 \u06A9\u0646\u06CC\u062F", type: "text", onKeyUp: (e) => {
            if (e.key === "Enter") {
                navigate(`/search/${e.currentTarget.value}`);
            }
            // if(e.key.===13)
        } }));
}
