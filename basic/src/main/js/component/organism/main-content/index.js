import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useParams } from "react-router-dom";
import Gallery from "../gallery";
import Suggestion from "../suggestion";
export default function MainContent() {
    const { query } = useParams();
    console.log("query in MainContent", query);
    return (_jsxs(_Fragment, { children: [_jsx(Gallery, { query: query }), _jsx(Suggestion, {})] }));
}
