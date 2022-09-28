import styled from "styled-components";
import * as colors from "../../../constants/themeConstants";

export const Container = styled.div`
  width: 70%;
  height: 40%;
  margin-top: 2rem;
  box-shadow: ${colors.shadowBlue} 0px 3px 8px;
`;

export const TableHeader = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
`;

export const DateColumnWrapper = styled.div`
  height: 100%;
  flex: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const AmountColumnWrapper = styled.div`
  height: 100%;
  flex: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const DescriptionColumnWrapper = styled.div`
  height: 100%;
  flex: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
`