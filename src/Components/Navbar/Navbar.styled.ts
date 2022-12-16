import styled from "styled-components";
import * as colors from "../../Shared/constants/themeConstants";
import { Button } from "../../Shared/Elements/Button";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

export const CustomNavbar = styled.div`
  width: 100%;
  height: 3.3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${colors.black};
  background: ${colors.shadowBlue};
  padding-right: 20px;

  @media (max-width: 768px) {
    padding-right: 10px;
  }
`;

export const LogoutButton = styled(Button)`
  height: 2.2rem;
  width: 6rem;
  float: right;
  justify-self: end;
  margin: auto 0;
  @media (max-width: 480px) {
    display: none;
  }
`;

export const MenuTitleWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  width: auto;
`;

export const CustomMenuBtn = styled(MenuIcon)`
  cursor: pointer;
  margin: auto 10px;
`;

export const Title = styled.a`
  font-weight: 600;
  font-size: 18px;
  text-decoration: none;
  color: black;

  &:hover {
    color: black;
  }
`;

export const CustomMenu = styled.div<{ isMenuOpen: boolean }>`
  position: fixed;
  background: ${colors.blue};
  width: 14rem;
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  text-align: end;
  transform: ${(props) =>
    props.isMenuOpen ? `translate(0)` : `translate(-100%)`};
  transition: transform 0.5s;
  max-width: 300px;
  z-index: 999;

  li {
    list-style: none;
    padding: 15px 25px;
    color: ${colors.white};
    cursor: pointer;
    letter-spacing: 0.15rem;
    font-size: 1rem;

    &:hover {
      font-weight: 600;
    }
  }

  @keyframes openMenu {
    0% {
      transform: translate(-100%);
    }
    50% {
      transform: translate(-50%);
    }
    100% {
      transform: translate(0);
    }
  }
`;

export const CustomClose = styled(CloseIcon)`
  cursor: pointer;
  color: white;
  height: 50px;
  margin-left: 20px;
  margin-top: 10px;
`;
