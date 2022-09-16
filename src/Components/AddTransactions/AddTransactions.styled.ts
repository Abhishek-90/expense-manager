import styled from "styled-components";
import * as colors from "../../constants/themeConstants";
import { Button } from "../Elements/Button";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const AddTransactionContainer = styled.div`
  width: 60%;
  min-width: 550px;
  height: 15rem;
  border: none;
  border-radius: 20px;
  box-shadow: ${colors.shadowBlue} 0px 3px 8px;
  margin-top: 20px;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  padding: 1rem;
`;

export const TransactionDescriptionWrapper = styled.div`
  grid-column: 1 / span 3;
  grid-row: 2 / span 1;
  display: flex;
  align-items: center;
`;
export const TransactionDescription = styled.input`
  height: 70%;
  width: 100%;
  padding: 0.8rem;
  outline: none;
  font-size: 0.9rem;
  border: none;
  border-radius: 5px;
  box-shadow: ${colors.shadowBlue} 0px 3px 8px;
`;

export const SubmitBtnWrapper = styled.div`
  grid-column: 2 / span 2;
  grid-row: 3 / span 1;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const SubmitBtn = styled(Button)`
  width: 50%;
  height: 60%;
`;

export const DateWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CustomDate = styled(TransactionDescription)`
  height: 60%;
  width: 70%;
  border-radius: 5px;
  padding: 12px;
`; 

export const SelectWrapper = styled.div`
  grid-column: 2 / span 2;
  grid-row: 1 / span 1;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CustomSelect = styled.select`
  border: none;
  border-radius: 5px;
  height: 60%;
  width: 45%;
  padding: 10px;
  box-shadow: ${colors.shadowBlue} 0px 3px 8px;
  outline: none;
`;
