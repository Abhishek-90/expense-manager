import { useNavigate } from "react-router-dom";
import { CustomMenu, CustomNavbar, LogoutBtnWrap, LogoutButton, MenuTitleWrap } from "./Navbar.styled";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <CustomNavbar>
      <MenuTitleWrap>
        <CustomMenu/>
      </MenuTitleWrap>
      <LogoutBtnWrap>
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      </LogoutBtnWrap>
    </CustomNavbar>
  );
};

export default Navbar;
