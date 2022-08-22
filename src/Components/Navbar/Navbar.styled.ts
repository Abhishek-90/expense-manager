import styled from "styled-components";
import * as colors from "../../constants/themeConstants";
import { Button } from "../Elements/Button";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@mui/icons-material/Close';

export const CustomNavbar = styled.div`
  width: 100%;
  height: 3rem;
  display:flex;
  align-items:center;
  justify-content: space-between;
  color: ${colors.black};
  background: ${colors.shadowBlue};
`

export const LogoutButton = styled(Button)`
  height: 2.2rem;
  width: 6rem;
  float: right;
  margin-right: 0.6rem;
  justify-self: end;
`

export const LogoutBtnWrap = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
`

export const MenuTitleWrap = styled(LogoutBtnWrap)`
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const CustomMenuBtn = styled(MenuIcon)`
  cursor: pointer;
  margin: 15px;
`

export const TitleWrap = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  align-items: center;
`

export const Title = styled.a`
  font-weight: 600;
  font-size: 20px;
  text-decoration: none;
  color: black;

  &:hover {
    color: black;
  }
`

export const CustomMenu = styled.div<{isMenuOpen}>`
  position: fixed;
  background: ${colors.blue};
  width: 20%;
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  text-align: end;
  transform: ${props => props.isMenuOpen ? `translate(0)`:`translate(-100%)`};
  transition: transform 0.5s;

  li {
    list-style: none;
    padding: 15px 25px;
    color: ${colors.white};
    cursor: pointer;
    letter-spacing: 3px;

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
  margin-right: 20px;
  margin-top: 10px;
`;

export const CloseWrap = styled.div`
  text-align: end;
`;