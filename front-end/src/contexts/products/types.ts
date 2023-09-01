export interface iProductContext {
   getProducts: () => Promise<void>;
   products: iProduct[];
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
