import { createContext, useState } from "react";
import { iDefaultProviderProps } from "../../@Types/globalTypes";
import { iProduct, iProductContext } from "./types";
import { api } from "../../services/api";
import { AxiosResponse } from "axios";

export const ProductContext = createContext({} as iProductContext);

export const ProductProvide = ({ children }: iDefaultProviderProps) => {
   const [products, setProduct] = useState<iProduct[]>([]);

   const [search, setSearch] = useState("");

   const getProducts = async () => {
      try {
         const response: AxiosResponse<iProduct[]> = await api.get(`/products`);

         setProduct(response.data);
      } catch (error) {
         console.error(error);
      }
   };

   const searchProducts: iProduct[] = products.filter(
      (product) =>
         search === "" ||
         product.seller
            .toLowerCase()
            .trim()
            .includes(search.toLowerCase().trim()) ||
         search === "" ||
         product.name.toLowerCase().trim().includes(search.toLowerCase().trim())
   );

   return (
      <ProductContext.Provider
         value={{
            getProducts,
            products,
            searchProducts,
            setSearch,
         }}
      >
         {children}
      </ProductContext.Provider>
   );
};
