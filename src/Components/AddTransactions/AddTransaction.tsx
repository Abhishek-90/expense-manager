import React from "react";
import {
  AddTransactionContainer,
  Container,
  SubmitBtn,
  SubmitBtnWrapper,
  TransactionDescription,
  TransactionDescriptionWrapper,
} from "./AddTransactions.styled";

function AddTransaction() {
  return (
    <Container>
      <AddTransactionContainer>
        <TransactionDescriptionWrapper>
          <TransactionDescription placeholder="Transaction Description" />
          <SubmitBtnWrapper>
            <SubmitBtn>Add Transaction</SubmitBtn>
          </SubmitBtnWrapper>
        </TransactionDescriptionWrapper>
      </AddTransactionContainer>
    </Container>
  );
}

export default AddTransaction;
