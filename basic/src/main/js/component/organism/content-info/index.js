import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Button from "../../atoms/button";
import Typography from "../../atoms/typography";
import WordCloud from "../../moleculs/word-cloud";
export default function ContentInfo(props) {
    const { photo } = props;
    return (_jsxs("div", { className: "p-4 border-2 border-slate-400 mx-4 rounded-md", children: [_jsx(Typography, { className: "font-extrabold w-full sm:w-12 md:w-24 lg:w-36 xl:w-64 break-keep mx-4", value: photo.alt_description }), _jsx(WordCloud, { wordCloud: photo.alt_description.split(" ") }), _jsxs("div", { className: "mt-4 items-baseline px-2", children: [_jsx(Button, { value: "\u0627\u0641\u0632\u0648\u062F\u0646 \u0628\u0647 \u0633\u0628\u062F \u062E\u0631\u06CC\u062F", type: "button", className: "py-3 px-3 rounded-lg shadow-lg bg-fuchsia-500 text-slate-100 font-semibold" }), _jsxs("div", { className: "inline-flex mx-8", children: [_jsx("p", { className: "mx-1", children: "\u0631\u06CC\u0627\u0644" }), _jsx("p", { className: "font-semibold text-center", children: "1,000" })] })] })] }));
}
