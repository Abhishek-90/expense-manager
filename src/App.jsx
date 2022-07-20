import { Routes, Route } from "react-router-dom";
import TransactionState from "./context/transactionState";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Dashboard from "./Components/Dashboard/Dashboard";
import "./index.css";

function App() {
  return (
    <TransactionState>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </TransactionState>
  );
}

export default App;
