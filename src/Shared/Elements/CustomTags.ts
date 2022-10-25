import styled from "styled-components";
import { Link } from "react-router-dom";
import * as C from "../constants/themeConstants";

export const H1 = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`

export const H3 = styled.h3`
  font-size: 1.5rem;
  margin-top: 1.3rem;
`

export const UL = styled.ul`
  margin-top: 1.5rem;
`

export const ListItem = styled.li`
  margin-right: 3.5rem;
  font-size: 1.4rem;
`

export const CustomLink = styled(Link)`
  text-decoration: none;
`

export const Message = styled.p<{isError:boolean}>`
  padding: 0;
  margin: 0;
  color: ${(props) => props.isError ? C.error:C.success};
`;