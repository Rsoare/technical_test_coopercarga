import { ProductProvide } from "./contexts/products";
import Router from "./routes";
import { GlobalReset } from "./styles/GlobalReset";

function App() {
   return (
      <>
         <GlobalReset />
         <ProductProvide>
            <Router />
         </ProductProvide>
      </>
   );
}

export default App;
