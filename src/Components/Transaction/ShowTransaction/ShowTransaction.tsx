import { Container, TableHeader, DateColumnWrapper, AmountColumnWrapper, DescriptionColumnWrapper } from "./ShowTransaction.styled";

const ShowTransaction = () => {
  const transactions = [
    {
      email: "atons@gmail.com",
      date: "2022-09-19",
      type: "expense",
      amount: "22222",
      description: "Test1",
      tag: "Temp",
      __v: 0,
    },
    {
      email: "aton@gmail.com",
      date: "2022-09-19",
      type: "expense",
      amount: "1500",
      description: "Kalsubai Trek",
      tag: "Trip",
      __v: 0,
    },
  ];
  return (
    <Container>
      <TableHeader>
        <DateColumnWrapper>Date</DateColumnWrapper>
        <AmountColumnWrapper>Amount</AmountColumnWrapper>
        <DescriptionColumnWrapper>Description</DescriptionColumnWrapper>
      </TableHeader>
    </Container>
  );
};

export default ShowTransaction;
