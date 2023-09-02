import { useContext, useState } from "react";
import { Button, Container, Form, Navbar } from "react-bootstrap";
import { ProductContext } from "../../contexts/products";

const SearchBar = () => {
   const { setSearch } = useContext(ProductContext);

   const [inputValue, setInputValue] = useState("");

   const submit = (event: { preventDefault: () => void }) => {
      event.preventDefault();

      setSearch(inputValue);
      setInputValue("");
   };

   return (
      <Navbar expand="lg" className="bg-body-tertiary">
         <Container>
            <Form className="d-flex">
               <Form.Control
                  type="search"
                  placeholder="Nome do produto"
                  className="me-2"
                  aria-label="Search"
                  value={inputValue}
                  onChange={(event) => setInputValue(event.target.value)}
               />
               <Button variant="outline-success" onClick={submit}>
                  Search
               </Button>
            </Form>
         </Container>
      </Navbar>
   );
};

export default SearchBar;
