import { useEffect } from "react";
import { GET } from "../../../Shared/constants/Status";
import { GETTRANSACTION } from "../../../Shared/Variables/routes";
import * as S from "./ShowTransaction.styled";
import ShowTransactionItem from "./ShowTransactionItem/ShowTransactionItem";

const ShowTransaction = () => {
  const transactions = [
    {
      _id: "63418dc8e52687a600c66192",
      email: "atons@gmail.com",
      date: "2022-10-08",
      type: "expense",
      amount: "500",
      description: "Chinchoti Waterfall",
      tag: "trips",
      __v: 0,
    },
    {
      _id: "6341910d6f3335c4098ed77f",
      email: "atons@gmail.com",
      date: "2022-10-08",
      type: "expense",
      amount: "500",
      description: "Chinchoti Waterfall",
      tag: "trips",
      __v: 0,
    },
    {
      _id: "6344016c03e78c16a4221732",
      email: "atons@gmail.com",
      date: "2022-10-11",
      type: "expense",
      amount: "2000",
      description: "Temp2",
      tag: "salary",
      __v: 0,
    },
    {
      _id: "6344035003e78c16a4221734",
      email: "atons@gmail.com",
      date: "2022-10-11",
      type: "expense",
      amount: "2000",
      description: "Temp2",
      tag: "salary",
      __v: 0,
    },
    {
      _id: "6344124a03e78c16a4221747",
      email: "atons@gmail.com",
      date: "2022-10-11",
      type: "expense",
      amount: "2000",
      description: "Temp Temp",
      tag: "salary",
      __v: 0,
    },
  ];

  useEffect(() => {
    fetch(GETTRANSACTION, {
      method: GET,
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      credentials: "include",
    }).then((response: any) => {
      response.json().then((json) => {
        console.log(json.statement);
      });
    });
  }, []);

  return (
    <S.Container>
      <S.TableHeader>
        <S.DateColumnWrapper>Date</S.DateColumnWrapper>
        <S.AmountColumnWrapper>Amount</S.AmountColumnWrapper>
        <S.DescriptionColumnWrapper>Description</S.DescriptionColumnWrapper>
      </S.TableHeader>
      {transactions.map((item, key) => {
        return (
          <ShowTransactionItem
            key={key}
            date={item.date}
            amount={item.amount}
            description={item.description}
          />
        );
      })}
    </S.Container>
  );
};

export default ShowTransaction;
