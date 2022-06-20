import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const collares = {
  id: 1,
  image:
    "https://cdn.lavoz.com.ar/sites/default/files/styles/landscape_565_318/public/nota_periodistica/GPS_mascotas_02_1580822277.jpg",
  article: "Collar Unipet P",
  precio: "UYU $2000",
};

export const ItemDetailContainer = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(collares);
      }, 2000);
    });

    getData.then((res) => setData(res));
  }, []);
  return <ItemDetail data={data} />;
};

export default ItemDetailContainer;
