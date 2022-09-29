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
`

export const AmountWrapper = styled.div`
  flex: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const DescriptionWrapper = styled.div`
  flex: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
`
