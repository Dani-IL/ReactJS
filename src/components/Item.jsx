import "../styles/estilos.css";

const Item = ({ imagen, title, descripcion, precio, stock }) => {
  return (
    <div className="articulos">
      <img src={`${imagen}`} alt={title} />
      <h2>{title}</h2>
      <h3>{descripcion}</h3>
      <h4>Precio ${precio}</h4>
      <p>Stock = {stock}</p>
    </div>
  );
};

export default Item;
