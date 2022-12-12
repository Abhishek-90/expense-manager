import * as S from "./ShowTransactionItem.styled";

interface IData {
  date: string;
  amount: string;
  description: string;
}

function ShowTransactionItem({ date, amount, description }: IData) {
  return (
    <S.ItemContainer>
      <S.DateWrapper>{date}</S.DateWrapper>
      <S.AmountWrapper>{amount}</S.AmountWrapper>
      <S.DescriptionWrapper>{description}</S.DescriptionWrapper>
      <S.ActionWrapper>
        <S.Delete />
        <S.Edit />
      </S.ActionWrapper>
    </S.ItemContainer>
  );
}

export default ShowTransactionItem;
