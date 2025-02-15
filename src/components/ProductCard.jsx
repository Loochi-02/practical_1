import PropTypes from "prop-types";
import { useState } from "react";

const ProductCard = ({ product }) => {
  const [qty, setQty] = useState(0);
  if (!product) {
    return <p>Loading...</p>; // Handle undefined object
  }

  const increaseQty = () => {
    setQty(qty + 1);
  };

  const decreaseQty = () => {
    setQty(qty > 0 ? qty - 1 : 0);
  };
  return (
    <div className="col-lg-4 col-xl-4 col-md-6 col-sm-12 pb-3 px-2">
      <div className="shop-product-card">
        <div className="shop-product-bg"></div>
        <div className="shop-labels w-100 h-100 d-flex flex-column pl-4 pb-4 justify-content-end align-items-start">
          <h1>{product.name}</h1>
          <h2 className="mb-4">Price:Rs.{product.price}</h2>
          <div className="d-flex align-items-center gap-3">
            {/* Minus Button */}
            <button className="btn btn-light" onClick={() => decreaseQty()}>
              -
            </button>
            {/* Quantity Display */}
            <p className="quantity-number mb-0 mx-3">{qty}</p>
            {/* Plus Button */}
            <button className="btn btn-light" onClick={() => increaseQty()}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  // qty: PropTypes.number.isRequired,
  // increaseQty: PropTypes.func.isRequired,
  // decreaseQty: PropTypes.func.isRequired,
};

export default ProductCard;
