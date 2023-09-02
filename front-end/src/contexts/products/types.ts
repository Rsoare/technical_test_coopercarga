export interface iProductContext {
   getProducts: () => Promise<void>;
   products: iProduct[];
   searchProducts: iProduct[];
   setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export interface iProduct {
   id: string;
   name: string;
   image_url: string;
   type: string;
   price: number;
   seller: string;
   sport: string;
   details: string;
   createdAt: string;
   updatedAt: string;
   sizes: string[];
}
