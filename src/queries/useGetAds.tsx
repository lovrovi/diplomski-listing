import axios from "../axiosConfig/axiosConfig";
import { useQuery } from "@tanstack/react-query";

type useGetAdsArgsType = {
  pageNum: number;
  pageSize: number;
  sortBy: string;
};

const getAds = (params: useGetAdsArgsType) => {
  return axios.get("/advertisements", { params });
};

function useGetAds(args: useGetAdsArgsType) {
  return useQuery({
    queryFn: () => getAds(args),
    queryKey: ["getAds", args],
    select: (data) => data.data,
    // @ts-expect-error because
    placeholderData: () => {
      return { data: [], pages: 1 };
    },
  });
}

export { useGetAds };
