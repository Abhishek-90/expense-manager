import React, { useState } from "react";
import * as S from "./AddTransactions.styled";
import * as E from "../../../Variables/routes";
import * as status from "../../../constants/Status";

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
  const [isAddingTransaction, setIsAddingTransaction] =
    useState<boolean>(false);

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

    try {
      setIsAddingTransaction(true);
      const response = await fetch(E.ADDTRANSACTION, {
        method: status.POST,
        headers: {
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        credentials: "include",
        body: JSON.stringify({
          date: transactionDetails.date,
          type: transactionDetails.type,
          amount: transactionDetails.amount,
          description: transactionDetails.description,
          tag: transactionDetails.tag,
          authToken: localStorage.getItem("authToken"),
        }),
      });

      setTimeout(() => setIsAddingTransaction(false), 1000);
      if (response.status === 200) {
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
    <S.AddTransactionContainer>
      <S.DateWrapper>
        <S.CustomDate
          name="date"
          type="date"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChangeHandler(e)
          }
          border={formErrors.date}
        ></S.CustomDate>
      </S.DateWrapper>
      <S.SelectWrapper>
        <S.CustomSelect
          name="type"
          placeholder="Type"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            onChangeHandler(e)
          }
          border={formErrors.type}
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </S.CustomSelect>
        {transactionDetails.type === "income" && (
          <S.CustomSelect
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
          </S.CustomSelect>
        )}
        {transactionDetails.type === "expense" && (
          <S.CustomSelect
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
          </S.CustomSelect>
        )}
      </S.SelectWrapper>
      <S.AmountWrapper>
        <S.AmountInput
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChangeHandler(e)
          }
          type="text"
          value={transactionDetails.amount}
          name="amount"
          placeholder="Amount(in INR)"
          border={formErrors.amount}
        />
      </S.AmountWrapper>
      <S.TransactionDescriptionWrapper>
        <S.Input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChangeHandler(e)
          }
          value={transactionDetails.description}
          name="description"
          placeholder="Transaction Description"
          border={formErrors.description}
        />
      </S.TransactionDescriptionWrapper>
      <S.SubmitBtnWrapper>
        <S.SubmitBtn onClick={onSubmitClick} disabled={isAddingTransaction}>
          {!isAddingTransaction ? (
            "Add Transaction"
          ) : (
            <img src={require("./Spinner.gif")} alt="Loading..." />
          )}
        </S.SubmitBtn>
      </S.SubmitBtnWrapper>
    </S.AddTransactionContainer>
  );
}

export default AddTransaction;
