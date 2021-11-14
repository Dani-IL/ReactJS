import dataJson from "../components/articulos.json";

const data = dataJson;

const getProducts = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(data);
    reject("Algo falló");
  }, 2000);
});

export default getProducts;
