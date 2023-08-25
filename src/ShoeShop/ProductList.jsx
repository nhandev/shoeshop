import React from "react";
import ProductItem from "./ProductItem";

export default function ProductList({ products, onGetProduct, onSetModal }) {
  return (
    <div className="container">
      <div className="row gy-4">
        {products.map((product) => {
          return (
            <div key={product.id} className="col-md-4">
              <ProductItem
                product={product}
                onSetModal={onSetModal}
                onGetProduct={onGetProduct}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
