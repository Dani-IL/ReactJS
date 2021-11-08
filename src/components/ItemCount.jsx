import React, { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { IconButton } from "@mui/material";

const ItemCount = () => {
  const [numero, setNumero] = useState(1);
  const [stock, setStock] = useState(5);

  const Aumentar = () => {
    if (numero >= 0 && numero < 5 && numero <= stock) setNumero(numero + 1);
    else {
      alert("Cantidad debe ser menor a " + stock);
      window.location.reload(false);
    }
  };
  const Reducir = () => {
    if (numero > 0 && numero < 5 && numero <= stock) setNumero(numero - 1);
    else {
      alert("Cantidad debe ser mayor a 0");
      window.location.reload(false);
    }
  };

  const CartItems = () => {
    switch (numero) {
      case 0:
        alert("No puede sumar 0 items al carrito");
        window.location.reload(false);
        break;
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        if (numero <= stock) {
          setStock(stock - numero);
          alert("Se agrego " + numero + " ítem al carrito");
        } else {
          alert("Cantidad de Items supera el Stock");
          window.location.reload(false);
        }
        break;
      default:
        alert("Cantidad de Items supera el Stock");
        window.location.reload(false);
    }
  };

  return (
    <>
      <h2>Stock actual {stock} </h2>
      <h3>Cantidad Seleccionada: {numero}</h3>
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
      <button onClick={CartItems}>
        <IconButton fontSize="large" color="primary">
          <AddShoppingCartIcon />
        </IconButton>
      </button>
    </>
  );
};

export default ItemCount;
