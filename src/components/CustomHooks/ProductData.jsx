import React from "react";
import useFetch from "./useFetch";

const ProductData = () => {
  let product = useFetch("https://fakestoreapi.com/products");
  console.log(product);
  return (
    <div>
      {product === null
        ? "...loading"
        : product?.map((prod, index) => (
            <React.Fragment key={index+1}>
              <h1>{prod.title}</h1>
            </React.Fragment>
          ))}
    </div>
  );
};

export default ProductData;
