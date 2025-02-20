const ProductPage = [
  {
    image: "/images/lipstic.png",
    title: "Velvet Nude Luxe Lipstick",
    description:
      "Richly pigmented, long-lasting lipstick for smooth, vibrant, and nourished lips.",
    price: "2500",
  },
  {
    image: "/images/perfume.png",
    title: "Santal Bloom Eau De Parfum",
    description:
      "Elegant, long-lasting fragrance with a refreshing and captivating aroma.",
    price: "800",
  },
  {
    image: "/images/cream-product.png",
    title: "My fairness Night cream",
    description:
      "Intensely hydrates, repairs, and brightens skin for a youthful glow.",
    price: "2300",
  },
  {
    image: "/images/perfume.png",
    title: "Santal Bloom Eau De Parfum",
    description:
      "Intensely hydrates, repairs, and brightens skin for a youthful glow.",
    price: "5000",
  },
  {
    image: "/images/lipstic.png",
    title: "Soft Matte Nude Lipstick",
    description: "Soft, creamy nude lipstick for a natural and elegant look",
    price: "6000",
  },
];

const Fruits = () => {
  return (
    <>
      {/* fruits section 
      <section className="fruit_section layout_padding-top">
        <div className="container">
          <h2 className="custom_heading">Fresh Fruits</h2>
          <p className="custom_heading-text">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have
          </p>
          <div className="row layout_padding2">
            <div className="col-md-8">
              <div className="className=">
                <h3>Best Fresh Orange</h3>
                <p className="mt-4 mb-5">
                  but the majority have suffered alteration in some form, by
                  injected humour, or randomised words which do not look even
                  slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be
                </p>
                <div>
                  <a href="" className="custom_dark-btn">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex justify-content-center align-items-center">
              <div className="fruit_img-box d-flex justify-content-center align-items-center">
                <img
                  src="images/orange.png"
                  alt=""
                  className=""
                  width="250px"
                />
              </div>
            </div>
          </div>
          <div className="row layout_padding2">
            <div className="col-md-8">
              <div className="className=">
                <h3>Best Fresh Grapes</h3>
                <p className="mt-4 mb-5">
                  but the majority have suffered alteration in some form, by
                  injected humour, or randomised words which do not look even
                  slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be
                </p>
                <div>
                  <a href="" className="custom_dark-btn">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex justify-content-center align-items-center">
              <div className="fruit_img-box d-flex justify-content-center ">
                <img
                  src="images/grapes.png"
                  alt=""
                  className=""
                  width="100px"
                />
              </div>
            </div>
          </div>
          <div className="row layout_padding2-top layout_padding-bottom">
            <div className="col-md-8">
              <div className="className=">
                <h3>Best Fresh Gauva</h3>
                <p className="mt-4 mb-5">
                  but the majority have suffered alteration in some form, by
                  injected humour, or randomised words which do not look even
                  slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be
                </p>
                <div>
                  <a href="" className="custom_dark-btn">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex justify-content-center align-items-center">
              <div className="fruit_img-box d-flex justify-content-center align-items-center">
                <img src="images/gauva.png" alt="" className="" width="250px" />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* end fruits section */}

      <section className="fruit_section layout_padding-top">
        <div className="container">
          <h2 className="custom_heading">Products</h2>
          <p className="custom_heading-text">
            Glow up with our featured beauty products-top picks for you!
          </p>
          <div className="row">
            {ProductPage.map((produ, index) => {
              return (
                <div
                  className="card-div"
                  key={index}
                  style={{
                    width: "17rem",
                    border: "1px solid rgb(248, 231, 231)",
                    marginTop: "10px",
                    marginRight: "1rem",
                    borderRadius: "10px",
                  }}
                >
                  <img
                    src={produ.image}
                    className="card-img-top"
                    alt="..."
                    style={{
                      width: "16.9rem",
                      height: "20rem",
                      borderRadius: "10px 10px 0px 0px",
                      backgroundColor: "#F9DEC9",
                      // backgroundSize: "cover",
                      // backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="card-body">
                    <h6 className="card-title" style={{ fontWeight: "bolder" }}>
                      {produ.title}
                    </h6>
                    <p className="card-text" style={{ fontSize: "1rem" }}>
                      {produ.description}
                    </p>
                  </div>
                  <div className="card-body">
                    <span>Rs.{produ.price}</span>
                    {/* <a href="" className="card-link">
                      Another link
                    </a> */}

                    <button
                      className="buy_now"
                      style={{
                        padding: "10px",
                        marginLeft: "75px",
                        backgroundColor: "#a94a4a",
                        color: "white",
                      }}
                    >
                      Buy now
                    </button>
                  </div>
                </div>
              );
            })}

            {/* <div className="card-div"></div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Fruits;
