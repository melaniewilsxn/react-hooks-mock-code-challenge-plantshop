import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantList, searched }) {

  const displayPlants = plantList.filter((plant) => plant.name.toLowerCase().includes(searched.toLowerCase()))

  return (
    <ul className="cards">{displayPlants.map((plant) => (
      <PlantCard plant={plant} key={plant.id} />
    ))}</ul>
  );
}

export default PlantList;
