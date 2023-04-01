import { Outlet } from "react-router-dom";
import Footer from "../../organism/footer";
import Header from "../../organism/header";

export default function ViewTemplate() {
  return (
    <div className="font-face bg-neutral-50 h-full">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
