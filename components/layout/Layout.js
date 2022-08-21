import Footer from "./footer/Footer";
import dynamic from "next/dynamic";
import { useSession } from "next-auth/react";

const Navbar = dynamic(() => import("./navbar/Navbar"), { ssr: false });

function Layout({ children }) {
  const { data: session } = useSession();

  return (
    <div>
      {session && <Navbar />}
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
