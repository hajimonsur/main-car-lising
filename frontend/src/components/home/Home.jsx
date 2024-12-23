import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

const Home = () => {
  return (
    <div className="container mt-5">
      <Carousel fade interval={3000} className="custom-carousel">
        {/* First Slide */}
        <Carousel.Item>
          <div className="carousel-overlay">
            <img
              className="d-block w-100 carouselImg"
              src="/luxrycars.jpg"
              alt="First Slide"
            />
            <div className="caption-container">
              <Carousel.Caption>
                <h3 className="display-6">Luxury Cars</h3>
                <p>
                  Experience automotive perfection where timeless elegance meets
                  cutting-edge performance. Our luxury cars are designed for
                  those who appreciate the finer things in life and demand
                  nothing less than extraordinary.
                </p>
              </Carousel.Caption>
            </div>
          </div>
        </Carousel.Item>

        {/* Second Slide */}
        <Carousel.Item>
          <div className="carousel-overlay">
            <img
              className="d-block w-100 carouselImg"
              src="/supercars.jpg"
              alt="Second Slide"
            />
            <div className="caption-container">
              <Carousel.Caption>
                <h3 className="display-6">Super Fast Cars</h3>
                <p>
                  Unleash the thrill of pure speed and unmatched performance.
                  Our fast cars are engineered to deliver adrenaline-pumping
                  experiences with every press of the pedal—because life is too
                  short to drive slow.
                </p>
              </Carousel.Caption>
            </div>
          </div>
        </Carousel.Item>

        {/* Third Slide */}
        <Carousel.Item>
          <div className="carousel-overlay">
            <img
              className="d-block w-100 carouselImg"
              src="/carsimg.jpg"
              alt="Third Slide"
            />
            <div className="caption-container">
              <Carousel.Caption>
                <h3 className="display-6">Smart, Sleek, and Ready to Go</h3>
                <p>
                  Experience the perfect blend of efficiency and style with our
                  compact cars. Built to navigate bustling streets, tight
                  parking spots, and long commutes, these vehicles offer fuel
                  economy, modern features, and exceptional performance—all in
                  a sleek, urban-friendly design. Drive smarter and make every
                  mile count.
                </p>
              </Carousel.Caption>
            </div>
          </div>
        </Carousel.Item>

        {/* Fourth Slide */}
        <Carousel.Item>
          <div className="carousel-overlay">
            <img
              className="d-block w-100 carouselImg"
              src="/usedcar.jpg"
              alt="Fourth Slide"
            />
            <div className="caption-container">
              <Carousel.Caption>
                <h3 className="display-6">Drive the Car You Want, for Less</h3>
                <p>
                  Why settle for less when you can drive more for less? Our
                  selection of used cars provides top-notch quality, modern
                  features, and exceptional value. Perfectly maintained and
                  ready to hit the road, these vehicles offer the same
                  reliability as new cars at a fraction of the price. Enjoy the
                  freedom of ownership without the hefty price tag.
                </p>
              </Carousel.Caption>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
