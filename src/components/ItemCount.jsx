import React, { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { IconButton } from "@mui/material";

const ItemCount = ({ stock, initial }) => {
  const [count, setCount] = useState(initial);

  const Aumentar = () => {
    const newValue = count + 1;
    if (newValue <= stock) {
      setCount(newValue);
    }
  };
  const Reducir = () => {
    const newValue = count - 1;
    if (newValue >= initial) {
      setCount(newValue);
    }
  };

  const onAdd = () => {
    const msg = `Agregaste ${count} producto`;
    count === 1 ? alert(msg) : alert(`${msg}s`);
  };

  return (
    <>
      <h2>Contador de Items</h2>
      <h3>Cantidad Seleccionada: {count}</h3>
      <button onClick={Aumentar}>
        <IconButton fontSize="large" color="primary">
          <AddCircleOutlineIcon />
        </IconButton>
      </button>
      <span> </span>
      <button onClick={Reducir}>
        <IconButton fontSize="large" color="primary">
          <RemoveCircleOutlineIcon />
        </IconButton>
      </button>
      <span> </span>
      <br></br>
      <br></br>
      <button onClick={onAdd}>
        <IconButton fontSize="large" color="primary">
          <AddShoppingCartIcon />
        </IconButton>
      </button>
    </>
  );
};

export default ItemCount;
