import { useState, useEffect } from "react";
import "./App.css";
import { getAllProducts, getCategories } from "@finand-edi/shared-logic";
import ProductLists from "./components/product-list/product-list";
import Header from "./components/header/header";
import CategoriesMenu from "./components/categories-menu/categories-menu";
import { capitalizeFirstLetterInArray } from "./utils/functions";
import { Item } from "./types/Items";

function App() {
  const [items, setItems] = useState<Item[]>([]);
  const [categories, setCategories] = useState<{ label: string; id: string }[]>(
    []
  );

  useEffect(() => {
    getAllItems();
    getAllCategories();
  }, []);

  async function getAllItems() {
    const products = await getAllProducts();
    if (products) {
      setItems(products);
    }
  }
  async function getAllCategories() {
    const categories = await getCategories();
    if (categories) {
      const newCategories = capitalizeFirstLetterInArray(categories) || [];
      setCategories(newCategories);
    }
  }

  async function getByCategory(
    category: string,
    orderBy: "asc" | "desc" = "desc"
  ) {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${category}?=${orderBy}`
      );
      const products = await response.json();
      setItems(products);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleOnClickCategory(category: string) {
    if (category === "all") {
      getAllItems();
    } else {
      getByCategory(category);
    }
  }

  return (
    <div className="App">
      <Header />
      <CategoriesMenu categories={categories} onSelect={handleOnClickCategory} />
      <ProductLists items={items} />
    </div>
  );
}

export default App;
