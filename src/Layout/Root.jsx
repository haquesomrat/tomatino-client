import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/NavMenu/NavMenu";
import Footer from "../Components/Shared/Footer/Footer";

const Root = () => {
  return (
    <div className="font-plex font-medium selection:bg-green-500/70  selection:text-white  ">
      <Navbar />
      <div className="container mx-auto lg:px-3">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
