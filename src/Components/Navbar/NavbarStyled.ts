import styled from "styled-components";
import * as colors from "../../constants/themeConstants"
import { Link } from "react-router-dom"

export const Container = styled.div`
  width: 100vw;
  heigth: 100vh;
  display: flex;
  justify-content: center;
`

export const CustomNavbar = styled.div`
  width: 100%;
  height: 3rem;
  // background-color: yellow;
  max-width: 85rem;
  display:flex;
  flex-direction: row;
  align-items:center;
  color: ${colors.black};

  @media screen and (max-width: 700px) {
    display:none;
  }
`
export const CustomLink = styled(Link)`
  text-decoration: none;
  font-size: 1.1rem;
  color: ${colors.black};
  margin-right: 1.4rem;
  margin-left: 0.6rem;
  font-weight: 600

  &:hover {
    color:${colors.black};
  }
`