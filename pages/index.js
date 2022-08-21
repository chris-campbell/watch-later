import { signIn, useSession, getSession } from "next-auth/react";
export default function Home() {
  const { data: session } = useSession();

  return (
    <div>
      {!session && (
        <>
          Not signed in <br />
          <button
            onClick={() =>
              signIn("google", {
                callbackUrl: process.env.DASHBOARD_CALLBACK_URL,
              })
            }
          >
            Sign in
          </button>
        </>
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
