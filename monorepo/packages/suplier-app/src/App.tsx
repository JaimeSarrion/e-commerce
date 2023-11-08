import { useEffect, useState } from "react";
import { getAllProducts } from "@finand-edi/shared";
import "./App.css";
import ProductTable from "./components/products-table/products-table";
import { Item } from "./types/Items";


function App() {
  const [items, setItems] = useState<Item[]>([]);

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
      <ProductTable 
        items={items}
        itemsPerPage={10}
      />
    </div>
  );
}

export default App;
