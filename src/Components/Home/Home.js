import React from "react";
import Carousel from "react-bootstrap/Carousel";
import slide1 from "../../img/slide1.jpg";
import slide2 from "../../img/slide2.jpg";
import slide3 from "../../img/slide3.jpg";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Carousel fade>
        <Carousel.Item>
          <img className=" d-block w-100" src={slide1} alt="First slide" />
          <Carousel.Caption>
            <h3>Search Recipes</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Search Recipes</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Search Recipes</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;
