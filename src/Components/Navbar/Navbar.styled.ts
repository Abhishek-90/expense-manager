import styled from "styled-components";
import * as colors from "../../constants/themeConstants";
import { Button } from "../Elements/Button";

export const CustomNavbar = styled.div`
  width: 100%;
  height: 3rem;
  max-width: 85rem;
  display:flex;
  flex-direction: row;
  align-items:center;
  color: ${colors.black};
  background: ${colors.shadowBlue};
`

export const LogoutButton = styled(Button)`
  height: 2.2rem;
  width: 6rem;
  float: right;
  margin-left: 0.6rem;
`