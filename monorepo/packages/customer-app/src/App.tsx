import { useState, useEffect } from "react";
import "./App.css";
import { getAllProducts } from "@finand-edi/shared-logic";
import ProductLists from "./components/product-list/product-list";
import Header from "./components/header/header";

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
      <Header />
      <ProductLists items={items} />
    </div>
  );
}

export default App;
