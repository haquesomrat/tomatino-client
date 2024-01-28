import { Badge, Tabs } from "keep-react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { LuTableProperties } from "react-icons/lu";
import { GiCycle } from "react-icons/gi";
import PrimaryButton from "../../Components/Shared/Buttons/PrimaryButton/PrimaryButton";
import { Helmet } from "react-helmet";
import useTopFoods from "../../hooks/useTopFoods";
import useAuth from "../../hooks/useAuth";

const Food = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const foods = useLoaderData();
  const topFoods = useTopFoods();
  const result = topFoods.find((item) => item._id == id);

  console.log(user?.email == result?.email || user?.email == foods?.email);

  return (
    <div className="px-4 py-10">
      <Helmet>
        <title>Tomatino | {foods?.name || `${result?.name}`}</title>
      </Helmet>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-6">
        <div className="lg:col-span-5">
          <figure>
            <img
              src={foods?.photo || result?.photo}
              height={330}
              className="aspect-video object-cover"
              alt={name}
            />
          </figure>
        </div>
        <div className="lg:col-span-7 space-y-4 py-3 lg:py-0 grid items-end">
          <div className="flex items-center justify-between">
            <Badge size="sm" colorType="light" color="error">
              {foods?.category || result?.category}
            </Badge>
            <p className="font-toga text-2xl sm:text-3xl">
              ${foods?.price || result?.price}
            </p>
          </div>
          <h2 className="text-2xl sm:text-3xl font-toga">
            {foods?.name || result?.name}
          </h2>
          <div className="flex justify-between">
            <p className="sm:text-lg lg:text-xl">
              Origin:{" "}
              <span className="font-toga">
                {foods?.origin || result?.origin}
              </span>
            </p>
            <p className="sm:text-lg lg:text-xl">
              Available:{" "}
              <span className="font-toga">
                {foods?.quantity || result?.quantity || 0}
              </span>
            </p>
          </div>
          <p className="sm:text-lg lg:text-xl">
            Created by:{" "}
            <span className="font-toga">
              {foods?.addby?.addby || result?.addby}
            </span>
          </p>
          {user?.email == result?.email ||
          user?.email == foods?.email ||
          foods?.quantity == 0 ||
          result?.quantity == 0 ? (
            <p className="text-red-600 font-bold text-3xl">Unavailable</p>
          ) : (
            <Link to={`/purchasedFood/${foods?._id || result?._id}`}>
              <PrimaryButton>Order Now</PrimaryButton>
            </Link>
          )}
        </div>
      </div>
      {/* description tab  */}
      <div className="pt-2 lg:pt-4">
        <Tabs
          aria-label="Tabs"
          style="underline"
          borderPosition="bottom"
          iconPosition="left"
        >
          <Tabs.Item title="Procedure" icon={<GiCycle />}>
            {foods?.description?.procedure || result?.description?.procedure}
          </Tabs.Item>
          <Tabs.Item title="Ingredients" icon={<LuTableProperties />}>
            {foods?.description?.ingredients ||
              result?.description?.ingredients}
          </Tabs.Item>
        </Tabs>
      </div>
    </div>
  );
};

export default Food;
