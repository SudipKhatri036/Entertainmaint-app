import { useQuery } from "@tanstack/react-query";
import HomeMovie from "../components/HomeMovie";
import HomeSeries from "../components/HomeSeries";
import { getHomeData } from "../services/apiPublic";
import { toast } from "react-toastify";

function Home() {
  const { data, status, isError } = useQuery({
    queryKey: ["homeData"],
    queryFn: getHomeData,
    onError(error) {
      toast({
        title: "Error getting Lists",
        description: error.message,
        status: "error",
      });
    },
  });

  const movieData = data?.filter((result) => result.type === "movie");
  const tvData = data?.filter((result) => result.type === "tv");

  return (
    <div>
      <HomeMovie results={movieData} status={status} />
      <HomeSeries results={tvData} status={status} />
    </div>
  );
}

export default Home;
