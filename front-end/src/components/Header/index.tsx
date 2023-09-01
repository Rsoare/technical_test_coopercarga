import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import jordan from "../../assets/jordan.svg";
import snkrs from "../../assets/snkrs.svg";
import { ImgContainer, TextContainer } from "./styled";

const Header = () => {
   return (
      <header>
         <Navbar className="bg-body-tertiary">
            <Container>
               <ImgContainer>
                  <img src={jordan} alt="Logo jordan" />
                  <img src={snkrs} alt="Logo snkrs" />
               </ImgContainer>

               <TextContainer>
                  <span>Ajuda</span>
                  <span>Junte-se a nós</span>
                  <span>Entrar</span>
               </TextContainer>
            </Container>
         </Navbar>
      </header>
   );
};

export default Header;
