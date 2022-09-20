import { Container } from "./Dashboard.styled";
import Navbar from "../Navbar/Navbar";
import Transaction from "../Transaction/Transaction";
import { Routes, Route } from "react-router-dom";
import Loans from "../Loans/Loans";
import Investments from "../Investments/Investments";
import Visuals from "../Visuals/Visuals";

const Dashboard = () => {
  return (
    <Container>
      <Navbar />
      <Routes>
        <Route path="/" element={<Transaction />} />
        <Route path="/loans" element={<Loans />} />
        <Route path="/visuals" element={<Visuals />} />
        <Route path="/investments" element={<Investments />} />
      </Routes>
    </Container>
  );
};

export default Dashboard;
