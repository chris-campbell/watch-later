import React, { useState } from "react";
import Image from "next/image";
import Search from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import { signOut, useSession } from "next-auth/react";
import { useSelector, useDispatch } from "react-redux";
import { removeAllMovies } from "../../../redux/slices/watcherSlices";
import { persistor } from "../../../redux/store";
import Link from "next/link";
import PeekABooSearchBar from "./peekABooSearchBar/PeekABooSearchBar";
import * as S from "./styles/styles";

const Navbar = () => {
  const [toggle, setoggle] = useState(false);
  const dispatch = useDispatch();
  const watchList = useSelector((state) => state.value).length;

  const toggleBar = () => {
    setoggle(!toggle);
  };

  const purge = async () => {
    await persistor.purge();

    dispatch(removeAllMovies());
  };

  const { data: session, loading } = useSession();
  const { user } = session;

  const signoutUser = () => {
    purge();
    signOut();
  };

  return (
    <>
      <S.Nav className="nav">
        <div className="nav-wrapper">
          <span className="nav-logo">
            <Link href="/movies">WL</Link>
          </span>

          <div className="movie-searcher">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleBar}
            >
              <Search />
            </IconButton>
          </div>

          <div className="primary-nav">
            <div className="primary-nav-wrapper">
              <div className="watch-list">
                <Link href="/movies/watch-list">Watch list</Link>
                <span className="watch-list-count">{watchList}</span>
              </div>

              <S.Dropdown className="dropdown">
                <Image src={user.image} width={50} height={50} />
                <div className="dropdown-menu">
                  <ul>
                    <li onClick={() => signoutUser()}>Logout</li>
                    <li onClick={() => purge()}>Clear List</li>
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
