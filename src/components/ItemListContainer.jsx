import TitleComponent from "./Title";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import getProducts from "../services/handMadePromise";
import React, { useState, useEffect } from "react";

const ItemLista = (props) => {
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

  const [Products, setProducts] = useState([]);

  useEffect(() => {
    getProducts
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => alert("Estamos en un problema", err));
  }, []);

  return (
    <div>
      <TitleComponent name={props.categoria} />
      <ItemCount stockActual={stock} initial={1} onCartClick={onAdd} />
      <ItemList products={Products} />
    </div>
  );
};

export default ItemLista;
