// import Image from "next/image";
import { Empty } from "keep-react";
import SecondaryBtn from "../../Components/Shared/Buttons/SecondaryBtn/SecondaryBtn";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="pt-20">
      <Empty>
        <Empty.Image>
          <img
            src="https://www.pushengage.com/wp-content/uploads/2022/09/404-Page-Design-Examples.png"
            alt="404"
          />
        </Empty.Image>
        <Empty.Title>
          <span className="font-toga text-primary">404 Not Found</span>
        </Empty.Title>
        <Empty.Description>
          Sorry! but the page you are looking for does not exist, have been
          removed, name changed or is temporarily unavailable
        </Empty.Description>
        <Link to={"/"}>
          <SecondaryBtn>Back to Home</SecondaryBtn>
        </Link>
      </Empty>
    </div>
  );
};

export default ErrorPage;
