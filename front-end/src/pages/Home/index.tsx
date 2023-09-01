import { useContext, useEffect } from "react";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import { ProductContext } from "../../contexts/products";
import CardProduct from "../../components/Card";
import { Container } from "react-bootstrap";
import { UlStyled } from "./styled";

const HomePage = () => {
   const { products, getProducts } = useContext(ProductContext);

   useEffect(() => {
      getProducts();
   }, []);

   return (
      <>
         <Header />
         <NavBar />
         <main>
            <Container>
               <section>
                  <UlStyled>
                     {products.map((product) => (
                        <CardProduct key={product.id} product={product} />
                     ))}
                  </UlStyled>
               </section>
            </Container>
         </main>
      </>
   );
};

export default HomePage;
