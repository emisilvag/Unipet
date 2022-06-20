import React from "react";

export const ItemDetail = ({ data }) => {
  return (
    <div>
      <div>
        <img src={data.image} />
        <h3>{data.article}</h3>
        <p>{data.precio}</p>
      </div>
    </div>
  );
};

export default ItemDetail;
