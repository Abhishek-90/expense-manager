import AddTransaction from "./AddTransactions/AddTransaction"
import { Container } from "./Transaction.styled"

const Transaction = () => {
  return (
    <Container>
      <AddTransaction />
    </Container>
  )
}

export default Transaction