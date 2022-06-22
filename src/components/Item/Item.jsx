import React from "react";
import { Link } from "react-router-dom";

const Item = ({ info }) => {
  return (
    <Link to={`/detalle/${info.id}`}>
      <img src={info.image} />
      <p>{info.article}</p>
      <p>{info.precio}</p>
    </Link>
  );
};

export default Item;
