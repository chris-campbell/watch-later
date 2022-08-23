import React from "react";
import DashboardComponent from "../../components/dashboard/DashboardComponent";
import { getSession } from "next-auth/react";

const Dashboard = (session) => {
  return <DashboardComponent session={session} />;
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
