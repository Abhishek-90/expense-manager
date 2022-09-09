import React, { useState } from "react";
import {
  AddTransactionContainer,
  Container,
  SubmitBtn,
  SubmitBtnWrapper,
  TransactionDescription,
  TransactionDescriptionWrapper,
  DateWrapper,
  CustomDate,
} from "./AddTransactions.styled";

interface ITransactionDetails {
  date: Date;
  description: string;
}

function AddTransaction() {
  const [transactionDetails, setTransactionDetails] =
    useState<ITransactionDetails>({ date: new Date(), description: "" });

  function onSubmitClick(): void {
    console.log(transactionDetails);
  }

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setTransactionDetails({ ...transactionDetails, [e.target.name]: e.target.value });
  }

  return (
    <Container>
      <AddTransactionContainer>
        <DateWrapper>
          <CustomDate
            name="date"
            type="date"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onChangeHandler(e)
            }
          ></CustomDate>
        </DateWrapper>
        <TransactionDescriptionWrapper>
          <TransactionDescription
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onChangeHandler(e)
            }
            name="description"
            placeholder="Transaction Description"
          />
        </TransactionDescriptionWrapper>
        <SubmitBtnWrapper>
          <SubmitBtn onClick={onSubmitClick}>Add Transaction</SubmitBtn>
        </SubmitBtnWrapper>
      </AddTransactionContainer>
    </Container>
  );
}

export default AddTransaction;
