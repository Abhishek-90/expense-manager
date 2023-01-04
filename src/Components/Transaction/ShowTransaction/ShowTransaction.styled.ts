import styled from "styled-components";
import * as colors from "../../../Shared/constants/themeConstants";

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  margin-top: 50px;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    & > h2 {
      color: rgba(0, 0, 0, 0.6);
    }
  }
`;

export const Content = styled.div`
  width: 60%;
  height: fit-content;
  box-shadow: ${colors.shadowBlue} 0px 3px 8px;

  @media (max-width: 760px) {
    width: 100%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: none;
  }
`;

export const TableHeader = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const DateColumnWrapper = styled.div`
  height: 100%;
  flex: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AmountColumnWrapper = styled.div`
  height: 100%;
  flex: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DescriptionColumnWrapper = styled.div`
  height: 100%;
  flex: 1.8;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NoTransaction = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(0, 0, 0, 0.6);
`;
