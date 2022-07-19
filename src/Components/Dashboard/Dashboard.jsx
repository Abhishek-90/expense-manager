import { Routes, Route } from "react-router-dom";
import Transaction from "../Transactions/Transaction";
import Navbar from "../Navbar/Navbar";
import Menu from "../Menu/Menu";
// import {AddTransaction} from "../Transactions/AddTransaction";
import { MainContainer, Container } from "./Dashboard.styled";

const Dashboard = () => {
  return (
    <MainContainer>
      <Container>
        <Navbar />
        <Menu />
        <Routes>
          <Route exact path="/*" element={<Transaction />} />
          <Route exact path="/loans" element={<Transaction />} />
          <Route exact path="/investment" element={<Transaction />} />
        </Routes>
      </Container>
    </MainContainer>
  );
};

export default Dashboard;
