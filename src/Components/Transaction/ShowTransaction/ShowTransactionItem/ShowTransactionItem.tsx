import { useDispatch } from "react-redux";
import { DELETE } from "../../../../Shared/constants/Status";
import { OK } from "../../../../Shared/constants/StatusCode";
import { DELETETRANSACTION } from "../../../../Shared/Variables/routes";
import { removeTransaction } from "../../../../store/transactionSlice";
import * as S from "./ShowTransactionItem.styled";

interface IData {
  date: string;
  amount: string;
  description: string;
  _id: string;
  type: string;
}

function ShowTransactionItem({
  transaction,
  setUpdatingTransaction,
  setIsEditing,
}: {
  transaction: IData;
  setUpdatingTransaction: any;
  setIsEditing: any;
}) {
  const dispatch: any = useDispatch();
  const deleteTransaction = async (id: string) => {
    try {
      const response = await fetch(DELETETRANSACTION, {
        method: DELETE,
        headers: {
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          id: id,
        }),
        credentials: "include",
      });
      if (response.status === OK) {
        dispatch(removeTransaction(id));
      } else {
        console.error("Transaction removal Failed.");
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <S.ItemContainer>
      <S.DateWrapper>{transaction.date}</S.DateWrapper>
      <S.AmountWrapper>{transaction.amount}</S.AmountWrapper>
      <S.TypeWrapper>{transaction.type}</S.TypeWrapper>
      <S.DescriptionWrapper>{transaction.description}</S.DescriptionWrapper>
      <S.ActionWrapper>
        <S.Delete onClick={() => deleteTransaction(transaction._id)} />
        <S.Edit
          onClick={() => {
            setIsEditing(true);
            setUpdatingTransaction(transaction);
          }}
        />
      </S.ActionWrapper>
    </S.ItemContainer>
  );
}

export default ShowTransactionItem;
