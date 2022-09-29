import styled from "styled-components";
import * as colors from "../../../../constants/themeConstants";

export const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 2.5rem;

  &:hover {
    box-shadow: ${colors.shadowBlue} 0px 3px 8px;
  }
`;

export const DateWrapper = styled.div`
  flex: 0.4;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AmountWrapper = styled.div`
  flex: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DescriptionWrapper = styled.div`
  flex: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ActionWrapper = styled.div`
  position: absolute;
  z-index: 10;
  width: 8rem;
  height: 2.5rem;
  opacity: 0;
  transition: opacity 0.2s ease-in-out; 

  &:hover {
    opacity: 0.4;
    background: ${colors.shadowBlue};
    background: linear-gradient(
      90deg,
      ${colors.shadowBlue} 0%,
      ${colors.shadowBlue} 25%
    );
  }
`
