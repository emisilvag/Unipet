import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router";

const collares = [
  {
    id: 1,
    image:
      "https://cdn.lavoz.com.ar/sites/default/files/styles/landscape_565_318/public/nota_periodistica/GPS_mascotas_02_1580822277.jpg",
    article: "Collar Unipet P",
    precio: 2000,
    category: "p",
  },
  {
    id: 2,
    image:
      "https://cdn.lavoz.com.ar/sites/default/files/styles/landscape_565_318/public/nota_periodistica/GPS_mascotas_02_1580822277.jpg",
    article: "Collar Unipet S",
    precio: 2500,
    category: "s",
  },
  {
    id: 3,
    image:
      "https://cdn.lavoz.com.ar/sites/default/files/styles/landscape_565_318/public/nota_periodistica/GPS_mascotas_02_1580822277.jpg",
    article: "Collar Unipet M",
    precio: 3000,
    category: "m",
  },
  {
    id: 4,
    image:
      "https://cdn.lavoz.com.ar/sites/default/files/styles/landscape_565_318/public/nota_periodistica/GPS_mascotas_02_1580822277.jpg",
    article: "Collar Unipet G",
    precio: 3500,
    category: "g",
  },
];

export const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  const { detalleId } = useParams();

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(collares);
      }, 2000);
    });

    getData.then((res) =>
      setData(res.find((collares) => collares.id === parseInt(detalleId)))
    );
  }, []);

  return <ItemDetail data={data} />;
};

export default ItemDetailContainer;
