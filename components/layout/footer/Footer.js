import React from "react";
import styled from "styled-components";
import Link from "next/link";

const FooterContainer = styled.footer`
  border-top: 0.5px solid ${({ theme }) => theme.colors.snow};
  margin-top: 2rem;
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  .footer-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    .developer-link {
      color: ${({ theme }) => theme.colors.snow};
      cursor: pointer;
      letter-spacing: 0.05rem;
      &:hover {
        transition: 200ms ease-in-out;
        color: ${({ theme }) => theme.colors.summerOrange};
      }
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer-wrapper">
        <Link href="https://www.2ndplayer.co">
          <p className="developer-link">Meet the Developer!</p>
        </Link>
      </div>
    </FooterContainer>
  );
};

export default Footer;
