import Item from "../Item/Item";
import React from "react";

const ItemList = ({ data = [] }) => {
  return data.map((collares) => <Item key={collares.id} info={collares} />);
};

export default ItemList;
