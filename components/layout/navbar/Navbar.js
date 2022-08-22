import React, { useState } from "react";
import Image from "next/image";
import Search from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import { signOut, useSession } from "next-auth/react";

import * as S from "./styles/styles";
import PeekABooSearchBar from "./peekABooSearchBar/PeekABooSearchBar";

const Navbar = () => {
  const [toggle, setoggle] = useState(false);

  const toggleBar = () => {
    setoggle(!toggle);
  };

  const { data: session, loading } = useSession();
  const { user } = session;

  return (
    <>
      <S.Nav className="nav">
        <div className="nav-wrapper">
          <span className="nav-logo">WL</span>

          <div className="movie-searcher">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Search onClick={toggleBar} />
            </IconButton>
          </div>

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
      <PeekABooSearchBar toggle={toggle} />
    </>
  );
};

export default Navbar;
