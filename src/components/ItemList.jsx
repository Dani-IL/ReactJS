import Item from "./Item";

function ItemList({ products }) {
  console.log("Products en ItemList", products);

  return (
    <div>
      {products.map((product) => {
        return (
          <Item
            key={product.id}
            imagen={product.img}
            title={product.title}
            descripcion={product.descripcion}
            precio={product.precio}
            stock={product.stock}
          />
        );
      })}
    </div>
  );
}

export default ItemList;
