import styled from "styled-components";
import * as C from "../../../Shared/constants/themeConstants";
import { Button } from "../../../Shared/Elements/Button";

export const AddTransactionContainer = styled.div`
  width: 60%;
  min-width: 550px;
  height: 15rem;
  min-height: 15rem;
  border: none;
  border-radius: 20px;
  box-shadow: ${C.shadowBlue} 0px 3px 8px;
  margin-top: 20px;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  padding: 1rem;
`;

export const TransactionDescriptionWrapper = styled.div`
  grid-column: 2 / span 2;
  grid-row: 2 / span 1;
  display: flex;
  align-items: center;
`;

export const Input = styled.input<{ border: boolean }>`
  height: 70%;
  width: 100%;
  padding: 0.8rem;
  outline: none;
  font-size: 0.9rem;
  border: ${(props) => (!props.border ? `none` : `1.3px solid ${C.error}`)};
  border-radius: 5px;
  box-shadow: ${C.shadowBlue} 0px 3px 8px;
`;

export const AmountInput = styled(Input)`
  width: 85%;
`;

export const AmountWrapper = styled.div`
  grid-column: 1 / span 1;
  grid-row: 2 / span 1;
  display: flex;
  align-items: center;
`;

export const SubmitBtnWrapper = styled.div`
  grid-column: 3 / span 1;
  grid-row: 3 / span 1;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const SubmitBtn = styled(Button)`
  width: 90%;
  height: 60%;
`;

export const DateWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CustomDate = styled(Input)<{ border: boolean }>`
  height: 60%;
  width: 70%;
  border-radius: 5px;
  padding: 12px;
  border: ${({ border }) => (!border ? `none` : `1.3px solid ${C.error}`)};
`;

export const SelectWrapper = styled.div`
  grid-column: 2 / span 2;
  grid-row: 1 / span 1;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CustomSelect = styled.select<{ border: boolean }>`
  border-radius: 5px;
  height: 60%;
  width: 45%;
  padding: 10px;
  box-shadow: ${C.shadowBlue} 0px 3px 8px;
  outline: none;
  border: ${(props) => (!props.border ? `none` : `1.3px solid ${C.error}`)};
`;

export const MessageWrapper = styled.div`
  grid-column: 1 / span 2;
  grid-row: 3 / span 1;
  display: flex;
  justify-content: end;
  align-items: center;
`;
