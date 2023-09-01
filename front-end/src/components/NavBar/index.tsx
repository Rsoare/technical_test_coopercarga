import { Container, Navbar } from "react-bootstrap";
import logo from "../../assets/logo.svg";
import { UlStyled } from "./styled";

const NavBar = () => {
   return (
      <Navbar style={{ height: "5rem" }}>
         <Container>
            <img src={logo} alt="logo Nike" />
            <UlStyled>
               <li>
                  <p>Nike</p>
               </li>
               <li>
                  <p>Adidas</p>
               </li>
               <li>
                  <p>Puma</p>
               </li>
               <li>
                  <p>Jordan</p>
               </li>
               <li>
                  <p>Olympikus</p>
               </li>
               <li>
                  <p>Mizuno</p>
               </li>
            </UlStyled>
         </Container>
      </Navbar>
   );
};

export default NavBar;
