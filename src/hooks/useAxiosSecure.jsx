import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "https://tomatino-fntbxgyr0-haquesomrat.vercel.app",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const MySwal = withReactContent(Swal);
  const { logOut } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        console.log("error intercetors", error.response);
        if (error.response.status == 401 || error.response.status == 403) {
          console.log("logout the user");
          logOut()
            .then(() => {
              MySwal.fire("Session Expired");
              navigate("/");
            })
            .catch((err) => console.log(err));
        }
      }
    );
  }, [MySwal, logOut, navigate]);

  return axiosSecure;
};

export default useAxiosSecure;
