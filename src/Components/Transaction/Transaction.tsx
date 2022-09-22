import AddTransaction from "./AddTransactions/AddTransaction"
import ShowTransaction from "./ShowTransaction/ShowTransaction"
import { Container } from "./Transaction.styled"

const Transaction = () => {
  return (
    <Container>
      <AddTransaction />
      <ShowTransaction />
    </Container>
  )
}

export default Transaction