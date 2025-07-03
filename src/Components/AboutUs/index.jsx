import React from 'react';
import './aboutus.css';

function AboutUs() {
  return (
    <>
      <div className="about-hero">
        <div className="about-overlay">
          <h1>About for Shopify</h1>
          <p>WE CAN DO MORE FOR YOU</p>
        </div>
      </div>

      <section className="about-section">
        <div className="about-text-block">
          <h2>Our Commitment to Excellence</h2>
          <p>
            At Shopify, our journey is rooted in a deep passion for delivering the finest products and services to our customers. 
            We believe in doing more than just meeting expectations — we aim to exceed them every single day.
          </p>
        </div>

        <div className="about-ceo-section">
          <div className="ceo-image">
            <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/08/about-people.jpg" alt="Rachel Leonard - CEO" />
          </div>
          <div className="ceo-text">
            <p className="ceo-name"><b>Rachel Leonard – CEO, Shopify</b></p>
            <h3>Leading with Purpose, Driven by Innovation</h3>
            <p>
              Rachel Leonard founded Shopify with a powerful vision: to make quality products accessible to everyone. 
              Her leadership has turned a simple idea into a trusted platform serving thousands of happy customers daily.
            </p>
            <p>
              With experience in both retail and technology, Rachel knows what modern consumers expect — ease, speed, and a personal touch. 
              Under her guidance, Shopify continues to grow, focused on sustainability, innovation, and building strong customer relationships.
            </p>
          </div>
        </div>

        <div className="about-extra-text">
          <p>
            Thank you for being part of our journey. We’re excited to grow with you — one product, one experience, one moment at a time.
          </p>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
