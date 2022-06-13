import { useState } from "react";

function ItemCount({ stock, initial }) {
  const [cant, setCount] = useState(initial);

  function suma() {
    setCount(cant + 1);
  }

  function resta() {
    setCount(cant - 1);
  }

  return (
    <div>
      <button onClick={resta}>-</button>
      <span>{cant}</span>
      <button onClick={suma}>+</button>
      <br />
      <button>Agregar al carrito</button>
    </div>
  );
}

export default ItemCount;
