import React from "react";
import DashboardComponent from "../../components/dashboard/DashboardComponent";
import { useInfiniteQuery } from "react-query";
import { getSession } from "next-auth/react";
import { useSearch } from "../context/searchContext";
import axios from "axios";

const Dashboard = () => {
  const { search } = useSearch();

  const apiUrl = process.env.API_URL;
  const apiKey = process.env.API_KEY;
  const popularURL = `${apiUrl}movie/popular?api_key=${apiKey}&language=en-US&page=`;

  const fetchMovies = async ({ pageParam = 1 }) => {
    let resp;

    try {
      if (search === "") {
        resp = await axios.get(`${popularURL}${pageParam}`);
      } else {
        resp = await axios.get(
          `${apiUrl}search/movie?api_key=${apiKey}&language=en-US&query=${search}&page=${pageParam}`
        );
      }

      return resp.data;
    } catch (error) {
      throw new Error(err);
    }
  };

  const { data, fetchNextPage, hasNextPage, status } = useInfiniteQuery(
    ["search", search],
    fetchMovies,
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.page < lastPage.total_pages) {
          return pages.length + 1;
        }
      },
    }
  );

  const queryConsole = { data, status, fetchNextPage, hasNextPage };

  return <DashboardComponent query={queryConsole} />;
};

export default Dashboard;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
