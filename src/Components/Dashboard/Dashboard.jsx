import { Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Menu from "../Menu/Menu";
import { Container } from "./Dashboard.styled";

const Dashboard = () => {
  return (
    <Container>
      <Navbar />
      <Menu />
      <Routes>
        <Route exact path="/*" element={<Navbar />} />
      </Routes>
    </Container>
  );
};

export default Dashboard;
