import { Container } from "./Dashboard.styled";
import Navbar from "../Navbar/Navbar";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const isLoggedIn:boolean = useSelector((state:RootState) => state.authentication.value.isLoggedIn);
  const navigate = useNavigate();

  if(!isLoggedIn) {
    console.log(isLoggedIn);
    navigate('/');
  }

  return (
    <Container>
      <Navbar />
    </Container>
  );
};

export default Dashboard;
