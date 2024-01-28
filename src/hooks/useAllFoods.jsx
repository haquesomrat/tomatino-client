import { useQuery } from "@tanstack/react-query";

const useAllFoods = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["foods"],
    queryFn: async () => {
      const data = await fetch(
        "https://tomatino-fntbxgyr0-haquesomrat.vercel.app/allfoods"
      );
      return await data.json();
    },
  });
  return { data, isLoading };
};

export default useAllFoods;
