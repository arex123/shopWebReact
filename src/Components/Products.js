import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }

      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return <>
    Loading......
    </>
  };


  const filterProduct=(fill)=>{
      const updateList = data.filter((x)=> x.category===fill);
      setFilter(updateList)
  }

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2" onClick={()=>{
              setFilter(data)
          }}>All</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("men's clothing")}>Men's Clothing'</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("women's clothing")}>
            Women's Clothing'
          </button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("jewelery")}>Jewelery</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("electronics")}>Electronic</button>
        </div>
        {filter.map((product) => {
          return (
            <>
            <div className="col-md-3 mb-4">
              <Card className="h-100 text-center p-4" key={product.id}>
                <Card.Img variant="top" src={product.image} alt={product.title} height="250px"/>
                <Card.Body>
                  <Card.Title className="mb-0">{product.title.substring(0,12)}...</Card.Title>
                  <Card.Text className="card-text lead fw-bold">
                    ${product.price}
                  </Card.Text>
                  <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
                </Card.Body>
              </Card>
              </div>
            </>
          );
        })}
      </>
    );
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="display-6 m-4 fw-center text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
}
