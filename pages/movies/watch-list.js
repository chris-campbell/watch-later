import React from "react";
import WatchLaterComponent from "../../components/watchList/WatchLaterComponent";
import { getSession } from "next-auth/react";

const watchList = () => {
  return <WatchLaterComponent />;
};

export default watchList;

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
