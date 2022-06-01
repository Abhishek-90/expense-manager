// import { useContext } from "react";
// import { Link } from "react-router-dom";
// import { useNavigate } from 'react-router';
// import { modeContext } from "../../context/modeContext";
// import { transactionContext } from '../../context/transactionContext'
import { Container, CustomNavbar } from "./NavbarStyled";
import { UL, ListItem } from "../Elements/CustomTags";
const Navbar = (props) => {
    // const navigate = useNavigate();

    // const contextMode:any = useContext(modeContext);
    // const { darkMode, handleDarkMode } = contextMode;

    // const contextTransaction:any = useContext(transactionContext);
    // const { setuserStatement } = contextTransaction;   
    
    // const handleLogout = ()=>{
    //     localStorage.removeItem('authToken');
    //     setuserStatement([]);
    //     navigate('/');
    // }

    // const handleMode = () => {
    //   handleDarkMode();
    // }

  return (
    <Container>
      <CustomNavbar>
        <UL>
          <ListItem>Dashboard</ListItem>
          <ListItem>Loans</ListItem>
          <ListItem>Investments</ListItem>
        </UL>
      </CustomNavbar>
    </Container>
  );
};

export default Navbar;
