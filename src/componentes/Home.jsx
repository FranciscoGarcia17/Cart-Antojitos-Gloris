import React from "react";
import ItemCard from "./ItemCard";
import datos from "../data/datos";

function Home() {
  return (
    <>
      <div className="container-home">
        <h1>Menu Antojitos Gloris</h1>
        <div className="container-cards">
          {datos.dataProduct.map((item, index) => {
            return (
              <ItemCard
                image={item.image}
                title={item.name}
                price={item.price}
                key={index}
                item={item}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
