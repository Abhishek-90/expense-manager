import {
  AddTransactionContainer,
  Container,
  SubmitBtn,
  SubmitBtnWrapper,
  TransactionDescription,
  TransactionDescriptionWrapper,
} from "./AddTransactions.styled";

function AddTransaction() {
  return (
    <Container>
      <AddTransactionContainer>
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
