import { Link } from "react-router-dom";
import bg from "../../../assets/images/wave.svg";
// import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="pt-16 pb-8 xl:pt-14 2xl:pt-24 px-4  relative mt-24 bg-[#ff6666]">
      <img
        className="absolute -top-32 right-0 left-0 bottom-0 -z-10 w-full h-full object-cover"
        src={bg}
        alt="footer shape"
      />
      <footer className="container mx-auto grid grid-cols-1 sm:grid-cols-12 md:pb-3">
        <nav className="col-span-6 md:col-span-7">
          <aside>
            <Link to={"/"}>
              <img
                className="w-[170px] lg:w-[200px] mx-auto sm:mx-0"
                src="https://i.ibb.co/XyTc2nT/logo2.png"
                alt="footer logo"
              />
            </Link>
          </aside>
          <h2 className="pt-4 text-center sm:text-left">Follow us on</h2>
          <div className="flex gap-3 justify-center sm:justify-start py-2">
            <Link className="">
              <div className="bg-white h-10 w-10 p-2 rounded-full grid items-center justify-center">
                <FaFacebookF className="text-xl " />
              </div>
            </Link>
            <Link className="">
              <div className="bg-white h-10 w-10 p-2 rounded-full grid items-center justify-center">
                <FaInstagram className="text-xl" />
              </div>
            </Link>
            <Link className="">
              <div className="bg-white h-10 w-10 p-2 rounded-full grid items-center justify-center">
                <FaTwitter className="text-xl" />
              </div>
            </Link>
            <Link className="">
              <div className="bg-white h-10 w-10 p-2 rounded-full grid items-center justify-center">
                <FaWhatsapp className="text-xl" />
              </div>
            </Link>
          </div>
        </nav>
        <nav className="col-span-6 md:col-span-5 space-x-3 grid grid-cols-2 py-2 sm:py-0">
          <div className="grid grid-rows-4 gap-2">
            <Link className=" hover:text-white">About us</Link>
            <Link className=" hover:text-white">Advertise</Link>
            <Link className=" hover:text-white">Contact</Link>
            <Link className=" hover:text-white">Product Vetting</Link>
          </div>
          <div className="grid grid-rows-4 gap-2">
            <Link className=" hover:text-white">Privacy Policy</Link>
            <Link className=" hover:text-white">Terms of Service</Link>
            <Link className=" hover:text-white">Careers</Link>
          </div>
        </nav>
      </footer>
      <div className="container mx-auto">
        <hr className="my-4 border-black" />
        <p className="text-sm md:text-md text-center md:text-right text-white font-plex">
          Copyright © 2023 - All right reserved by Tomatino Restaurant
        </p>
      </div>
    </div>
  );
};

export default Footer;
