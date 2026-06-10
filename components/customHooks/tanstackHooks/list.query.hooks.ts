import { GetLandingPageList } from "@/api/functions/list.api";
import { useQuery } from "@tanstack/react-query";


interface LandingPageList{}


export const useLandingPageList = () => {

  return useQuery<LandingPageList>({
    queryKey: ["PRODUCTS"],
    queryFn: GetLandingPageList,
    
  });
};
