import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Route, Routes } from "react-router-dom";
import MainContent from "./component/organism/main-content";
import Cart from "./component/organism/cart";
import History from "./component/organism/history";
import NotFound from "./component/organism/not-found";
import Repository from "./component/organism/repository";
import ViewTemplate from "./component/templates/home";
import AboutUs from "./component/organism/about-us";
import LoginPage from "./component/pages/login";
import { ProtectedRoute } from "./providers/protected-routes";
function App() {
    return (_jsxs(Routes, { children: [_jsxs(Route, { element: _jsx(ViewTemplate, {}), children: [_jsx(Route, { path: "/", element: _jsx(MainContent, {}) }), _jsx(Route, { path: "/history", element: _jsx(ProtectedRoute, { children: _jsx(History, {}) }) }), _jsx(Route, { path: "/card", element: _jsx(ProtectedRoute, { children: _jsx(Cart, {}) }) }), _jsx(Route, { path: "/repository", element: _jsx(ProtectedRoute, { children: _jsx(Repository, {}) }) }), _jsx(Route, { path: "/gallery", element: _jsx(MainContent, {}) }), _jsx(Route, { path: "/gallery", element: _jsx(MainContent, {}) }), _jsx(Route, { path: "/about-us", element: _jsx(AboutUs, {}) }), _jsx(Route, { path: "/search/:query", element: _jsx(MainContent, {}) }), _jsx(Route, { path: "*", element: _jsx(NotFound, {}) })] }), _jsx(Route, { path: "/login", element: _jsx(LoginPage, {}) })] }));
}
export default App;
