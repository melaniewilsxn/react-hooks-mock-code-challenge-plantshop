import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plantList, setPlantList] = useState([])
  const [searched, setSearched] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(res => res.json())
    .then(plantData => setPlantList(plantData))
  }, [])

  function handleAddNewPlant(newPlant){
    setPlantList([...plantList, newPlant])
  }

  return (
    <main>
      <NewPlantForm onAddNewPlant={handleAddNewPlant}/>
      <Search searched={searched} setSearched={setSearched} />
      <PlantList plantList={plantList} searched={searched}/>
    </main>
  );
}

export default PlantPage;
