import { useLocation } from "react-router-dom";

const ProductDetails = () => {
  const location = useLocation();
  const produ = location.state;
  return (
    <>
      <div className="container p-4">
        {/* Product Section */}
        <div className="p-4">
          {/* Product Section */}
          <div className="d-flex flex-column flex-md-row align-items-start">
            {/* Product Image */}
            <div className="mb-3 mb-md-0">
              <img
                src={produ.image} // duChange this to your actual image path
                alt="Product"
                className="img-fluid rounded"
                style={{
                  maxWidth: "350px",
                  //   border: "1px solid rgba(119, 7, 12, 0.75)",
                  backgroundColor: "#F9DEC9",
                  position: "relative",
                  zIndex: "1",
                }}
              />
            </div>

            {/* Product Info (Left-Aligned) */}
            <div className="ms-md-4 w-100 ml-5 mt-4">
              <h2 className="fw-bold">{produ.title}</h2>
              {/* <p className="text-warning fs-5">
                ★★★★★ <span className="text-muted">(8 reviews)</span>
              </p> */}
              <h4 className="text-danger fw-bold">Rs. {produ.price}</h4>
              <p className="text-muted">
                Promotes fairness and even skin tone, erases dark spots &
                pigmentation, improves radiance & glow, moisturizes, rejuvenates
                & protects skin health.
              </p>
              <p>
                <strong>Key Ingredients:</strong> Arbutin, Vitamin B3, Aloe Vera
              </p>
              <p>
                <strong>Size:</strong> 100ml
              </p>
              <button className="custom_orange-btn mt-2">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductDetails;
