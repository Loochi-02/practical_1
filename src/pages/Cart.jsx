import { faExclamation } from "@fortawesome/free-solid-svg-icons/faExclamation";
// import { faGift } from "@fortawesome/free-solid-svg-icons/faGift";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cart = () => {
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
                <div className="card" id="cardcard">
                  <div className="card-body">
                    <FontAwesomeIcon
                      className="location-icon"
                      icon={faLocationDot}
                      style={{
                        color: "lightgray",
                        fontSize: "3.1rem",
                        marginLeft: 140,
                      }}
                    />
                    <p className="card-text">
                      Add an address so we can get tracking on the delivery
                    </p>
                    <div className="quote_btn-container ml-0 ml-lg-4 d-flex justify-content-center">
                      <a href="">Add new locations</a>
                    </div>
                  </div>
                </div>

                {/* payment methods */}
                <div className="card" id="cardcard">
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
                        id="visacard"
                      />
                    </label>
                    <br />
                    <label className="flex items-center space-x-3">
                      {/* <img 
                         src="https://iconscout.com/free-icon/mastercard-3521564" 
                         alt="MasterCard" 
                         style={{ height: "20px", width: "auto" }} 
                        /> */}

                      <span>Mastercard </span>
                      <input
                        type="radio"
                        name="payment"
                        className="w-6 h-6 rounded-full border-gray-300 checked:bg-blue-500"
                        id="mastercard"
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
                        id="tabbycard"
                      />
                    </label>
                  </div>
                </div>
              </div>

              {/* cart section */}
              <div className="card-deck" id="cart">
                <div className="card" id="card">
                  <div className="card-body">
                    {/* <FontAwesomeIcon icon={faGifts}/> */}

                    <FontAwesomeIcon
                      icon={faExclamation}
                      style={{
                        color: "black",
                        fontSize: "1.8rem",
                        marginLeft: 10,
                      }}
                    />

                    {/* <FontAwesomeIcon icon={circle-faExclamation} style={{color: "black",fontSize:"2.1rem"}}/> */}
                    <h6 className="card-title">
                      <b>Check your product before checkout</b>
                    </h6>
                    <p className="card-main-text">
                      Ensure every detail is perfect before completing your
                      purches.
                    </p>
                  </div>
                  <div className="card-body" id="cart-body">
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
                              src="images/orange.png"
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
                              src="images/gauva.png"
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
            <div className="col-md-4 d-flex" id="right-column">
              {/* make a gift side*/}
              <div className="giftside"></div>

              {/* <div className="card" id="cardcard"> */}
              <div className="card-body" id="card-body2">
                <h5 className="card-title">
                  <b>Your Order</b>
                </h5>
                <div className="make-gift">
                  {/* <div className="row">
                  <div className="column1">
                  <FontAwesomeIcon icon={faExclamation} style={{color:"black",fontSize:"1.8rem",marginLeft: 10}} />
                  <p>hii</p>
                  </div>
                  <div className="column2">
                <h3>Make it a Gift</h3>
                <p>Wrape your items for </p>
                </div>
                <div className="column3">
                        <button>hii</button>
                </div>
                </div> */}
                  {/* <div className="row1" style={"display:flex"}>
                  <div className="column1" style={"flex:2"}> */}
                  {/* </div>
                </div> */}
                </div>

                <div className="order">
                  <div className="row">
                    <div className="leftOne">
                      <p>Subtotal</p>
                    </div>
                    <div className="rightOne">
                      <p>$19.99</p>
                    </div>
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
