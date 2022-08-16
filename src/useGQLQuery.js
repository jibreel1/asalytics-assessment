import { useQuery } from "react-query";
import { request } from "graphql-request";

export const useGQLQuery = (key, query) => {
   const endpoint = "https://analytics-api.herokuapp.com/analytics";

   const fetchData = async () => await request(endpoint, query);
   return useQuery(key, fetchData);
};
