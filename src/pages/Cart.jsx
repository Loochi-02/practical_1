// import { faExclamation } from "@fortawesome/free-solid-svg-icons/faExclamation";
import { faGift } from "@fortawesome/free-solid-svg-icons/faGift";
// import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useState } from "react";

const Cart = () => {
  // const [qty, setQuantity] = useState(1);

  // const increaseQty = () => {
  //   setQuantity(qty + 1);
  // };

  // const decreaseQty = () => {
  //   setQuantity(qty > 0 ? qty - 1 : 0);
  // };
  return (
    <>
      <section className="cart_section layout_padding">
        <div className="container">
          <h2 className="font-weight-bold">Checkout</h2>
          <div className="row layout_padding2">
            {/* left column */}
            <div className="col-md-8">
              <div className="card-deck">
                {/* Delivery Location */}
                <div className="card">
                  <div className="card-body">
                    {/* <FontAwesomeIcon
                      className="location-icon d-flex align-items-center"
                      icon={faLocationDot}
                      style={{
                        color: "lightgray",
                        fontSize: "2.1rem",
                        width: "25",
                        height: "fit-content",
                        alignItems: "center",
                        position: "relative",
                      }}
                    /> */}
                    <p className="card-text">
                      Add an address so we can get tracking on the delivery
                    </p>
                    <div className="quote_btn-container ml-0 ml-lg-4 d-flex justify-content-center">
                      <a href="">Add new locations</a>
                    </div>
                  </div>
                </div>

                {/* payment methods */}
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">
                      <b>Choose how to pay</b>
                    </h5>
                    <label className="flex items-center space-x-3">
                      {/* <img 
                          src="https://logos-world.net/wp-content/uploads/2020/04/Visa-Logo.png" 
                          alt="Visa Card" 
                          style={{ height: "20px", width: "auto" }} 
                        /> */}
                      <span>Visa</span>
                      <input
                        type="radio"
                        name="payment"
                        className="w-6 h-6 rounded-full border-gray-300 checked:bg-blue-500"
                        style={{
                          position: "absolute",
                          top: "62px",
                          right: "30px",
                        }}
                      />
                    </label>
                    <br />
                    <label className="flex items-center space-x-3">
                      {/* <img 
                         src="https://iconscout.com/free-icon/mastercard-3521564" 
                         alt="MasterCard" 
                         style={{ height: "20px", width: "auto" }} 
                        /> */}

                      <span>Mastercard</span>
                      <input
                        type="radio"
                        name="payment"
                        className="w-6 h-6 rounded-full border-gray-300 checked:bg-blue-500"
                        style={{
                          position: "absolute",
                          top: "94px",
                          right: "30px",
                        }}
                      />
                    </label>
                    <br />
                    <label className="flex items-center space-x-3">
                      {/* <img 
                          src="https://seeklogo.com/images/T/tabby-logo-2207E22F98-seeklogo.com.png" 
                          alt="Pay with Tabby" 
                          className="h-6 w-auto"
                        /> */}

                      <span>Pay with Tabby</span>
                      <input
                        type="radio"
                        name="payment"
                        className="w-6 h-6 rounded-full border-gray-300 checked:bg-blue-500"
                        style={{
                          position: "absolute",
                          top: "128px",
                          right: "30px",
                        }}
                      />
                    </label>
                  </div>
                </div>
              </div>

              {/* cart section */}
              <div
                className="card-deck"
                style={{
                  marginTop: "30px",
                  display: "flex",
                }}
              >
                <div className="card rounded-3" id="card">
                  <div className="card-body">
                    {/* <FontAwesomeIcon icon={faGifts}/> */}

                    {/* <FontAwesomeIcon
                      icon={faExclamation}
                      style={{
                        color: "black",
                        fontSize: "1.8rem",
                        marginLeft: 10,
                      }}
                    /> */}

                    {/* <FontAwesomeIcon icon={circle-faExclamation} style={{color: "black",fontSize:"2.1rem"}}/> */}
                    <h6 className="card-title">
                      <b>Check your product before checkout</b>
                    </h6>
                    <p className="card-main-text">
                      Ensure every detail is perfect before completing your
                      purches.
                    </p>
                  </div>
                  <div
                    className="card-body"
                    style={{
                      backgroundColor: "white",
                      borderRadius: "20px 20px 10px 10px",
                    }}
                  >
                    <h6 className="card-title">
                      <b>Cart</b>
                    </h6>
                    <div className="space-y-4 mt-4">
                      {/* <!-- Cart Item --> */}
                      <div className="flex justify-between items-center border-b">
                        {/* <div className="flex items-center gap-4">
                        <img src="images/orange.png" className="w-12 h-12 rounded" style={{ height: "50px", width: "auto" }} />
                        <div>
                            <h3 className="font-semibold">Orange</h3>
                            <p className="text-sm text-gray-500">XL • Black</p>
                            <p className="text-gray-800 font-semibold">SAR 40.00 per item</p>
                        </div>
                        </div> */}
                        <div className="product-container">
                          {/* <!-- Column 3: Product Image --> */}
                          <div className="column">
                            <img
                              className="product-image"
                              src="images/cream-product.png"
                              alt="Product"
                            />
                          </div>

                          {/* <!-- Column 1: Product Details --> */}
                          <div className="column">
                            <h3>Product Name</h3>
                            <p>High-quality product</p>
                            <p>
                              <strong>Price:</strong> $19.99
                            </p>
                          </div>

                          {/* <!-- Column 2: Quantity, Total Price, Delete --> */}
                          <div className="column">
                            <p>
                              <strong>Quantity:</strong>{" "}
                              <input
                                type="number"
                                className="quantity-input"
                                value="1"
                                min="1"
                              />
                            </p>
                            <p>
                              <strong>Total Price:</strong> $19.99
                            </p>
                            {/* <button className="delete-btn">Delete</button> */}
                          </div>
                        </div>

                        <hr />

                        <div className="product-container">
                          {/* <!-- Column 3: Product Image --> */}
                          <div className="column">
                            <img
                              className="product-image"
                              src="images/perfume.png"
                              alt="Product"
                            />
                          </div>

                          {/* <!-- Column 1: Product Details --> */}
                          <div className="column">
                            <h3>Product Name</h3>
                            <p>High-quality product</p>
                            <p>
                              <strong>Price:</strong> $19.99
                            </p>
                          </div>

                          {/* <!-- Column 2: Quantity, Total Price, Delete --> */}
                          <div className="column">
                            <p>
                              <strong>Quantity:</strong>{" "}
                              <input
                                type="number"
                                className="quantity-input"
                                value="1"
                                min="1"
                              />
                            </p>
                            <p>
                              <strong>Total Price:</strong> $19.99
                            </p>
                            {/* <button className="delete-btn">Delete</button> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* right column */}
            <div className="col-md-4 d-flex" style={{ borderRadius: "8px" }}>
              {/* make a gift side*/}
              <div
                className="card-body"
                style={{
                  border: "0.1px solid rgb(221, 216, 216)",
                  borderRadius: "10px",
                }}
              >
                <h5 className="card-title">
                  <b>Your Order</b>
                </h5>
                {/* <!-- Gift Toggle Section --> */}
                <div className="d-flex flex-column flex-md-row align-items-center justify-content-between border p-3 rounded">
                  <div className="d-flex align-items-center text-center text-md-start">
                    <FontAwesomeIcon
                      className="gift-icon d-flex align-items-center pr-3"
                      icon={faGift}
                      style={{
                        color: "black",
                        fontSize: "2.1rem",
                        width: "25",
                        height: "fit-content",
                        alignItems: "center",
                        position: "relative",
                      }}
                    />
                    <div>
                      <h6 className="mb-0">Make it a Gift</h6>
                      <small className="text-muted">
                        Wrap your items for{" "}
                        <span className="text-primary">SAR 20</span>
                      </small>
                    </div>
                  </div>
                  <div className="mt-2 mt-md-0">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                    />
                  </div>
                </div>
                <p className="text-muted mt-2 text-center text-md-start">
                  All items will be wrapped in one box!{" "}
                  <a href="#" className="text-primary">
                    More info
                  </a>
                </p>

                {/* <!-- Discount Code Section --> */}
                <div className="mt-4 p-3 border rounded">
                  <h6 className="fw-bold">Discount code</h6>
                  <div className="d-flex flex-column flex-md-row justify-content-between align-items-center border p-2 rounded bg-light">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-ticket-detailed text-primary fs-4 me-2"></i>
                      <span className="fw-bold">PIXI20%</span>
                    </div>
                    <a href="#" className="text-danger fw-bold mt-2 mt-md-0">
                      Remove
                    </a>
                  </div>
                  <p className="text-success mt-2 text-center text-md-start">
                    Coupon code is valid!
                  </p>
                </div>
                {/* <!-- Price Details --> */}

                <div className="order">
                  <div className="row">
                    <div className="leftOne">
                      <p>Subtotal</p>
                    </div>
                    <div className="rightOne">
                      <p>$19.99</p>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between">
                    <span>Shipping</span>
                    <span className="text-success fw-bold">Free</span>
                  </div>

                  <div className="row">
                    <div className="leftOne">
                      <p>Discount</p>
                    </div>
                    <div className="rightOne">
                      <p>$29.99</p>
                    </div>
                  </div>
                  <hr />

                  <div className="row">
                    <div className="leftOne">
                      <p>Grand Total</p>
                    </div>
                    <div className="rightOne">
                      <p>$29.99</p>
                    </div>
                  </div>

                  <div>
                    <button className="checkout-button">Checkout</button>
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
