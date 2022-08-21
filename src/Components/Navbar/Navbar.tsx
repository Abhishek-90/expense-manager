import { useNavigate } from "react-router-dom";
import {
  CustomMenu,
  CustomMenuBtn,
  CustomNavbar,
  LogoutBtnWrap,
  LogoutButton,
  MenuTitleWrap,
  Title,
  TitleWrap,
} from "./Navbar.styled";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <CustomNavbar>
      <MenuTitleWrap>
        <CustomMenuBtn />
        <TitleWrap>
            <Title href="/dashboard/*">Expense Manager</Title>
        </TitleWrap>
      </MenuTitleWrap>
      <CustomMenu>
        <ul>
          <li>DashBoard</li>
          <li>Visuals</li>
          <li>Loans</li>
          <li>Investments</li>
        </ul>
      </CustomMenu>
      <LogoutBtnWrap>
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      </LogoutBtnWrap>
    </CustomNavbar>
  );
};

export default Navbar;
