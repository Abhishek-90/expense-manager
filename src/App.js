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
import ModeState from "./context/modeState";


function App() {
  return (
    <div>
      <Router>
          <ModeState>
          <TransactionState>
            <Navbar title="Expense Manager"/>
            <Routes>
              <Route path='/' element={<Login/>}/>
              <Route path='/signup' element={<Signup/>}/>
              <Route path='/dashboard' element={<Dashboard/>}/>
              {/* <Route path='/transactions' element={<Dashboard/>}/> */}
            </Routes>
          </TransactionState>
          </ModeState>
      </Router>
    </div>
  );
}

export default App;
