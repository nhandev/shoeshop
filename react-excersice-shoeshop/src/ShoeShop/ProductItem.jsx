import React from "react";

export default function ProductItem({ product, onSetModal, onGetProduct }) {
  return (
    <div className="card">
      <img className="card-img" src={product.image} alt={product.name} />
      <div className="card-body">
        <h3 className="card-title">{product.name}</h3>
        <h3 className="card-text text-danger">${product.price}</h3>
        <button
          className="btn btn-success"
          onClick={() => {
            onSetModal(true);
            onGetProduct(product);
          }}
        >
          Xem chi tiết
        </button>
      </div>
    </div>
  );
}
