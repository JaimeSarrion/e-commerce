import { useState, useEffect } from "react";
import "./App.css";
import { getAllProducts } from "@finand-edi/shared-logic";
import ProductLists from "./components/product-list/product-list";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getAllItems();
  }, []);

  async function getAllItems() {
    const products = await getAllProducts();
    if (products) {
      setItems(products);
    }
  }
  return (
    <div className="App">
      <header>
        <h1>Nombre de la empresa</h1>
      </header>
      <div>
        <ProductLists items={items} />
      </div>
    </div>
  );
}

export default App;
