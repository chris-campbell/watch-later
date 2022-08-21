import React from "react";
import { getSession } from "next-auth/react";

const dashboard = (session) => {
  console.log(session);

  return <div>dashboard</div>;
};

export default dashboard;

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
