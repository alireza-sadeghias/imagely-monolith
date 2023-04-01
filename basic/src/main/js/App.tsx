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
  return (
    <Routes>
      <Route element={<ViewTemplate />}>
        <Route path="/" element={<MainContent />}></Route>
        <Route
          path="/history"
          element={
            <ProtectedRoute>
              <History />
            </ProtectedRoute>
          }
        />
        <Route
          path="/card"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route
          path="/repository"
          element={
            <ProtectedRoute>
              <Repository />
            </ProtectedRoute>
          }
        />
        <Route path="/gallery" element={<MainContent />} />
        <Route path="/gallery" element={<MainContent />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/search/:query" element={<MainContent />} />

        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
