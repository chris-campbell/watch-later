import React from "react";
import WatchLater from "../../components/watchLater/WatchLater";
import { getSession } from "next-auth/react";

const watchListPage = ({ session }) => {
  return <WatchLater session={session} />;
};

export default watchListPage;

export async function getServerSideProps(context) {
  try {
    const session = await getSession(context);

    return {
      props: { session },
    };
  } catch (error) {
    console.log({ error });
  }
}
