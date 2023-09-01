import { createContext, useState } from "react";
import { iDefaultProviderProps } from "../../@Types/globalTypes";
import { iProduct, iProductContext } from "./types";
import { api } from "../../services/api";
import { AxiosResponse } from "axios";

export const ProductContext = createContext({} as iProductContext);

export const ProductProvide = ({ children }: iDefaultProviderProps) => {
   const [products, setProduct] = useState<iProduct[]>([]);

   const getProducts = async () => {
      try {
         const response: AxiosResponse<iProduct[]> = await api.get(`/products`);

         setProduct(response.data);
      } catch (error) {
         console.error(error);
      }
   };

   return (
      <ProductContext.Provider
         value={{
            getProducts,
            products,
         }}
      >
         {children}
      </ProductContext.Provider>
   );
};
