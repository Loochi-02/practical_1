import { faCube } from "@fortawesome/free-solid-svg-icons/faCube";
import { faTruck } from "@fortawesome/free-solid-svg-icons/faTruck";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Checkout = () => {
  return (
    <>
      <section className="cart_section layout_padding">
        {/* <h2 className="font-weight-bold">Checkout</h2> */}

        <div
          className="container col-lg-6 col-xl-6 col-md-12 col-sm-12  pb-3 px-2"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gridTemplateRows: "auto",
            gap: "30px",
          }}
        >
          <form
            className="shipping-form"
            style={{
              border: "0.6px solid #a94a4a",
              padding: "0.75rem",
              borderRadius: "10px",
            }}
          >
            <h6>
              <strong>Shipping Details</strong>
            </h6>
            <div className="radio-btns">
              <div
                className="form-check form-check-inline"
                style={{
                  border: "1px solid #ced4da",
                  padding: "0.375rem 0.75rem",
                  borderRadius: "0.25rem",
                  fontSize: "1rem",
                  fontWeight: "400",
                  lineHeight: "1.5",
                  // width: "47.75%",
                }}
              >
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />

                <FontAwesomeIcon
                  className="delivery-icon d-flex align-items-center"
                  icon={faTruck}
                  style={{
                    color: "black",
                    fontSize: "1rem",
                    margin: "0.5rem",
                    // width: "1rem",
                    // height: "10",
                    // alignItems: "center",
                    // position: "relative",
                  }}
                />

                <label className="form-check-label" htmlFor="">
                  Delivery
                </label>
              </div>
              <div
                className="form-check form-check-inline"
                style={{
                  border: "1px solid #ced4da",
                  padding: "0.375rem 0.75rem",
                  borderRadius: "0.25rem",
                  fontSize: "1rem",
                  fontWeight: "400",
                  lineHeight: "1.5",
                  // width: "47.75%",
                }}
              >
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />

                <FontAwesomeIcon
                  className="pick-up-icon d-flex align-items-center"
                  icon={faCube}
                  style={{
                    color: "black",
                    fontSize: "1rem",
                    margin: "0.5rem",
                    // width: "1rem",
                    // height: "10",
                    // alignItems: "center",
                    // position: "relative",
                  }}
                />
                <label className="form-check-label"> Pick Up</label>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputName" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputNumber" className="form-label">
                Phone Number
              </label>
              <input
                type="tel"
                className="form-control"
                id="exampleInputNumber"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputCountry" className="form-label">
                Country
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputCountry"
              />
              {/* <select style={{ lineHeight: "50px", fontSize: "15px" }}>
                <option>Select a Country</option>
                <option>India</option>
                <option>Canada</option>
              </select> */}
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
                // checked
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                I have read and agree to the terms and Conditions
              </label>
            </div>
            <button
              type="submit"
              className="custom_orange-btn"
              style={{
                marginTop: "2rem",
                backgroundColor: "#a94a4a",
                color: "white",
                fontWeight: "150",
                width: "100%",
              }}
            >
              Submit
            </button>
          </form>

          <div
            className="cart_summery"
            style={{
              border: "0.6px solid #a94a4a",
              padding: "0.75rem",
              borderRadius: "10px",
            }}
          >
            <h6>
              <strong>Review your cart</strong>
            </h6>
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
            <div className="mt-4 p-3 border rounded mb-4">
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

            <div className="d-flex justify-content-between">
              <span>Subtotal</span>
              <span className="text-dark fw-bold">Rs.2300.00</span>
            </div>

            <div className="order">
              <div className="d-flex justify-content-between">
                <span>Shipping</span>
                <span className="text-success fw-bold">Free</span>
              </div>

              <div className="d-flex justify-content-between">
                <span>Discount</span>
                <span className="text-dark fw-bold">Rs. 2300.00</span>
              </div>

              {/* <div className="row d-flex justify-content-between">
                <div className="leftOne">
                  <p>Discount</p>
                </div>
                <div className="rightOne">
                  <p>$29.99</p>
                </div>
              </div> */}
              <hr />

              <div className="d-flex justify-content-between">
                <span>Grand Total</span>
                <span className="text-dark fw-bolder">Rs.2300.00</span>
              </div>

              {/* <div className="row">
                <div className="leftOne">
                  <p>Grand Total</p>
                </div>
                <div className="rightOne">
                  <p>$29.99</p>
                </div>
              </div> */}

              <div>
                <button className="custom_orange-btn" style={{ width: "100%" }}>
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
