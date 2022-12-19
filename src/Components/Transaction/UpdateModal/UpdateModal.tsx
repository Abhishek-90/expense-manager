import { useState } from "react";
import styled from "styled-components";
import * as AT from "../AddTransactions/AddTransactions.styled";
import Spinner from "../../../Shared/Elements/Spinner";
import * as status from "../../../Shared/constants/Status";
import { useDispatch } from "react-redux";
import * as E from "../../../Shared/Variables/routes";
import * as T from "../../../Shared/Elements/CustomTags";
import { updateTransaction } from "../../../store/transactionSlice";
interface ITransactionDetails {
  date: string | undefined;
  description: string;
  type: string;
  tag: string;
  amount: string;
  _id: string;
}

interface IFormErrors {
  date: boolean;
  description: boolean;
  type: boolean;
  tag: boolean;
  amount: boolean;
}

function UpdateModal({
  setIsEditing,
  transaction,
}: {
  setIsEditing: any;
  transaction: ITransactionDetails;
}) {
  const [transactionDetails, setTransactionDetails] =
    useState<ITransactionDetails>({
      ...transaction,
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

  function onChangeHandler(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setTransactionDetails({
      ...transactionDetails,
      [e.target.name]: e.target.value,
    });
    setFormErrors({ ...formErrors, [e.target.name]: false });
  }

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
      const response = await fetch(E.UPDATETRANSACTION, {
        method: status.PUT,
        headers: {
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        credentials: "include",
        body: JSON.stringify({
          id: transactionDetails._id,
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
        dispatch(
          updateTransaction({
            transaction: json.transaction,
            _id: json.transaction._id,
          })
        );
        setIsEditing(false);
      } else {
        //TODO: Add alert box here to display that Credentials are wrong.
        setIsTransactionFailed(true);
        setMessage("Adding Transaction Failed");
        setTimeout(() => setIsTransactionFailed(false), 5000);
      }
    } catch (error) {}
  }

  return (
    <Container>
      <Content>
        <Header>
          <span>Update Details</span>
          <button onClick={() => setIsEditing(false)}>
            <img src="/images/close.svg" alt="" />
          </button>
        </Header>
        <UpdateSection>
          <AT.CustomDate
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onChangeHandler(e)
            }
            name="date"
            type="date"
            border={formErrors.date}
            value={transactionDetails.date}
          />
          <AT.CustomSelect name="date" border={formErrors.type}>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </AT.CustomSelect>
          {transactionDetails.type === "income" && (
            <AT.CustomSelect
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
            </AT.CustomSelect>
          )}
          {transactionDetails.type === "expense" && (
            <AT.CustomSelect
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
            </AT.CustomSelect>
          )}
          <AT.AmountInput
            name="amount"
            placeholder="Amount(in INR)"
            border={formErrors.amount}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onChangeHandler(e)
            }
            value={transactionDetails.amount}
          />
          <AT.TransactionDescriptionInput
            name="description"
            placeholder="Transaction Description (Max 25 Characters)"
            border={formErrors.description}
            maxLength={25}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onChangeHandler(e)
            }
            value={transactionDetails.description}
          />
          <AT.SubmitBtn onClick={onSubmitClick}>
            {!isAddingTransaction ? "Update" : <Spinner />}
          </AT.SubmitBtn>
          <AT.MessageWrapper>
            {(formErrors.date ||
              formErrors.amount ||
              formErrors.description ||
              isTransactionFailed) && (
              <T.Message isError={true}>{message}</T.Message>
            )}
            {isTransactionSuccessfull && (
              <T.Message isError={false}>{message}</T.Message>
            )}
          </AT.MessageWrapper>
        </UpdateSection>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  border-radius: 10px;
  margin-top: 40px;
  width: 60%;
  max-width: 800%;
  background-color: rgb(253, 244, 244);
  height: fit-content;
  max-width: 800px;

  @media (max-width: 786px) {
    width: 90%;
  }

  @media (max-width: 480px) {
    display: flex;
    width: 90%;
    flex-direction: column;
    justify-content: center;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  font-size: 18px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.6);
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);

  & > button {
    border: none;
    background-color: transparent;
    outline: none;
    border-radius: 50px;
    padding: 4px 6px;
    &:hover {
      background-color: rgba(0, 0, 0, 0.15);
    }

    img,
    svg {
      pointer-events: none;
    }
  }
`;

const UpdateSection = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  padding: 1rem;
  row-gap: 20px;

  @media (min-width: 481px) and (max-width: 786px) {
    width: 90%;
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    display: flex;
    width: 90%;
    flex-direction: column;
    justify-content: center;
  }
`;

export default UpdateModal;
