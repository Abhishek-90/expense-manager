import React, { useState } from "react";
import * as S from "./AddTransactions.styled";
import * as E from "../../../Shared/Variables/routes";
import * as status from "../../../Shared/constants/Status";
import * as T from "../../../Shared/Elements/CustomTags";
import Spinner from "../../../Shared/Elements/Spinner";
import { useDispatch } from "react-redux";
import { addTransaction } from "../../../store/transactionSlice";

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
  const [message, setMessage] = useState<String>("");
  const [isTransactionFailed, setIsTransactionFailed] =
    useState<boolean>(false);
  const [isTransactionSuccessfull, setIsTransactionSuccessfull] =
    useState<boolean>(false);
  const dispatch = useDispatch();

  async function onSubmitClick() {
    if (!transactionDetails.date) {
      setFormErrors({ ...formErrors, date: true });
      setMessage("Date is required");
      return;
    }

    if (transactionDetails.amount.trim().length === 0) {
      setFormErrors({ ...formErrors, amount: true });
      setMessage("Amount is required");
      return;
    }

    if (!Number.isInteger(parseInt(transactionDetails.amount))) {
      setFormErrors({ ...formErrors, amount: true });
      setMessage("Enter Valid Amount");
      return;
    }

    if (transactionDetails.description.trim().length === 0) {
      setFormErrors({ ...formErrors, description: true });
      setMessage("Description is required");
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
          amount: parseInt(transactionDetails.amount),
          description: transactionDetails.description,
          tag: transactionDetails.tag,
        }),
      });

      setTimeout(() => setIsAddingTransaction(false), 1000);
      if (response.status === 200) {
        setIsTransactionSuccessfull(true);
        setMessage("Successfully Added!");
        setTimeout(() => setIsTransactionSuccessfull(false), 5000);
        const json = await response.json();
        dispatch(addTransaction(json.transaction));
      } else {
        //TODO: Add alert box here to display that Credentials are wrong.
        setIsTransactionFailed(true);
        setMessage("Adding Transaction Failed");
        setTimeout(() => setIsTransactionFailed(false), 5000);
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
      <S.CustomDate
        name="date"
        type="date"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChangeHandler(e)
        }
        border={formErrors.date}
      />
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
          <option value="travel">Travel/Trips</option>
        </S.CustomSelect>
      )}
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
      <S.TransactionDescriptionInput
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChangeHandler(e)
        }
        value={transactionDetails.description}
        name="description"
        placeholder="Transaction Description (Max 25 Characters)"
        border={formErrors.description}
        maxLength={25}
      />
      <S.SubmitBtn onClick={onSubmitClick} disabled={isAddingTransaction}>
        {!isAddingTransaction ? "Add Transaction" : <Spinner />}
      </S.SubmitBtn>
      <S.MessageWrapper>
        {(formErrors.date ||
          formErrors.amount ||
          formErrors.description ||
          isTransactionFailed) && (
          <T.Message isError={true}>{message}</T.Message>
        )}
        {isTransactionSuccessfull && (
          <T.Message isError={false}>{message}</T.Message>
        )}
      </S.MessageWrapper>
    </S.AddTransactionContainer>
  );
}

export default AddTransaction;
