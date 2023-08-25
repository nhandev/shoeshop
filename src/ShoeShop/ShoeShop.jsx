import React, { useState } from "react";
import ProductList from "./ProductList";
import Modal from "./Modal";
import data from "./data.json";

export default function ShoeShop() {
  //useState control modal
  const [isOpen, setIsOpen] = useState(false);
  //useState control select Product
  const [selectProduct, setSelectProduct] = useState(null);

  const handleSetModal = (variable) => {
    setIsOpen(variable);
  };

  const handleGetProduct = (product) => {
    setSelectProduct(product);
  };

  return (
    <div>
      <h1 className="text-center text-danger my-5">ShoeShop</h1>
      <ProductList
        onGetProduct={handleGetProduct}
        products={data}
        onSetModal={handleSetModal}
      />
      {isOpen && <Modal product={selectProduct} onSetModal={handleSetModal} />}
    </div>
  );
}
