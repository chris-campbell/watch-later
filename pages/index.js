import { signIn, useSession, getSession } from "next-auth/react";
import Image from "next/image";
import GoogleLogo from "./img/google-logo.svg";
import styled from "styled-components";

const GoogleLoginButton = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  background-color: #f2f2ff;
  color: ${({ theme }) => theme.colors.theaterBlue};
  border: none;
  border-radius: 0.3rem;
  font-size: ${(p) => p.theme.fonts[0]};
  font-weight: 400;
  font-style: normal;
  &:hover {
    transition: 300ms ease-in-out;
    opacity: 0.9;
  }
  &:active {
    transform: scale(0.98);
  }
`;

const LoginContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-wrapper {
    p {
      margin-bottom: 1rem;
      span {
        font-weight: 900;
        color: #f2f2f2;
      }
    }
  }
`;

export default function Home() {
  const { data: session } = useSession();

  return (
    <LoginContainer>
      {!session && (
        <div className="login-wrapper">
          <p>
            Login to <span>WatchLater</span>
          </p>

          <GoogleLoginButton
            onClick={() =>
              signIn("google", {
                callbackUrl: process.env.DASHBOARD_CALLBACK_URL,
              })
            }
          >
            <Image src={GoogleLogo} width={30} height={30} alt="Google logo" />
            <span>Sign in with Google</span>
          </GoogleLoginButton>
        </div>
      )}
    </LoginContainer>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/movies",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
