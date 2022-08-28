import { Container } from "./Dashboard.styled";
import Navbar from "../Navbar/Navbar";
import AddTransaction from "../AddTransactions/AddTransaction";

const Dashboard = () => {
  return (
    <Container>
      <Navbar />
      <AddTransaction/>
    </Container>
  );
};

export default Dashboard;
