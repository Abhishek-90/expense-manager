import {
  AddTransactionContainer,
  Container,
  SubmitBtn,
  SubmitBtnWrapper,
  TransactionDescription,
  TransactionDescriptionWrapper,
  DateWrapper, CustomDate
} from "./AddTransactions.styled";

function AddTransaction() {
  return (
    <Container>
      <AddTransactionContainer>
        <DateWrapper>
          <CustomDate type="date"></CustomDate>
        </DateWrapper>
        <TransactionDescriptionWrapper>
          <TransactionDescription placeholder="Transaction Description" />
        </TransactionDescriptionWrapper>
        <SubmitBtnWrapper>
          <SubmitBtn>Add Transaction</SubmitBtn>
        </SubmitBtnWrapper>
      </AddTransactionContainer>
    </Container>
  );
}

export default AddTransaction;
