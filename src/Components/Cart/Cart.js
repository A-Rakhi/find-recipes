import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { Card } from "react-bootstrap";
import "./Cart.css";

const Cart = (props) => {
  const { strMeal, strMealThumb, strArea, strInstructions } = props.items;
  const [details, setDetails] = useState(null);

  function handleDetails() {
    setDetails(true);
  }

  //     const str = [];

  //     for (let i = 0; i < 10; i++) {
  //         str.push({
  //         });
  //     }

  return (
    <div className="cart ">
      <div onClick={handleDetails}>
        <Card.Img variant="top" src={strMealThumb} alt="re" className="" />
        <Card.Title>Title: {strMeal}</Card.Title>
      </div>

      {details === null ? null : (
        <div className="details-cart">
          <Card.Body>
            <Card.Title>Area: {strArea}</Card.Title>
            <Card.Text>
              <p className="text-dark">
                <strong>INSTRUCTIONS:</strong>
                <br />
                <span className="instruction">{strInstructions}</span>
              </p>
            </Card.Text>
          </Card.Body>

          <Card.Footer>
            <Button variant="danger" onCLick={() => setDetails(false)}>
              {" "}
              close
            </Button>
          </Card.Footer>
        </div>
      )}
    </div>
  );
};

export default Cart;
