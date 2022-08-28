import React from "react";
import DashboardComponent from "../../components/dashboard/DashboardComponent";
import { useInfiniteQuery } from "react-query";
import { getSession } from "next-auth/react";
import axios from "axios";

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const apiUrl = process.env.API_URL;
  const apiKey = process.env.API_KEY;
  const popularURL = `${apiUrl}movie/popular?api_key=${apiKey}&language=en-US&page=`;

  const { data, status, fetchNextPage, hasNextPage } = useInfiniteQuery(
    "infiniteCharacters",
    async ({ pageParam = 1 }) =>
      await axios.get(`${popularURL}${pageParam}`).then(({ data }) => data),
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
