import React from "react";
import DashboardComponent from "../../components/dashboard/DashboardComponent";
import { useInfiniteQuery } from "react-query";

const Dashboard = () => {
  const apiUrl = process.env.API_URL;
  const apiKey = process.env.API_KEY;

  const { data, status, fetchNextPage, hasNextPage } = useInfiniteQuery(
    "infiniteCharacters",
    async ({ pageParam = 1 }) =>
      await fetch(
        `${apiUrl}movie/popular?api_key=${apiKey}&language=en-US&page=${pageParam}`
      ).then((result) => result.json()),
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
