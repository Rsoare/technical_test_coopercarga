import { Card, Placeholder } from "react-bootstrap";
import download from "../../assets/download.svg";
const SkeletonCard = () => {
   return (
      <Card style={{ width: "18rem" }}>
         <Card.Img variant="top" src={download} />
         <Card.Body>
            <Placeholder as={Card.Title} animation="glow">
               <Placeholder xs={6} />
            </Placeholder>
            <Placeholder as={Card.Text} animation="glow">
               <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
               <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
               <Placeholder xs={8} />
            </Placeholder>
         </Card.Body>
      </Card>
   );
};

export default SkeletonCard;
