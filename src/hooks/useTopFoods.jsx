import { useEffect, useState } from "react";

const useTopFoods = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("https://tomatino-fntbxgyr0-haquesomrat.vercel.app/topfoods")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  return foods;
};

export default useTopFoods;
