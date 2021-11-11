import TitleComponent from "./Title";
import ItemCount from "./ItemCount";
import React, { useState } from "react";

const ItemList = (props) => {
  const [stock, setStock] = useState(5);

  const onAdd = (newCount) => {
    if (newCount <= stock) {
      const msg = `Agregaste ${newCount} producto`;
      newCount === 1 ? alert(msg) : alert(`${msg}s`);
      setStock(stock - newCount);
    } else {
      alert("Cantidad supera el Stock");
    }
  };

  return (
    <div>
      <TitleComponent name={props.categoria} />
      <ItemCount stockActual={stock} initial={1} onCartClick={onAdd} />
    </div>
  );
};

export default ItemList;
