import React from "react";

const Item = ({ info }) => {
  return (
    <a href="">
      <img src={info.image} />
      <p>{info.article}</p>
      <p>{info.precio}</p>
    </a>
  );
};

export default Item;
