import React from "react";
import Header from "../../components/header/header";
import CategoriesMenu from "../../components/categories-menu/categories-menu";
import ProductLists from "../../components/product-list/product-list";
import useHome from "./useHome";

const HomePage: React.FC = () => {
  const { categories, handleOnClickCategory, isAscending, handleSort, items } =
    useHome();

  return (
    <>
      <Header />
      <CategoriesMenu
        categories={categories}
        onSelect={handleOnClickCategory}
        isAscending={isAscending}
        onSort={handleSort}
      />
      <ProductLists items={items} />
    </>
  );
};

export default HomePage;
