import { iProduct } from "../../contexts/products/types";
import Card from "react-bootstrap/Card";
import CardModal from "../CardModal";
import { useState } from "react";

interface props {
   product: iProduct;
}

const CardProduct = ({ product }: props) => {
   const [opemModal, setOpemModal] = useState(false);

   return (
      <>
         <li onClick={() => setOpemModal(!opemModal)}>
            <Card style={{ width: "18rem", border: "none", cursor: "pointer" }}>
               <Card.Img variant="top" src={product.image_url} />
               <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>R$ {product.price}</Card.Text>
               </Card.Body>
            </Card>
         </li>
         <CardModal
            opemModal={opemModal}
            setOpemModal={setOpemModal}
            product={product}
         />
      </>
   );
};

export default CardProduct;
