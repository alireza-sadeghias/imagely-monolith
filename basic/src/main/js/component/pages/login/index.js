import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Button from "../../atoms/button";
import Card from "../../atoms/card";
import Input from "../../atoms/input";
import Label from "../../atoms/label";
export default function LogIn() {
    return (_jsx("div", { className: "grid h-screen place-items-center font-face", children: _jsx(Card, { className: "w-full max-w-sm p-4 bg-blue-50 border border-blue-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-blue-400 dark:border-blue-400", children: _jsxs("form", { className: "space-y-6", action: "#", children: [_jsx("h5", { className: "text-xl font-medium text-blue-900 dark:text-white text-right", children: "\u0648\u0631\u0648\u062F \u0628\u0647 \u0627\u06CC\u0645\u06CC\u062C\u0644\u06CC" }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "email", className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white text-right", children: "\u0627\u06CC\u0645\u06CC\u0644" }), _jsx(Input, { type: "email", name: "email", id: "email", className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-100 dark:border-gray-400 dark:placeholder-gray-600 dark:text-gray-800", placeholder: "name@company.com", required: true })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "password", className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white text-right", children: "\u0631\u0645\u0632 \u0639\u0628\u0648\u0631" }), _jsx(Input, { type: "password", name: "password", id: "password", placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-100 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-800", required: true })] }), _jsxs("div", { className: "flex flex-row-reverse", children: [_jsxs("div", { className: "flex", children: [_jsx("div", { className: "h-5", children: _jsx(Input, { id: "remember", type: "checkbox", value: "", className: "w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800", required: true }) }), _jsx(Label, { htmlFor: "remember", className: "ml-2 text-sm font-medium text-cyan-50 dark:text-cyan-50", children: "\u0628\u062E\u0627\u0637\u0631 \u0633\u067E\u0631\u062F\u0646" })] }), _jsx("a", { href: "#", className: "mr-auto text-sm text-cyan-50 hover:underline dark:text-cyan-50 underline", children: "\u0641\u0631\u0627\u0645\u0648\u0634\u06CC \u0631\u0645\u0632 \u0639\u0628\u0648\u0631\u061F" })] }), _jsx(Button, { type: "submit", value: "\u0648\u0631\u0648\u062F", className: "w-full text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" }), _jsxs("div", { className: "text-sm font-medium text-gray-500 dark:text-gray-300", children: ["\u062B\u0628\u062A \u0646\u0627\u0645 \u0646\u06A9\u0631\u062F\u0647 \u0627\u06CC\u062F\u061F", _jsx("a", { href: "#", className: "text-red-700 hover:underline dark:text-cyan-50 mr-2 underline", children: "\u0627\u06CC\u062C\u0627\u062F \u062D\u0633\u0627\u0628 \u06A9\u0627\u0631\u0628\u0631\u06CC" })] })] }) }) }));
}