import styled from "styled-components";
import * as colors from "../../constants/themeConstants";
import { Button } from "../Elements/Button";
import MenuIcon from '@material-ui/icons/Menu';

export const CustomNavbar = styled.div`
  width: 100%;
  height: 3rem;
  max-width: 85rem;
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

export const CustomMenu = styled(MenuIcon)`
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