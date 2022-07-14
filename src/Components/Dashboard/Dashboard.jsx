import { Routes, Route } from "react-router-dom";
import Transaction from "../Transactions/Transaction";
import Navbar from "../Navbar/Navbar";
import {AddTransaction} from "../Transactions/AddTransaction";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/*" element={<Transaction />} />
        <Route exact path="/loans" element={<Transaction />} />
        <Route
          exact
          path="/investment"
          element={<Transaction />}
        />
      </Routes>
    </>
  );
};

export default Dashboard;
