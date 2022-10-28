import styled from "styled-components";
import * as colors from "../../../Shared/constants/themeConstants";

export const Container = styled.div`
  width: 60%;
  height: fit-content;
  margin-top: 2rem;
  box-shadow: ${colors.shadowBlue} 0px 3px 8px;

  @media only screen and (max-width: 700px) {
    width: 95%;
  }
`;

export const TableHeader = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
`;

export const DateColumnWrapper = styled.div`
  height: 100%;
  flex: 0.6;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const AmountColumnWrapper = styled.div`
  height: 100%;
  flex: 0.4;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const DescriptionColumnWrapper = styled.div`
  height: 100%;
  flex: 1.8;
  display: flex;
  justify-content: center;
  align-items: center;
`