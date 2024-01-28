import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "keep-react";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="w-full p-40 flex items-center justify-center">
        <Spinner color="failure" size="lg" />
      </div>
    );
  }
  if (user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/login"} replace></Navigate>;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.node,
};
