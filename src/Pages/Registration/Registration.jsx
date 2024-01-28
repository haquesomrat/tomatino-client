import { Label, TextInput, Card } from "keep-react";
import { Envelope, EyeSlash, Lock } from "phosphor-react";
import { MdAddPhotoAlternate, MdOutlineTitle } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import PrimaryButton from "../../Components/Shared/Buttons/PrimaryButton/PrimaryButton";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { updateProfile } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import useAuth from "../../hooks/useAuth";

const MySwal = withReactContent(Swal);

const Registration = () => {
  const { createUser, googleSignUp } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, photo, email, password);

    if (
      !/^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(.{1,5}|.{7,})$/.test(password)
    ) {
      MySwal.fire(
        "Invalid Pasword",
        "Password should have at least 8 character combination of number, capital and special characters",
        "error"
      );
      return;
    }

    // create user with email and password
    createUser(email, password)
      .then((res) => {
        console.log(res.user);
        updateProfile(res.user, {
          displayName: name,
          photoURL: photo,
        });
        // navigate after registration
        navigate(location?.state ? location.state : "/");

        MySwal.fire("Success", "Your account created succesfully", "success");
      })
      .catch((err) => console.log(err));
  };

  const handleGoogleSignIn = () => {
    // create user with google
    googleSignUp()
      .then((res) => {
        console.log(res.user);

        // navigate after registration
        navigate(location?.state ? location.state : "/");

        MySwal.fire("Success", "Your account created succesfully", "success");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-full flex items-center justify-center py-20 px-4">
      <Helmet>
        <title>Tomatino | Registration</title>
      </Helmet>
      <Card className="max-w-lg w-full md:w-1/2 p-4 md:p-6 shrink-0 shadow-md">
        <form className="space-y-5" onSubmit={handleRegister}>
          <h2 className="text-3xl lg:text-4xl font-toga text-center text-[#191825] pt-6">
            Registration
          </h2>
          <div>
            <Label value="Name" />
            <TextInput
              name="name"
              placeholder="Full Name"
              color="gray"
              sizing="md"
              addon={<MdOutlineTitle size={20} color="#5E718D" />}
              addonPosition="left"
            />
          </div>

          <div>
            <Label value="Photo" />
            <TextInput
              name="photo"
              placeholder="Photo Link"
              color="gray"
              sizing="md"
              addon={<MdAddPhotoAlternate size={20} color="#5E718D" />}
              addonPosition="left"
            />
          </div>

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
          <PrimaryButton>Register</PrimaryButton>
        </form>
        <p className="text-center">or continue with</p>
        <div className="flex justify-center items-center">
          <FcGoogle
            onClick={() => handleGoogleSignIn()}
            className="text-2xl cursor-pointer"
          />
        </div>
        <hr />
        <p className="text-center">
          Already have an account? <br />
          Please{" "}
          <Link to={"/login"}>
            <span className="text-primary hover:underline">Login here</span>
          </Link>
        </p>
      </Card>
      <form></form>
    </div>
  );
};

export default Registration;
