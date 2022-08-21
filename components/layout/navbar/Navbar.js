import React from "react";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";

import * as S from "./styles/styles";

const Navbar = () => {
  const { data: session, loading } = useSession();
  const { user } = session;

  return (
    <S.Nav className="nav">
      <div className="nav-wrapper">
        <span className="nav-logo">WL</span>

        <div className="primary-nav">
          <div className="primary-nav-wrapper">
            <div className="watch-list">
              Watch list
              <span className="watch-list-count">11</span>
            </div>

            <S.Dropdown className="dropdown">
              <Image src={user.image} width={50} height={50} />
              <div className="dropdown-menu">
                <ul>
                  <li onClick={() => signOut()}>Logout</li>
                </ul>
              </div>
            </S.Dropdown>
          </div>
        </div>
      </div>
    </S.Nav>
  );
};

export default Navbar;
