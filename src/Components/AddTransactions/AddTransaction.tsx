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
  CustomSelect,
  SelectWrapper,
} from "./AddTransactions.styled";

interface ITransactionDetails {
  date: Date|null;
  description: string;
  type: string;
  tag: string;
}

function AddTransaction() {
  const [transactionDetails, setTransactionDetails] =
    useState<ITransactionDetails>({
      date: null,
      description: "",
      type: "income",
      tag: "",
    });

  function onSubmitClick(): void {
    console.log(transactionDetails);
  }

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement>) {
    setTransactionDetails({
      ...transactionDetails,
      [e.target.name]: e.target.value,
    });
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
        <SelectWrapper>
          <CustomSelect name="type" placeholder="Type" onChange={(e:React.ChangeEvent<HTMLSelectElement>) => onChangeHandler(e)}>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </CustomSelect>
          {transactionDetails.type === "income" && (
            <CustomSelect placeholder="Tag">
              <option value="salary">Salary</option>
              <option value="interest">Interest</option>
              <option value="side-income">Side Income</option>
            </CustomSelect>
          )}
          {transactionDetails.type === "expense" && (
            <CustomSelect placeholder="Tag">
              <option value="medical">Medical</option>
              <option value="entertainment">Entertainment</option>
              <option value="investment">Investment</option>
              <option value="food">Food</option>
              <option value="clothing">Clothing</option>
              <option value="luxury">Luxury</option>
              <option value="trips">Travel/Trips</option>
            </CustomSelect>
          )}
        </SelectWrapper>
        <TransactionDescriptionWrapper>
          <TransactionDescription
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onChangeHandler(e)
            }
            value={transactionDetails.description}
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
