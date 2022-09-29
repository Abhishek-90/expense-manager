import React, { useState } from "react";
import {
  AddTransactionContainer,
  SubmitBtn,
  SubmitBtnWrapper,
  Input,
  TransactionDescriptionWrapper,
  DateWrapper,
  CustomDate,
  CustomSelect,
  SelectWrapper,
  AmountWrapper,
  AmountInput,
} from "./AddTransactions.styled";
import * as endpoint from "../../../Variables/routes";
import * as status from "../../../constants/Status";
// import { useNavigate } from "react-router";

interface ITransactionDetails {
  date: Date | null;
  description: string;
  type: string;
  tag: string;
  amount: string;
}

interface IFormErrors {
  date: boolean;
  description: boolean;
  type: boolean;
  tag: boolean;
  amount: boolean;
}

function AddTransaction() {
  const [transactionDetails, setTransactionDetails] =
    useState<ITransactionDetails>({
      date: null,
      description: "",
      type: "income",
      tag: "salary",
      amount: "",
    });

  const [formErrors, setFormErrors] = useState<IFormErrors>({
    date: false,
    description: false,
    type: false,
    tag: false,
    amount: false,
  });

  // const navigate = useNavigate();

  async function onSubmitClick() {
    if (transactionDetails.date === null) {
      setFormErrors({ ...formErrors, date: true });
      return;
    }

    if (transactionDetails.amount.trim().length === 0) {
      setFormErrors({ ...formErrors, amount: true });
      return;
    }

    if (transactionDetails.description.trim().length === 0) {
      setFormErrors({ ...formErrors, description: true });
      return;
    }

    console.log(transactionDetails);
    try {
      const response = await fetch(endpoint.ADDTRANSACTION, {
        method: status.POST,
        headers: {
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          date: transactionDetails.date,
          type: transactionDetails.type,
          amount: transactionDetails.amount,
          description: transactionDetails.description,
          tag: transactionDetails.tag,
        }),
      });

      console.log(response);

      if (response.status === 200) {
        const json = await response.json();
        console.log(json);
      } else {
        //TODO: Add alert box here to display that Credentials are wrong.
      }
    } catch (error) {}
  }

  function onChangeHandler(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setTransactionDetails({
      ...transactionDetails,
      [e.target.name]: e.target.value,
    });
    setFormErrors({ ...formErrors, [e.target.name]: false });
  }

  return (
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
        <AmountWrapper>
          <AmountInput
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onChangeHandler(e)
            }
            type="text"
            value={transactionDetails.amount}
            name="amount"
            placeholder="Amount(in INR)"
            border={formErrors.amount}
          />
        </AmountWrapper>
        <TransactionDescriptionWrapper>
          <Input
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
  );
}

export default AddTransaction;