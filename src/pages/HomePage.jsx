import ProductCard from "../components/ProductCard";

const products = [
  { id: 1, name: "Day Cream", price: 3000, image: "/images/cream-2.png" },
  { id: 2, name: "Sunscream", price: 2500, image: "/images/perfume.png" },
  { id: 3, name: "Night Cream", price: 2000, image: "/images/cosmeticset.png" },
  {
    id: 4,
    name: "Perfumes",
    price: 500,
    image: "/images/perfume-1.png",
  },
  { id: 5, name: "Perfumes", price: 2000, image: "/images/perfume2.jpg" },
];

const carousel = [
  {
    title: "Glow Like Never Before",
    description:
      "Discover our premium skincare collection for radiant and healthy skin.",
    image: "/images/hero-skincare.jpg",
  },
  {
    title: "Unleash Your Beauty",
    description:
      "Elevate your makeup game with our high-quality, cruelty-free cosmetics.",
    image: "/images/hero-makeup.jpg",
  },
  {
    title: "Self-Care, Redefined",
    description:
      "Indulge in luxurious beauty essentials made for every skin type.",
    image: "/images/hero-bg.png",
  },
];

const HomePage = () => {
  return (
    <>
      <div className="hero_area">
        {/* slider section  */}
        <section className=" slider_section position-relative">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              {/* {carousel.map((item, index) => {
                return (
                  <div className="carousel-item active" key={index}>
                    <div className="slider_item-box">
                      <div className="slider_item-container">
                        <div className="container">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="slider_item-detail">
                                <div>
                                  <h1>{item.title}</h1>
                                  <p>{item.description}</p>
                                  <div className="d-flex">
                                    <a
                                      href=""
                                      className="text-uppercase custom_orange-btn mr-3"
                                    >
                                      Shop Now
                                    </a>
                                    <a
                                      href=""
                                      className="text-uppercase custom_dark-btn"
                                    >
                                      Contact Us
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-md-6">
                              <div className="slider_img-box">
                                <div>
                                  <img src={item.image} alt="" className="" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div> */}
              <div className="carousel-item active">
                <div className="slider_item-box">
                  <div className="slider_item-container">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="slider_item-detail">
                            <div>
                              <h1>Glow Like Never Before</h1>
                              <p>
                                Experience the magic of radiant skin with our
                                premium skincare range. Infused with nourishing
                                ingredients, our products help hydrate, repair,
                                and rejuvenate your skin for a youthful, healthy
                                glow every day.
                              </p>
                              <div className="d-flex">
                                <a
                                  href=""
                                  className="text-uppercase custom_orange-btn mr-3"
                                >
                                  Shop Now
                                </a>
                                <a
                                  href=""
                                  className="text-uppercase custom_dark-btn"
                                >
                                  Contact Us
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="slider_img-box">
                            <div>
                              <img
                                src="/images/hero-skincare-2.png"
                                alt=""
                                className=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="slider_item-box">
                  <div className="slider_item-container">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="slider_item-detail">
                            <div>
                              <h1>Unleash Your Beauty</h1>
                              <p>
                                Enhance your natural beauty with our
                                high-quality, cruelty-free cosmetics. From bold
                                lip colors to flawless foundations, our makeup
                                collection is designed to boost confidence and
                                complement every skin tone effortlessly.
                              </p>
                              <div className="d-flex">
                                <a
                                  href=""
                                  className="text-uppercase custom_orange-btn mr-3"
                                >
                                  Shop Now
                                </a>
                                <a
                                  href=""
                                  className="text-uppercase custom_dark-btn"
                                >
                                  Contact Us
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="slider_img-box">
                            <div>
                              <img
                                src="/images/hero-makeup.png"
                                alt=""
                                className=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="slider_item-box">
                  <div className="slider_item-container">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="slider_item-detail">
                            <div>
                              <h1>Self-Care, Redefined</h1>
                              <p>
                                Pamper yourself with luxurious beauty essentials
                                crafted for all skin types. Our skincare and
                                body care products provide deep nourishment,
                                relaxation, and rejuvenation, turning your
                                self-care routine into an indulgent experience.
                              </p>
                              <div className="d-flex">
                                <a
                                  href=""
                                  className="text-uppercase custom_orange-btn mr-3"
                                >
                                  Shop Now
                                </a>
                                <a
                                  href=""
                                  className="text-uppercase custom_dark-btn"
                                >
                                  Contact Us
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="slider_img-box">
                            <div>
                              <img
                                src="/images/hero-bg.png"
                                alt=""
                                className=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="custom_carousel-control">
              <a
                className="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              >
                <span className="sr-only">Next</span>
              </a>
            </div> */}
          </div>
        </section>
        {/* <!-- end slider section --> */}
      </div>
      <section className="service_section layout_padding ">
        <div className="container">
          <h2 className="custom_heading">Featured Products</h2>
          <p className="custom_heading-text">
            Discover our top beauty essential for radiant skin, long-lasting
            results, and effortless confidence daily!
          </p>
          <div className="row products-container layout_padding2">
            {products.map((item, index) => {
              return <ProductCard key={index} product={item} />;
            })}
          </div>
        </div>
      </section>
      {/* <!-- service section --> */}
      <section className="service_section layout_padding ">
        <div className="container">
          <h2 className="custom_heading">Our Services</h2>
          <p className="custom_heading-text">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have
          </p>
          <div className=" layout_padding2">
            <div className="card-deck">
              <div className="card">
                <img
                  className="card-img-top"
                  src="images/card-item-1.png"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Shipping</h5>
                  <p className="card-text">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which do not
                    look even slightly believable.
                  </p>
                </div>
              </div>
              <div className="card">
                <img
                  className="card-img-top"
                  src="images/card-item-2.png"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Online Payment</h5>
                  <p className="card-text">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which do not
                    look even slightly believable.
                  </p>
                </div>
              </div>
              <div className="card">
                <img
                  className="card-img-top"
                  src="images/card-item-3.png"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Makeup</h5>
                  <p className="card-text">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which do not
                    look even slightly believable.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <a href="" className="custom_dark-btn">
              Read More
            </a>
          </div>
        </div>
      </section>
      {/* end service section */}
      {/* fruits section */}
      {/* <section className="fruit_section">
        <div className="container">
          <h2 className="custom_heading">Our Beauty Blockbusters</h2>
          <p className="custom_heading-text">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have
          </p>
          <div className="row layout_padding2">
            <div className="col-md-8">
              <div className="fruit_detail-box">
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
                  src="images/perfume.png"
                  alt=""
                  className=""
                  width="250px"
                />
              </div>
            </div>
          </div>
          <div className="row layout_padding2">
            <div className="col-md-8">
              <div className="fruit_detail-box">
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
              <div className="fruit_img-box d-flex justify-content-center align-items-center">
                <img
                  src="images/lipstic.png"
                  alt=""
                  className=""
                  width="250px"
                />
              </div>
            </div>
          </div>
          <div className="row layout_padding2-top layout_padding-bottom">
            <div className="col-md-8">
              <div className="fruit_detail-box">
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
                <img
                  src="images/sunscreem.png"
                  alt=""
                  className=""
                  width="250px"
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* end fruits section  */}

      {/* tasty section  */}
      <section className="tasty_section">
        <div className="container_fluid">
          <h2 style={{ fontSize: "4.5rem" }}>
            Radiate Confidence, Glow Beautifully
          </h2>
        </div>
      </section>
      {/* end tasty section  */}
      {/* client section  */}
      <section className="client_section layout_padding">
        <div className="container">
          <h2 className="custom_heading">Testimonial</h2>
          <p className="custom_heading-text">
            Read real reviews from our happy customers! <br />
            See how our products have made a difference in their beauty
            routines. Your feedback matters-join the conversation and share your
            experience!
          </p>
          <div>
            <div
              id="carouselExampleControls-2"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="client_container layout_padding2">
                    <div className="client_img-box">
                      <img src="images/client.png" alt="" />
                    </div>
                    <div className="client_detail">
                      <h3>Johnhex</h3>
                      <p className="custom_heading-text">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        do not look even slightly believable. If you are <br />
                        going to use a passage of Lorem Ipsum, you need to be
                        sure
                      </p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="client_container layout_padding2">
                    <div className="client_img-box">
                      <img src="images/client.png" alt="" />
                    </div>
                    <div className="client_detail">
                      <h3>Johnhex</h3>
                      <p className="custom_heading-text">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        do not look even slightly believable. If you are <br />
                        going to use a passage of Lorem Ipsum, you need to be
                        sure
                      </p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="client_container layout_padding2">
                    <div className="client_img-box">
                      <img src="images/client.png" alt="" />
                    </div>
                    <div className="client_detail">
                      <h3>Johnhex</h3>
                      <p className="custom_heading-text">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        do not look even slightly believable. If you are <br />
                        going to use a passage of Lorem Ipsum, you need to be
                        sure
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="custom_carousel-control">
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleControls-2"
                  role="button"
                  data-slide="prev"
                >
                  <span className="" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleControls-2"
                  role="button"
                  data-slide="next"
                >
                  <span className="" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end client section 

   contact section  */}
      <section className="contact_section layout_padding">
        <div className="container">
          <h2 className="font-weight-bold">Contact Us</h2>
          <div className="row">
            <div className="col-md-8 mr-auto">
              <form action="">
                <div className="contact_form-container">
                  <div>
                    <div>
                      <input type="text" placeholder="Name" />
                    </div>
                    <div>
                      <input type="text" placeholder="Phone Number" />
                    </div>
                    <div>
                      <input type="email" placeholder="Email" />
                    </div>
                    <div className="mt-5">
                      <input type="text" placeholder="Message" />
                    </div>
                    <div className="mt-5">
                      <button type="submit">send</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* end contact section 

    map section  */}
      <section className="map_section">
        <div id="map" className="h-100 w-100 "></div>
      </section>
      {/* end map section  */}
      <script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>
      <script type="text/javascript" src="js/bootstrap.js"></script>
      {/* <script>
    // This example adds a marker to indicate the position of Bondi Beach in Sydney,
    // Australia.
    function initMap() {
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: {
          lat: 40.645037,
          lng: -73.880224
        },
      });

      var image = 'images/maps-and-flags.png';
      var beachMarker = new google.maps.Marker({
        position: {
          lat: 40.645037,
          lng: -73.880224
        },
        map: map,
        icon: image
      });
    }
  </script> */}
      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA8eaHt9Dh5H57Zh0xVTqxVdBFCvFMqFjQ&callback=initMap"></script>
    </>
  );
};

export default HomePage;
