import styled from "styled-components";
import * as colors from "../../constants/themeConstants"

export const Container = styled.div`
  width: 100vw;
  heigth: 100vh;
  display: flex;
  justify-content: center;
`

export const CustomNavbar = styled.div`
  width: 100%;
  height: 3rem;
  background-color: yellow;
  max-width: 85rem;
  display:flex;

  @media screen and (max-width: 700px) {
    display:none;
  }
`

export const UL = styled.ul`
  color: ${colors.white};
  margin-top: 1.5rem;
`

export const ListItem = styled.li`
  color: ${colors.white};
  margin-right: 3.5rem;
  font-size: 1.4rem;
`