import { Container, CustomNavbar } from "./NavbarStyled";
import Burger from "../Burger/Burger";

const Navbar = () => {
  return (
    <>
      <Container>
        <CustomNavbar>
          <Burger/>          
        </CustomNavbar>
      </Container>
    </>
  );
};

export default Navbar;
