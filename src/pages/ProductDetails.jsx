const ProductDetails = () => {
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
                src="/images/cream-product.png" // Change this to your actual image path
                alt="Product"
                className="img-fluid rounded"
                style={{
                  maxWidth: "350px",
                  //   border: "1px solid rgba(119, 7, 12, 0.75)",

                  backgroundColor: "#F9DEC9",
                }}
              />
            </div>

            {/* Product Info (Left-Aligned) */}
            <div className="ms-md-4 w-100 ml-5 mt-4 ms-5">
              <h2 className="fw-bold">My fairness Night cream </h2>
              {/* <p className="text-warning fs-5">
                ★★★★★ <span className="text-muted">(8 reviews)</span>
              </p> */}
              <h4 className="text-danger fw-bold">Rs. 2300.00</h4>
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

      <div className="container p-4">
        {/* Product Section */}
        <div className="p-4">
          {/* Product Section */}
          <div className="d-flex flex-column flex-md-row align-items-start">
            {/* Product Image */}
            <div className="mb-3 mb-md-0">
              <img
                src="/images/perfume.png" // Change this to your actual image path
                alt="Product"
                className="img-fluid rounded"
                style={{
                  maxWidth: "350px",
                  //   border: "1px solid rgba(119, 7, 12, 0.75)",
                  backgroundColor: "#F9DEC9",
                }}
              />
            </div>

            {/* Product Info (Left-Aligned) */}
            <div className="ms-md-4 w-100 ml-5 mt-4">
              <h2 className="fw-bold">My fairness Night cream </h2>
              {/* <p className="text-warning fs-5">
                ★★★★★ <span className="text-muted">(8 reviews)</span>
              </p> */}
              <h4 className="text-danger fw-bold">Rs. 2300.00</h4>
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
