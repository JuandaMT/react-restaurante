import React from "react";
import "./Home.css";

const Home = (props) => {
  const dishes = props.dishes.map((dish) => (
    <div key={dish.id} className="card">
        <h3>{dish.name}</h3>
        <p>Description: {dish.description}</p>
        <p>Price: {dish.price}</p>
    </div>
  ));
  return <div>{dishes}</div>;
};
export default Home;
