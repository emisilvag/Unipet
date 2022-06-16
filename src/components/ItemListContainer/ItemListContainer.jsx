import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import React, { useState, useEffect } from "react";

const collares = [
  {
    id: 1,
    image:
      "https://cdn.lavoz.com.ar/sites/default/files/styles/landscape_565_318/public/nota_periodistica/GPS_mascotas_02_1580822277.jpg",
    article: "Collar Unipet P",
  },
  {
    id: 2,
    image:
      "https://cdn.lavoz.com.ar/sites/default/files/styles/landscape_565_318/public/nota_periodistica/GPS_mascotas_02_1580822277.jpg",
    article: "Collar Unipet S",
  },
  {
    id: 3,
    image:
      "https://cdn.lavoz.com.ar/sites/default/files/styles/landscape_565_318/public/nota_periodistica/GPS_mascotas_02_1580822277.jpg",
    article: "Collar Unipet M",
  },
  {
    id: 4,
    image:
      "https://cdn.lavoz.com.ar/sites/default/files/styles/landscape_565_318/public/nota_periodistica/GPS_mascotas_02_1580822277.jpg",
    article: "Collar Unipet G",
  },
];

export default function ItemListContainer({ greeting }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(collares);
      }, 2000);
    });
    getData.then((res) => setData(res));
  }, []);

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemCount stock={5} initial={1} />
      <ItemList data={data} />
    </div>
  );
}
