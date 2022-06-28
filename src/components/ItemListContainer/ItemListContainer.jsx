import ItemList from "../ItemList/ItemList";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

const collares = [
  {
    id: 1,
    image:
      "https://cdn.lavoz.com.ar/sites/default/files/styles/landscape_565_318/public/nota_periodistica/GPS_mascotas_02_1580822277.jpg",
    article: "Collar Unipet P",
    precio: "UYU $2000",
    category: "p",
  },
  {
    id: 2,
    image:
      "https://cdn.lavoz.com.ar/sites/default/files/styles/landscape_565_318/public/nota_periodistica/GPS_mascotas_02_1580822277.jpg",
    article: "Collar Unipet S",
    precio: "UYU $2500",
    category: "s",
  },
  {
    id: 3,
    image:
      "https://cdn.lavoz.com.ar/sites/default/files/styles/landscape_565_318/public/nota_periodistica/GPS_mascotas_02_1580822277.jpg",
    article: "Collar Unipet M",
    precio: "UYU $3000",
    category: "m",
  },
  {
    id: 4,
    image:
      "https://cdn.lavoz.com.ar/sites/default/files/styles/landscape_565_318/public/nota_periodistica/GPS_mascotas_02_1580822277.jpg",
    article: "Collar Unipet G",
    precio: "UYU $3500",
    category: "g",
  },
];

export default function ItemListContainer({ greeting }) {
  const [data, setData] = useState([]);

  const { categoriaId } = useParams();

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(collares);
      }, 2000);
    });

    if (categoriaId) {
      getData.then((res) =>
        setData(res.filter((collares) => collares.category === categoriaId))
      );
    } else {
      getData.then((res) => setData(res));
    }
  }, [categoriaId]);

  return (
    <div>
      <h1>{greeting}</h1>

      <ItemList data={data} />
    </div>
  );
}
