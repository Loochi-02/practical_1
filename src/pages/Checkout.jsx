const Checkout = () => {
  return (
    <>
      <section className="cart_section layout_padding">
        <div className="container">
          <h2 className="font-weight-bold">Checkout</h2>
          <h6>
            <strong>Shipping Deatails</strong>
          </h6>
          <form className="shipping-form">
            <div className="radio-btns">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label className="form-check-label" for="inlineRadio1">
                  1 Delivery
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label className="form-check-label" for="inlineRadio2">
                  2 Pick Up
                </label>
              </div>
            </div>
            <div className="mb-3">
              <label for="exampleInputName" className="form-label">
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
              <label for="exampleInputEmail1" className="form-label">
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
              <label for="exampleInputNumber" className="form-label">
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
              <label for="exampleInputCountry" className="form-label">
                Country
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputCountry"
              />
              <select>
                <option>Select a Country</option>
                <option>India</option>
                <option>Canada</option>
              </select>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
                checked
              />
              <label className="form-check-label" for="flexCheckChecked">
                I have read and agree to the terms and Conditions
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Checkout;
