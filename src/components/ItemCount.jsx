import React, { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { IconButton } from "@mui/material";

const ItemCount = ({ stockActual, initial, onCartClick }) => {
  const [count, setCount] = useState(initial);

  const Aumentar = () => {
    const newValue = count + 1;
    if (newValue <= stockActual) {
      setCount(newValue);
    }
  };
  const Reducir = () => {
    const newValue = count - 1;
    if (newValue >= initial) {
      setCount(newValue);
    }
  };

  return (
    <>
      <h2>Contador de Items</h2>
      <h3>Stock Actual: {stockActual}</h3>
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
      <button
        onClick={() => {
          onCartClick(count);
          setCount(initial);
        }}
      >
        <IconButton fontSize="large" color="primary">
          <AddShoppingCartIcon />
        </IconButton>
      </button>
    </>
  );
};

export default ItemCount;
