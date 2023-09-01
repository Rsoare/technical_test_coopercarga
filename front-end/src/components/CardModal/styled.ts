import { styled } from "styled-components";

export const ModalContainer = styled.div`
   display: flex;
   flex-direction: row;

   img {
      width: 25rem;
      height: 38rem;
      object-fit: cover;
   }
`;

export const DetailsModal = styled.div`
   display: flex;
   flex-direction: column;
   padding: 1rem;
   gap: 2rem;
`;

export const TypeStyled = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-evenly;

   p {
      font-size: 1.1rem;
      font-weight: 600;
   }
`;

export const PriceStyled = styled.span`
   font-size: 1.5rem;
   font-weight: 600;
`;

export const SizeStyled = styled.span`
   display: flex;
   gap: 1rem;
   span {
      display: flex;
      align-items: center;
      justify-content: center;
      border: solid 2px #f7f7f7;
      width: 3rem;
      height: 3rem;
      border-radius: 4px;
      font-weight: 600;
      font-size: 1rem;
   }
   .sizeNotExist {
      font-size: 1rem;
      font-weight: 600;
      width: 20rem;
   }
`;

export const DescriptionStyled = styled.span`
   font-size: 1.2rem;
   font-weight: 600;
   P {
      padding-top: 0.5rem;
      line-height: 1.7rem;
      font-weight: 400;
   }
`;
