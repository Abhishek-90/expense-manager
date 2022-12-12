import styled from "styled-components";
import * as colors from "../../../../Shared/constants/themeConstants";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import EditOutlined from "@material-ui/icons/EditOutlined";

export const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 2.5rem;
  position: relative;

  &:hover {
    box-shadow: ${colors.shadowBlue} 0px 3px 8px;
  }
`;

export const DateWrapper = styled.div`
  flex: 0.6;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AmountWrapper = styled.div`
  flex: 0.4;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DescriptionWrapper = styled.div`
  flex: 1.8;
  display: flex;
  justify-content: center;
  align-items: center;
`;

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

  &:hover {
    opacity: 0.4;
    background: ${colors.shadowBlue};
    background: linear-gradient(
      90deg,
      ${colors.shadowBlue} 0%,
      ${colors.shadowBlue} 50%
    );
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

  &:hover {
    color: #000000;
  }
`;
