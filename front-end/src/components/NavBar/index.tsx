import { Container, Navbar } from "react-bootstrap";
import logo from "../../assets/logo.svg";
import { UlStyled } from "./styled";
import { useContext } from "react";
import { ProductContext } from "../../contexts/products";

const NavBar = () => {
   const { setSearch } = useContext(ProductContext);

   const handleButtonClick = (value: string) => {
      setSearch(value);
   };

   return (
      <Navbar style={{ height: "5rem" }}>
         <Container>
            <img src={logo} alt="logo Nike" />
            <UlStyled>
               <li>
                  <p onClick={() => handleButtonClick("Nike")}>Nike</p>
               </li>
               <li>
                  <p onClick={() => handleButtonClick("Adidas")}>Adidas</p>
               </li>
               <li>
                  <p onClick={() => handleButtonClick("Puma")}>Puma</p>
               </li>
               <li>
                  <p onClick={() => handleButtonClick("Jordan")}>Jordan</p>
               </li>
               <li>
                  <p onClick={() => handleButtonClick("Olympikus")}>
                     Olympikus
                  </p>
               </li>
               <li>
                  <p onClick={() => handleButtonClick("Mizuno")}>Mizuno</p>
               </li>
               <li>
                  <p onClick={() => handleButtonClick(" ")}>Todos</p>
               </li>
            </UlStyled>
         </Container>
      </Navbar>
   );
};

export default NavBar;
