import { useQuery, useMutation, useQueryClient } from "react-query";
import { request } from "../utils/axios-utils";
import axios from "axios";

const fetchSuperHeroes = () => {
  // return axios.get("http://localhost:4000/superheroes");
  return request({ url: "/superheroes" });
};
const addSuperHero = (hero) => {
  // return axios.post(`http://localhost:4000/superheroes`, hero);
  return request({ url: "/superheroes", method: "post", data: hero });
};
export const useSuperHeroesData = (onSuccess, onError) => {
  return useQuery("super-heroes", fetchSuperHeroes, {
    onError,
    onSuccess
    // select: (data) => {
    //   const superHeroNames = data.data.map((hero) => hero.name);
    //   return superHeroNames;
    // }
  });
};

export const useAddSuperHeroData = () => {
  const queryClient = useQueryClient();
  return useMutation(addSuperHero, {
    onSuccess: (data) => {
      queryClient.invalidateQueries("super-heroes");
      queryClient.setQueryData("super-heroes", (oldQueryData) => {
        return {
          ...oldQueryData,
          data: [...oldQueryData.data, data.data]
        };
      });
    }
  });
};
