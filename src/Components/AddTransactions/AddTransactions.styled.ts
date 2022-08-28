import styled from "styled-components";
import * as colors from "../../constants/themeConstants";
import { Button } from "../Elements/Button";


export const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
`;

export const AddTransactionContainer = styled.div`
  width: 60%;
  min-width: 550px;
  height: 150px;
  border: 1px black solid;
  border-radius: 20px;
  margin-top: 20px;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
`;

export const TransactionDescriptionWrapper = styled.div`
  grid-column: 2/ span 2;
  grid-row: 2/ span 1;
  padding: 6px;
`
export const TransactionDescription = styled.input`
  height: 100%;
  width: 100%;
  padding: 0.6rem;
  outline:none;
  font-size: 0.9rem; 
  border: none;
  box-shadow: ${colors.shadowBlue} 0px 3px 8px;
`

export const SubmitBtnWrapper = styled.div`
  grid-column: 3/span 1;
  grid-row: 3/span 1;
  background: orange;
`

export const SubmitBtn = styled(Button)`
  width: 50%;
  height: 100%;
`