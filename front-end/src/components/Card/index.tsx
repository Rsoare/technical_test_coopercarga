import { iProduct } from "../../contexts/products/types";
import Card from "react-bootstrap/Card";

interface props {
   product: iProduct;
}

const CardProduct = ({ product }: props) => {
   return (
      <li>
         <Card style={{ width: "18rem", border: "none", cursor: "pointer" }}>
            <Card.Img variant="top" src={product.image_url} />
            <Card.Body>
               <Card.Title>{product.name}</Card.Title>
               <Card.Text>R$ {product.price}</Card.Text>
            </Card.Body>
         </Card>
      </li>
   );
};

export default CardProduct;
