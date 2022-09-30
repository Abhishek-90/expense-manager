import {
  ItemContainer,
  DateWrapper,
  AmountWrapper,
  DescriptionWrapper,
  ActionWrapper,
  Delete,
  Edit
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
      <ActionWrapper>
        <Delete/>
        <Edit/>
      </ActionWrapper>

    </ItemContainer>
  );
}

export default ShowTransactionItem;
