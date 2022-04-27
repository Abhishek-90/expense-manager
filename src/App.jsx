import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TransactionState from "./context/transactionState";
import ModeState from "./context/modeState";
// import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Login/Login";
// import Signup from "./Components/Signup/Signup";
import LandingPage from "./Components/LandingPage/LandingPage";
import './index.css';

function App() {
  return (
    <Router>
      <ModeState>
        <TransactionState>
            <Routes>
              <Route path="/" element={<Login />}/>
              {/* <Route path="/login" element={<Login />} /> */}
              {/* <Route path="/signup" element={<Signup />} />
              <Route path="/dashboard" element={<Dashboard />} /> */}
              {/* <Route path='/transactions' element={<Dashboard/>}/> */}
            </Routes>
        </TransactionState>
      </ModeState>
    </Router>
  );
}

export default App;
