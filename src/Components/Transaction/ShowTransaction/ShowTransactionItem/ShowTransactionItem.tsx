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
  id: string;
}

function ShowTransactionItem({ id, date, amount, description }: IData) {
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
      <S.DateWrapper>{date}</S.DateWrapper>
      <S.AmountWrapper>{amount}</S.AmountWrapper>
      <S.DescriptionWrapper>{description}</S.DescriptionWrapper>
      <S.ActionWrapper>
        <S.Delete onClick={() => deleteTransaction(id)} />
        <S.Edit />
      </S.ActionWrapper>
    </S.ItemContainer>
  );
}

export default ShowTransactionItem;
