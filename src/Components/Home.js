import React from "react";
import { Card } from "react-bootstrap";
import homeimg from "../assets/images/home.jpg";
import Products from "./Products";
export const Home = () => {
  return (
    <div>
      <Card className="bg-dark text-white">
        <Card.Img src={homeimg} alt="Card image" />
        <Card.ImgOverlay className="d-flex flex-column justify-content-center">
          {/* <Card.Title>Card title</Card.Title> */}
          <div className="container">
            <Card.Text className="display-3 fw-bolder mb-0">ARRIVALS</Card.Text>
            <Card.Text className="lead fs-2">
              check out all the trends
            </Card.Text>
          </div>
        </Card.ImgOverlay>
      </Card>
      <Products />
    </div>
  );
};
