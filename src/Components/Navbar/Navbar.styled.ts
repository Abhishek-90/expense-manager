import styled from "styled-components";
import * as colors from "../../constants/themeConstants";

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