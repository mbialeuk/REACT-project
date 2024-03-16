import {useState, useRef} from "react";
import Fruit from "./components/Fruit";
import FruitForm from "./components/FruitForm";


function App() {
  // state
  const [fruits, setFruits] = useState([
    {id:1, name: "Abricot"},
    {id:2, name: "Banane"},
    {id:3, name: "Cerise"},
    {id:4, name: "Mangue"},
    {id:5, name: "Orange"}
  ]); 

  //compotments 
  const handleDelete = (id) => {
    //1. copie du state
    //const fruitsCopy = fruits.slice();
    const fruitsCopy = [...fruits];

    //2. manipuler mon state
    const fruitsCopyUpdated = fruitsCopy.filter(fruit => fruit.id !== id)

    //3. modifier mon state avec le setter
    setFruits(fruitsCopyUpdated);
  };

  const handleAdd = (fruitToAdd) => {
    //1- copie du state
    const fruitsCopy = [...fruits];

    //2-Manipulation sur la copie du state
    fruitsCopy.push(fruitToAdd);

    //3-modif du state avec le setter
    setFruits(fruitsCopy);
  };
  
  //render
  return (
    <div>
       <h1>Liste de fruits</h1>
       <ul>
        {fruits.map((fruit) => (
         <Fruit fruitInfo={fruit} onFruitDelete={handleDelete} key={fruit.id}/>
        ))}
       </ul>
       <FruitForm handleAdd ={handleAdd}/>
    </div>
  );
}

export default App;

//Gestion du formulaire
//1. création du formulaire
//2. soumission du formulaire
//3.collecte des données du formulaire
