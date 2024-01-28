import FoodCard from "../../Components/AllFoods/FoodCard/FoodCard";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { useEffect, useState } from "react";

const AllFoods = () => {
  const data = useLoaderData();
  const [foods, setFoods] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const [currentPage, setCurrentPage] = useState(0);

  // console.log(foods);

  // pagination
  const totalItems = foods ? filteredData?.length : data.length;
  // console.log(filteredData.length, data.length);
  const itemsPerPage = 9;
  const numberOfPages = Math.ceil(totalItems / itemsPerPage);

  const pages = [...Array(numberOfPages).keys()];

  useEffect(() => {
    fetch(
      `https://tomatino-fntbxgyr0-haquesomrat.vercel.app/allfoods?page=${currentPage}&size=${itemsPerPage}&search=${foods}`
    )
      .then((res) => res.json())
      .then((result) => {
        // console.log("pagination console", result);
        // setFilteredData(result);
        if (result) {
          setFilteredData(result);
        } else {
          setFilteredData(data);
        }
      });
  }, [currentPage, itemsPerPage, foods, data]);

  return (
    <div className="py-10 lg:px-0 px-4">
      <Helmet>
        <title>Tomatino | Foods</title>
      </Helmet>
      <div className="flex flex-col-reverse md:flex-row items-center justify-between">
        <h2 className="py-6 font-semibold text-xl lg:text-2xl text-center">
          Foods Available : {filteredData?.length}
        </h2>
        <input
          placeholder="Search foods"
          className="border px-4 py-3 rounded-lg"
          onKeyUp={(e) => {
            setFoods(e.target.value);
            setCurrentPage(0);
          }}
          type="text"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-4 lg:gap-6">
        {filteredData?.map((food, i) => (
          <FoodCard food={food} key={i}></FoodCard>
        ))}
      </div>
      {/* <p className="text-center pt-3">Current Page: {currentPage}</p> */}
      <div className="tm-pagination py-8 text-center space-x-4 flex justify-center">
        <button
          onClick={() => currentPage > 0 && setCurrentPage(currentPage - 1)}
          className="text-lg h-10 w-10 flex items-center justify-center font-toga border border-primary rounded-full"
        >
          <IoArrowBack />
        </button>
        {pages.map((page) => (
          <button
            onClick={() => setCurrentPage(page)}
            className={`p-3 h-10 w-10 flex items-center justify-center font-toga border border-primary rounded-full
              ${currentPage === page && "bg-primary/70 text-white"}`}
            key={page}
          >
            {page}
          </button>
        ))}
        <button
          onClick={() =>
            currentPage < pages.length - 1 && setCurrentPage(currentPage + 1)
          }
          className="text-lg h-10 w-10 flex items-center justify-center font-toga border border-primary rounded-full"
        >
          <IoArrowForward />
        </button>
      </div>
    </div>
  );
};

export default AllFoods;
