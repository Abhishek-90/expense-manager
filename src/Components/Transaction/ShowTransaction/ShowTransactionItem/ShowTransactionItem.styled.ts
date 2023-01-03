import styled from "styled-components";
import * as colors from "../../../../Shared/constants/themeConstants";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import EditOutlined from "@material-ui/icons/EditOutlined";

export const ActionWrapper = styled.div`
  position: absolute;
  z-index: 10;
  width: 6rem;
  height: 2.5rem;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  right: 0;
  display: flex;
  place-content: space-between;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1.5rem;
  @media (min-width: 769px) {
    &:hover {
      opacity: 0.8;
      background: ${colors.shadowBlue};
      background: linear-gradient(
        90deg,
        ${colors.shadowBlue} 0%,
        ${colors.shadowBlue} 50%
      );
    }
  }

  @media (max-width: 768px) {
    opacity: 1;
    grid-column: 4 / span 1;
    grid-row: 1 / span 2;
    padding-left: 2.5rem;
    padding-right: 0;
    flex-direction: column;
    height: 100%;
    padding-top: 6px;
    padding-bottom: 6px;
  }
`;

export const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 2.5rem;
  position: relative;

  &:hover {
    box-shadow: ${colors.shadowBlue} 0px 3px 8px;
    ${ActionWrapper} {
      opacity: 0.8;
    }
  }

  @media (max-width: 768px) {
    display: grid;
    width: 90%;
    height: auto;
    max-width: 800px;
    grid-template-columns: repeat(6, 25%);
    grid-template-rows: repeat(2, 1fr);
    padding: 8px 16px;
    margin-bottom: 20px;
    border-radius: 20px;
    box-shadow: ${colors.shadowBlue} 0px 3px 8px;
    row-gap: 20px;
    margin-bottom: 25px;
  }
`;

export const DateWrapper = styled.div`
  flex: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: auto;
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
    line-height: 1.5;
  }
`;

export const AmountWrapper = styled.div`
  flex: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    grid-column: 2 / span 1;
    grid-row: 1 / span 1;
    line-height: 1.5;
  }
`;

export const TypeWrapper = styled.div`
  flex: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    grid-column: 3 / span 1;
    grid-row: 1 / span 1;
    line-height: 1.5;
  }
`;

export const DescriptionWrapper = styled.div`
  flex: 1.8;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    grid-column: 1 / span 3;
    grid-row: 2 / span 1;
    justify-content: start;
    line-height: 1.5;
    padding-left: 10px;
  }
`;

export const Delete = styled(DeleteOutline)`
  cursor: pointer;
  color: rgba(255, 0, 0, 0.4);
  &:hover {
    color: rgba(255, 0, 0, 1);
  }
`;

export const Edit = styled(EditOutlined)`
  cursor: pointer;
  color: rgba(0, 0, 0, 0.4);
  &:hover {
    color: #000000;
  }
`;
