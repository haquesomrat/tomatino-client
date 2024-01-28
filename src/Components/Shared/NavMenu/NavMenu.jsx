import { Avatar, Dropdown, Navbar } from "keep-react";
import { Link, NavLink } from "react-router-dom";
import { IoFastFoodOutline } from "react-icons/io5";
import { SlLogin } from "react-icons/sl";
import { SlLogout } from "react-icons/sl";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FiUserPlus } from "react-icons/fi";
import { BsCart4 } from "react-icons/bs";
import SecondaryBtn from "../Buttons/SecondaryBtn/SecondaryBtn";
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./NavMenu.css";

const MySwal = withReactContent(Swal);

const NavMenu = () => {
  const links = (
    <>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/allfoods"}>Foods</NavLink>
      <NavLink to={"/blogs"}>Blogs</NavLink>
    </>
  );

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        MySwal.fire("User successfully logged out");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="md:py-4 shadow-md lg:px-4">
      <div className="container mx-auto xl:px-4">
        <Navbar fluid={false}>
          <Navbar.Container className="flex items-center justify-between">
            {/* menus  */}
            <Navbar.Container
              tag="ul"
              className="lg:flex hidden items-center justify-between gap-8 font-plex"
            >
              {links}
            </Navbar.Container>

            {/* brand logo  */}
            <Navbar.Brand>
              <Link to={"/"}>
                <img
                  className="md:w-1/2 md:h-1/2 lg:mx-auto hover:scale-105 duration-300 "
                  src="https://i.ibb.co/XyTc2nT/logo2.png"
                  alt="keep"
                  width="160"
                  height="50"
                />
              </Link>
            </Navbar.Brand>

            {/* collapsible sidebar  */}
            <Navbar.Collapse collapseType="sidebar">
              <Navbar.Container tag="ul" className="flex flex-col gap-5 ">
                {links}
              </Navbar.Container>
            </Navbar.Collapse>

            {/* Dropdown profile  */}
            <Navbar.Container className="flex items-center md:gap-3">
              <Navbar.Container
                tag="ul"
                className="lg:flex items-center justify-between gap-5 font-plex p-0"
              >
                <Dropdown
                  label={
                    user?.photoURL ? (
                      <Avatar
                        shape="circle"
                        size="md"
                        className=""
                        img={user.photoURL}
                      />
                    ) : (
                      <Avatar shape="circle" />
                    )
                  }
                  type=""
                  size="sm"
                  arrowIcon={false}
                  dismissOnClick={true}
                >
                  <li className="text-base">
                    <NavLink
                      className="flex items-center gap-3 px-4 py-2 "
                      to={"/myaddeditems"}
                    >
                      <IoFastFoodOutline />
                      My added food items
                    </NavLink>
                  </li>
                  <li className="text-base">
                    <NavLink
                      className="flex items-center gap-3 px-4 py-2"
                      to={"/addfood"}
                    >
                      <IoIosAddCircleOutline />
                      Add a food item
                    </NavLink>
                  </li>
                  <li className="text-base">
                    <NavLink
                      className="flex items-center gap-3 px-4 py-2"
                      to={"/myorders"}
                    >
                      <BsCart4 /> My ordered food
                    </NavLink>
                  </li>
                  {user ? (
                    <li
                      onClick={handleLogOut}
                      className="flex items-center gap-3 px-4 py-2 text-base cursor-pointer logout"
                    >
                      <SlLogout />
                      Log Out
                    </li>
                  ) : (
                    <NavLink to={"/login"}>
                      <li className="flex items-center gap-3 px-4 py-2 text-base">
                        <SlLogin />
                        Log In
                      </li>
                    </NavLink>
                  )}

                  {!user && (
                    <NavLink to={"/registration"}>
                      <li className="flex md:hidden items-center gap-3 px-4 py-2 text-base">
                        <FiUserPlus />
                        Sign Up
                      </li>
                    </NavLink>
                  )}
                </Dropdown>
              </Navbar.Container>
              {user ? (
                ""
              ) : (
                <NavLink to={"/registration"}>
                  <div className="hidden md:block">
                    <SecondaryBtn>Registration</SecondaryBtn>
                  </div>
                </NavLink>
              )}
              <Navbar.Toggle />
            </Navbar.Container>
          </Navbar.Container>
        </Navbar>
      </div>
    </div>
  );
};

export default NavMenu;
