import React from "react";
import { Item } from "../../types/Items";
import * as Styled from "./product.styled";

interface IProps {
  item: Item;
}

const Product: React.FC<IProps> = ({ item }) => {
  return (
    <Styled.Container className="container" key={item.id}>
      <img src={item.image} alt={item.title} width="150" height="150" />
      <p>{item.title}</p>
      <h2 className="price">{item.price}€</h2>
      <button className="add-to-cart-button">Add to Cart</button>
    </Styled.Container>
  );
};

export default Product;
