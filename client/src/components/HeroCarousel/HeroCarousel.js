import React from "react";
import { Carousel, Button } from "react-bootstrap";
import "./HeroCarousel.css";

const HeroCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          style={{ height: "740px" }}
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2014/11/30/17/15/theater-551797_1280.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="custom-carousel-caption">
          <h3 className="custom-carousel-title">Movie Search App</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption className="custom-carousel-caption">
          <h2 className="custom-carousel-title">TOPP 10</h2>
          <Button variant="primary" className="custom-carousel-button">
            Till Topp 10
          </Button>
        </Carousel.Caption>
        <img
          style={{ height: "740px" }}
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2014/11/30/17/15/theater-551797_1280.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default HeroCarousel;
