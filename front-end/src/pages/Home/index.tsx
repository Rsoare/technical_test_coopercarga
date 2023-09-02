import { useContext, useEffect } from "react";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import { ProductContext } from "../../contexts/products";
import CardProduct from "../../components/Card";
import { Container } from "react-bootstrap";
import { UlStyled } from "./styled";
import SkeletonCard from "../../components/skeletonCard";
import SearchBar from "../../components/SearchBar";

const HomePage = () => {
   const { searchProducts, getProducts } = useContext(ProductContext);

   useEffect(() => {
      getProducts();
   }, []);

   return (
      <>
         <Header />
         <NavBar />
         <SearchBar />
         <main>
            <Container style={{ marginTop: "1rem" }}>
               <section>
                  <UlStyled>
                     {searchProducts.length !== 0 ? (
                        searchProducts.map((product) => (
                           <CardProduct key={product.id} product={product} />
                        ))
                     ) : (
                        <>
                           <SkeletonCard />
                           <SkeletonCard />
                           <SkeletonCard />
                        </>
                     )}
                  </UlStyled>
               </section>
            </Container>
         </main>
      </>
   );
};

export default HomePage;
