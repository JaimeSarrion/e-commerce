import React from "react";
import { Item } from "../../types/Items";
import * as Styled from "./product-list.styled";
import Product from "../product/product";

interface IProps {
  items: Item[];
}

const ProductList: React.FC<IProps> = ({ items }) => {
  return (
    <Styled.Container>
      {items.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </Styled.Container>
  );
};

export default ProductList;
