import { Helmet } from "react-helmet";
import HeroSlider from "../../Components/Homepage/Hero/HeroSlider";
import TrendingFoods from "../../Components/Homepage/TrendingFoods/TrendingFoods";
import BookATable from "../../Components/Homepage/BookATable/BookATable";
import Reviews from "../../Components/Homepage/Reviews/Reviews";

const Homepage = () => {
  return (
    <div>
      <Helmet>
        <title>Tomatino | Homepage</title>
      </Helmet>
      {/* <h2>This is Homepage</h2> */}
      <HeroSlider />
      <TrendingFoods />
      <BookATable />
      <Reviews />
    </div>
  );
};

export default Homepage;
