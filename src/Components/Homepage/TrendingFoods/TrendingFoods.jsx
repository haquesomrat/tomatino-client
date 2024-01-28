import FoodCard from "../../AllFoods/FoodCard/FoodCard";
import SecondaryBtn from "../../Shared/Buttons/SecondaryBtn/SecondaryBtn";
import { GiArmoredBoomerang } from "react-icons/gi";
import { Link } from "react-router-dom";
import useTopFoods from "../../../hooks/useTopFoods";

const TrendingFoods = () => {
  const foods = useTopFoods();
  // console.log(foods);

  return (
    <div className="py-8 md:py-12 px-4">
      <h2 className="font-toga text-2xl md:text-4xl lg:text-5xl text-center pb-2">
        Most Trendy Foods
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-4 lg:gap-6 py-6 lg:mb-4">
        {foods.slice(0, 6).map((food) => (
          <FoodCard key={food._id} food={food}></FoodCard>
        ))}
      </div>
      <div className="text-center ">
        <Link to={"/allfoods"}>
          <SecondaryBtn>
            <span className="pr-2">See More </span>
            <GiArmoredBoomerang />
          </SecondaryBtn>
        </Link>
      </div>
    </div>
  );
};

export default TrendingFoods;
