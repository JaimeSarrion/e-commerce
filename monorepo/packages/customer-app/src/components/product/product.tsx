import React from "react";
import { Item } from "../../types/Items";
import * as Styled from "./product.styled";


interface IProps {
  item: Item;
}

const Product: React.FC<IProps> = ({ item }) => {
  return (
    <Styled.Container className="container" key={item.id}>
      <img src={item.image} alt={item.title} width="100" height="100" />
      <p>{item.title}</p>
      <p>Precio: ${item.price}</p>
    </Styled.Container>
  );
};

export default Product;
