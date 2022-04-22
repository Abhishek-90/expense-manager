import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TransactionState from "./context/transactionState";
import ModeState from "./context/modeState";
import Navbar from "./Components/LandingPage/Navbar";
import Dashboard from "./Components/LandingPage/Dashboard";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";

function App() {
  return (
    <Router>
      <ModeState>
        <TransactionState>
          <Navbar title="Expense Manager" />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            {/* <Route path='/transactions' element={<Dashboard/>}/> */}
          </Routes>
        </TransactionState>
      </ModeState>
    </Router>
  );
}

export default App;
