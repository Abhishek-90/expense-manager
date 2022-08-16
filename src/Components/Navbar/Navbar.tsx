import { CustomNavbar,LogoutButton } from "./Navbar.styled";
import { removeAuthToken } from "../../store/slices/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(removeAuthToken());
    navigate("/");  
  }

  return (
    <CustomNavbar>
      <div className="item"></div>
      <div className="item"></div>
      <LogoutButton onClick={handleLogout}>Logout</LogoutButton >
    </CustomNavbar>
  )
}

export default Navbar