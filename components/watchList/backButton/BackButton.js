import React from "react";
import Link from "next/link";
import { ArrowBack } from "@mui/icons-material";

// BackButton styles
import * as S from "./styles/styles";

const BackButton = () => {
  return (
    <S.BackButtonContainer>
      <Link href="/movies">
        <a className="back-btn">
          <ArrowBack /> Back to search
        </a>
      </Link>
    </S.BackButtonContainer>
  );
};

export default BackButton;
