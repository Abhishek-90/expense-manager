import { useEffect, useState } from "react";
import { GET } from "../../../Shared/constants/Status";
import { ITransactionState } from "../../../Shared/types/transactionData";
import { GETTRANSACTION } from "../../../Shared/Variables/routes";
import * as S from "./ShowTransaction.styled";
import ShowTransactionItem from "./ShowTransactionItem/ShowTransactionItem";
import { useDispatch, useSelector } from "react-redux";
import { getTransaction } from "../../../store/transactionSlice";

const ShowTransaction = ({
  setUpdatingTransaction,
  setIsEditing,
}: {
  setUpdatingTransaction: any;
  setIsEditing: any;
}) => {
  let localTransactions = useSelector((state: any) => state.transaction);
  const dispatch: any = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function getTransactions() {
      try {
        const response: any = await fetch(GETTRANSACTION, {
          method: GET,
          headers: {
            "Content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          credentials: "include",
        });
        const json = await response.json();
        dispatch(getTransaction(json.statement));
        setTimeout(() => setIsLoading(false), 2000);
      } catch (error: any) {
        console.log(error.message);
      }
    }
    getTransactions();
  }, []);

  return (
    <S.Container>
      {isLoading && (
        <div>
          <img src="/spinner.svg" alt="" />
          <h2>Fetching Results...</h2>
        </div>
      )}
      {!isLoading &&
        (localTransactions.length === 0 || localTransactions === undefined) && (
          <S.NoTransaction>
            <h2>You don't have any Transactions</h2>
          </S.NoTransaction>
        )}
      {!isLoading && localTransactions.length > 0 && (
        <S.Content>
          <S.TableHeader>
            <S.DateColumnWrapper>Date</S.DateColumnWrapper>
            <S.AmountColumnWrapper>Amount</S.AmountColumnWrapper>
            <S.AmountColumnWrapper>Type</S.AmountColumnWrapper>
            <S.DescriptionColumnWrapper>Description</S.DescriptionColumnWrapper>
          </S.TableHeader>
          {localTransactions.map((item: ITransactionState) => {
            return (
              <ShowTransactionItem
                key={item._id}
                transaction={item}
                setUpdatingTransaction={setUpdatingTransaction}
                setIsEditing={setIsEditing}
              />
            );
          })}
        </S.Content>
      )}
    </S.Container>
  );
};

export default ShowTransaction;
