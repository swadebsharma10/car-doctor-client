import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer";
import Navbar from "../components/Shared/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
