import { FaBars } from "react-icons/fa";
import Logo from "../../images/school_logo.jpeg";
import {
  Nav,
  NavContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavLinks,
  Navitem,
} from "../NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavContainer>
          <NavLogo to="/">
            <img style={{ height: "60px", width: "60px" }} src={Logo} />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <Navitem>
              <NavLinks to="utangulizi">Utangulizi</NavLinks>
            </Navitem>
            <Navitem>
              <NavLinks to="aina">Aina Bora </NavLinks>
            </Navitem>
            <Navitem>
              <NavLinks to="matunzo">Matunzo</NavLinks>
            </Navitem>
            <Navitem>
              <NavLinks to="kuhusu sisi">Kuhusu sisi</NavLinks>
            </Navitem>
          </NavMenu>
          {/* <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn> */}
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;
