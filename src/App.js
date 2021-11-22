import "./App.css";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Signup from "./Components/Signup";
import Dashboard from "./Components/Dashboard";
import TransactionState from "./context/transactionState";

function App() {
  return (
    <div>
      <Router>
        <Navbar title="Expense Manager"/>
          <TransactionState>
            <Routes>
              <Route path='/' element={<Login/>}/>
              <Route path='/signup' element={<Signup/>}/>
              <Route path='/dashboard' element={<Dashboard/>}/>
            </Routes>
          </TransactionState>
      </Router>
    </div>
  );
}

export default App;
