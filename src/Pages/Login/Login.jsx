import { Card, Label, TextInput } from "keep-react";
import { Envelope, EyeSlash, Lock } from "phosphor-react";
import { FcGoogle } from "react-icons/fc";
import PrimaryButton from "../../Components/Shared/Buttons/PrimaryButton/PrimaryButton";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import useAuth from "../../hooks/useAuth";

const MySwal = withReactContent(Swal);

const Login = () => {
  const { logIn, googleSignUp } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    // login user with email and password
    logIn(email, password)
      .then((res) => {
        console.log(res.user);
        // navigate after login
        navigate(location?.state ? location.state : "/");

        // alert
        MySwal.fire("Success", "You succesfully logged in", "success");
      })
      .catch((err) => {
        console.log(err);
        MySwal.fire("Invalid Email/Password", `${err.message}`, "error");
      });
  };

  const handleGoogleSignIn = () => {
    // create user with google
    googleSignUp()
      .then((res) => {
        console.log(res.user);
        // navigate after login
        navigate(location?.state ? location.state : "/");
        // alert
        MySwal.fire("Success", "Your account created succesfully", "success");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-full flex items-center justify-center py-20 px-4">
      <Helmet>
        <title>Tomatino | Login</title>
      </Helmet>
      <Card className="max-w-lg w-full md:w-1/2 p-4 md:p-6 shrink-0 shadow-md">
        <form onSubmit={handleLogin} className="space-y-5">
          <h2 className="text-3xl lg:text-4xl font-toga text-center text-[#191825] pt-6">
            Log In
          </h2>

          <div>
            <Label value="Email" />
            <TextInput
              name="email"
              placeholder="Enter Email"
              color="gray"
              sizing="md"
              addon={<Envelope size={20} color="#5E718D" />}
              addonPosition="left"
            />
          </div>

          <div>
            <Label value="Password" />
            <TextInput
              name="password"
              placeholder="Enter Password"
              color="gray"
              sizing="md"
              type="password"
              addon={<Lock size={20} color="#5E718D" />}
              addonPosition="left"
              icon={<EyeSlash size={20} color="#5E718D" />}
              iconPosition="right"
            />
          </div>
          <PrimaryButton>Login</PrimaryButton>
          <p className="text-center">or continue with</p>
          <div className="flex justify-center items-center">
            <FcGoogle
              onClick={() => handleGoogleSignIn()}
              className="text-2xl cursor-pointer"
            />
          </div>
          <hr />
          <p className="text-center">
            Don&apos;t have an account? <br />
            Please{" "}
            <Link to={"/registration"}>
              <span className="text-primary hover:underline">
                Register here
              </span>
            </Link>
          </p>
        </form>
      </Card>
    </div>
  );
};

export default Login;
