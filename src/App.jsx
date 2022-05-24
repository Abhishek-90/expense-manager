import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TransactionState from "./context/transactionState";
import ModeState from "./context/modeState";
import Login from "./Components/Login/Login";
import './index.css';

function App() {
  return (
    <Router>
      <ModeState>
        <TransactionState>
            <Routes>
              <Route exact path="/" element={<Login />}/>
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
