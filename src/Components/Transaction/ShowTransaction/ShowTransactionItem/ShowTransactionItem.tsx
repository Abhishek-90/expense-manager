import {
  ItemContainer,
  DateWrapper,
  AmountWrapper,
  DescriptionWrapper,
} from "./ShowTransactionItem.styled";

interface IData {
  date: string;
  amount: string;
  description: string;
}

function ShowTransactionItem({ date, amount, description }: IData) {
  return (
    <ItemContainer>
      <DateWrapper>{date}</DateWrapper>
      <AmountWrapper>{amount}</AmountWrapper>
      <DescriptionWrapper>{description}</DescriptionWrapper>
    </ItemContainer>
  );
}

export default ShowTransactionItem;
