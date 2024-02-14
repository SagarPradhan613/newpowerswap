import React, { useContext } from "react";
import { styled, keyframes } from "styled-components";
import Flex from "../../../components/Box/Flex";
import { LogoIcon, LogoWithTextIcon } from "../../../components/Svg";
import { MenuContext } from "../context";

interface Props {
  href: string;
}

const blink = keyframes`
  0%,  100% { transform: scaleY(1); }
  50% { transform:  scaleY(0.1); }
`;

const StyledLink = styled("a")`
  display: flex;
  .mobile-icon {
    width: 32px;
    ${({ theme }) => theme.mediaQueries.lg} {
      display: none;
    }
  }
  .desktop-icon {
    width: 160px;
    display: none;
    ${({ theme }) => theme.mediaQueries.lg} {
      display: block;
    }
  }
  .eye {
    animation-delay: 20ms;
  }
  &:hover {
    .eye {
      transform-origin: center 60%;
      animation-name: ${blink};
      animation-duration: 350ms;
      animation-iteration-count: 1;
    }
  }
`;

const DesktopLogoContainer = styled.div`
  @media (max-width: 767px) {
    display: none;
  }

  /* Styles for tablet screens */
  @media (min-width: 768px) and (max-width: 1023px) {
    display: none;
  }

  /* Styles for desktop screens */
  @media (min-width: 1024px) {
    display: block;
  }
`;

const MobLogoContainer = styled.div`
  @media (max-width: 767px) {
    display: block;
  }

  /* Styles for tablet screens */
  @media (min-width: 768px) and (max-width: 1023px) {
    display: block;
  }

  /* Styles for desktop screens */
  @media (min-width: 1024px) {
    display: none;
  }
`;

const Logo: React.FC<React.PropsWithChildren<Props>> = ({ href }) => {
  const { linkComponent } = useContext(MenuContext);
  const isAbsoluteUrl = href.startsWith("http");
  const innerLogo = (
    <>
      {/* <LogoIcon className="mobile-icon" /> */}
      <DesktopLogoContainer>
        <LogoWithTextIcon className="desktop-icon" />
      </DesktopLogoContainer>
      <MobLogoContainer>
        <img style={{ height: "40px" }} src="/images/moblogo.png" alt="mobile logo" />
      </MobLogoContainer>
    </>
  );

  return (
    <Flex alignItems="center">
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} aria-label="Pancake home page">
          {innerLogo}
        </StyledLink>
      ) : (
        <StyledLink href={href} as={linkComponent} aria-label="Pancake home page">
          {innerLogo}
        </StyledLink>
      )}
    </Flex>
  );
};

export default React.memo(Logo);
