import React from "react";

export default function Modal({ onSetModal, product }) {
  return (
    <>
      <div style={{ display: "block" }} class="modal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h2 class="text-danger">Details Product</h2>
            </div>
            <div class="modal-body">
              <div className="row">
                <div className="col-md-6">
                  <img
                    className="img-fluid"
                    src={product.image}
                    alt={product.name}
                  />
                </div>
                <div className="col-md-6">
                  <h3 className="text-success mb-5">{product.name}</h3>
                  <h4 className="text-danger">Price: ${product.price}</h4>
                </div>
              </div>
              <hr />
              <ul className="text-primary">
                <li>{product.description}</li>
                <li>{product.shortDescription}</li>
                <li>Quantity:{product.quantity}</li>
              </ul>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-danger"
                onClick={() => {
                  onSetModal(false);
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-backdrop fade show"></div>
    </>
  );
}
