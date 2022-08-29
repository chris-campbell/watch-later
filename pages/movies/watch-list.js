import React from "react";
import WatchLater from "../../components/watchList/WatchLater";
import { getSession } from "next-auth/react";

const watchListPage = () => {
  return <WatchLater />;
};

export default watchListPage;

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
