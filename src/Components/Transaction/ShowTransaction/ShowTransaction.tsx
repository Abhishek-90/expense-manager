import { useEffect, useState } from "react";
import { GET } from "../../../Shared/constants/Status";
import { ITransactionState } from "../../../Shared/types/transactionData";
import { GETTRANSACTION } from "../../../Shared/Variables/routes";
import * as S from "./ShowTransaction.styled";
import ShowTransactionItem from "./ShowTransactionItem/ShowTransactionItem";
import { useDispatch, useSelector } from "react-redux";
import { getTransaction } from "../../../store/transactionSlice";

const ShowTransaction = () => {
  let transactions = useSelector((state: any) => state.transaction);
  const dispatch: any = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
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
      } catch (error: any) {
        console.log(error.message);
      }
    }
    getTransactions();
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading && <img src="/images/spinner.svg" alt="" />}
      <S.NoTransaction>
        {transactions.length === 0 && <h2>You don't have any Transactions</h2>}
      </S.NoTransaction>
      <S.Container>
        {transactions.length > 0 && (
          <>
            <S.TableHeader>
              <S.DateColumnWrapper>Date</S.DateColumnWrapper>
              <S.AmountColumnWrapper>Amount</S.AmountColumnWrapper>
              <S.DescriptionColumnWrapper>
                Description
              </S.DescriptionColumnWrapper>
            </S.TableHeader>
            {transactions.map((item: ITransactionState) => {
              return (
                <ShowTransactionItem
                  key={item._id}
                  date={item.date}
                  amount={item.amount}
                  description={item.description}
                  id={item._id}
                />
              );
            })}
          </>
        )}
      </S.Container>
    </>
  );
};

export default ShowTransaction;
