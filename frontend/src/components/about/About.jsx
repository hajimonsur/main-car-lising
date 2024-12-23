import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-us container-fluid py-5">
      {/* Hero Section */}
      <section className="hero-section text-center text-white py-5">
        <div className="container">
          <h1 className="display-4 fw-bold">About CarBay</h1>
          <p className="lead mt-3">
            Your trusted platform for buying and selling cars. Connecting car enthusiasts across Nigeria with simplicity, security, and trust.
          </p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="mission-section py-5">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-md-6">
              <img
                src="about-us-banner.jpg"
                alt="About Us"
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-md-6">
              <h2 className="text-danger fw-bold mb-4">Our Mission</h2>
              <p>
                At <strong>CarBay</strong>, we aim to revolutionize the car-buying experience by offering a platform that is fast, reliable, and transparent. 
                Whether you are searching for your dream car or looking to sell your current vehicle, CarBay is here to make it happen.
              </p>
              <p>
                We connect buyers and sellers with ease, ensuring every transaction is smooth, secure, and beneficial for all parties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us-section py-5 bg-light">
        <div className="container">
          <h2 className="text-center text-primary fw-bold mb-5">Why Choose Us?</h2>
          <div className="row g-4">
            <div className="col-md-4 text-center">
              <div className="feature-card p-4 rounded shadow-sm bg-white">
                <i className="bi bi-car-front-fill text-danger fs-1 mb-3"></i>
                <h5 className="fw-bold">Wide Range of Cars</h5>
                <p className="text-muted">
                  From luxurious SUVs to budget-friendly hatchbacks, we cater to every preference and budget.
                </p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="feature-card p-4 rounded shadow-sm bg-white">
                <i className="bi bi-shield-check text-success fs-1 mb-3"></i>
                <h5 className="fw-bold">Verified Listings</h5>
                <p className="text-muted">
                  All cars and sellers are thoroughly vetted to ensure a trustworthy experience.
                </p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="feature-card p-4 rounded shadow-sm bg-white">
                <i className="bi bi-currency-exchange text-warning fs-1 mb-3"></i>
                <h5 className="fw-bold">Unbeatable Deals</h5>
                <p className="text-muted">
                  Enjoy competitive pricing, exclusive offers, and no hidden fees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="team-section py-5">
        <div className="container">
          <h2 className="text-center text-primary fw-bold mb-5">Meet Our Team</h2>
          <div className="row g-4 justify-content-center">
            <div className="col-md-3 text-center">
              <div className="team-member">
                <img
                  src="team-member-1.jpg"
                  alt="Team Member 1"
                  className="img-fluid rounded-circle mb-3 shadow-sm"
                />
                <h5>John Doe</h5>
                <p className="text-muted">Founder & CEO</p>
              </div>
            </div>
            <div className="col-md-3 text-center">
              <div className="team-member">
                <img
                  src="team-member-2.jpg"
                  alt="Team Member 2"
                  className="img-fluid rounded-circle mb-3 shadow-sm"
                />
                <h5>Jane Smith</h5>
                <p className="text-muted">Chief Marketing Officer</p>
              </div>
            </div>
            <div className="col-md-3 text-center">
              <div className="team-member">
                <img
                  src="team-member-3.jpg"
                  alt="Team Member 3"
                  className="img-fluid rounded-circle mb-3 shadow-sm"
                />
                <h5>Mike Johnson</h5>
                <p className="text-muted">Lead Developer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
