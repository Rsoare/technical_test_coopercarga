import { Button, Modal } from "react-bootstrap";
import { iProduct } from "../../contexts/products/types";
import {
   DescriptionStyled,
   DetailsModal,
   ModalContainer,
   PriceStyled,
   SizeStyled,
   TypeStyled,
} from "./styled";

interface props {
   opemModal: boolean;
   setOpemModal: React.Dispatch<React.SetStateAction<boolean>>;
   product: iProduct;
}
const CardModal = ({ opemModal, setOpemModal, product }: props) => {
   return (
      <Modal show={opemModal} onHide={() => setOpemModal(!opemModal)} size="lg">
         <ModalContainer>
            <img src={product.image_url} alt={product.name} />

            <DetailsModal>
               <Modal.Title>{product.name}</Modal.Title>
               <p>{product.type}</p>

               <TypeStyled>
                  <p>{product.seller}</p>
                  <p>{product.sport}</p>
               </TypeStyled>

               <PriceStyled> R$ {product.price}</PriceStyled>

               <span>Tamanho</span>

               <SizeStyled>
                  {product.sizes.length !== 0 ? (
                     product.sizes.map((size) => <span key={size}>{size}</span>)
                  ) : (
                     <span className="sizeNotExist">
                        Nenhum tamanho disponivel no momento{" "}
                     </span>
                  )}
               </SizeStyled>

               <DescriptionStyled>
                  Detalhes do produto: <p>{product.details}</p>
               </DescriptionStyled>
            </DetailsModal>
         </ModalContainer>
         <Modal.Footer>
            <Button
               variant="secondary"
               onClick={() => setOpemModal(!opemModal)}
            >
               Close
            </Button>
         </Modal.Footer>
      </Modal>
   );
};

export default CardModal;
