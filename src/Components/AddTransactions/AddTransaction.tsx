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
  date: Date | null;
  description: string;
  type: string;
  tag: string;
}

interface IFormErrors {
  date: boolean;
  description: boolean;
  type: boolean;
  tag: boolean;
}

function AddTransaction() {
  const [transactionDetails, setTransactionDetails] =
    useState<ITransactionDetails>({
      date: null,
      description: "",
      type: "income",
      tag: "salary",
    });

  const [formErrors, setFormErrors] = useState<IFormErrors>({
    date: false,
    description: false,
    type: false,
    tag: false,
  });

  function onSubmitClick(): void {
    if(transactionDetails.date === null) {
      setFormErrors({...formErrors,date:true})
      return ;
    }
    if(transactionDetails.description.trim().length === 0) {
      setFormErrors({...formErrors, description:true})
      return ;
    }
    console.log(transactionDetails);
  }

  function onChangeHandler(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setTransactionDetails({
      ...transactionDetails,
      [e.target.name]: e.target.value,
    });
    setFormErrors({...formErrors, [e.target.name]:false})
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
            border={formErrors.date}
          ></CustomDate>
        </DateWrapper>
        <SelectWrapper>
          <CustomSelect
            name="type"
            placeholder="Type"
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              onChangeHandler(e)
            }
            border={formErrors.type}
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </CustomSelect>
          {transactionDetails.type === "income" && (
            <CustomSelect
              name="tag"
              placeholder="Tag"
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                onChangeHandler(e)
              }
              border={formErrors.tag}
            >
              <option value="salary">Salary</option>
              <option value="interest">Interest</option>
              <option value="side-income">Side Income</option>
            </CustomSelect>
          )}
          {transactionDetails.type === "expense" && (
            <CustomSelect
              name="tag"
              placeholder="Tag"
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                onChangeHandler(e)
              }
              border={formErrors.tag}
            >
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
            border={formErrors.description}
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
