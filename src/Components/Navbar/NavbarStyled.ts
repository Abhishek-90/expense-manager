import styled from "styled-components";
import * as colors from "../../constants/themeConstants"
import { NavLink } from "react-router-dom"

export const CustomNavbar = styled.div`
  width: 100%;
  height: 3rem;
  max-width: 85rem;
  display:flex;
  flex-direction: row;
  align-items:center;
  color: ${colors.black};
  background: ${colors.shadowBlue};

  @media screen and (max-width: 700px) {
    display:none;
  }
`
export const CustomLink = styled(NavLink)`
  text-decoration: none;
  font-size: 1.1rem;
  color: ${colors.gray};
  margin-right: 1.4rem;
  margin-left: 0.6rem;
  font-weight: 600

  &:hover{
    color: ${colors.black};
  }

  &.active {
    color: ${colors.black};
  }
`