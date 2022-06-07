import React from "react";
import { Routes, Route } from "react-router-dom";
import Transaction from "../Transactions/Transaction";
import Navbar from "../Navbar/Navbar";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Routes>
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
