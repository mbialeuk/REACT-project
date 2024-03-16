import { useState } from "react";

export default function FruitForm({handleAdd}) {
    //state
    const [newFruit, setNewFruit] = useState("");

    //components
    //2.when a fct is relate to an elt, this fct have this elt in arg
    const handleSubmit = (event) => {
        //alert("handleSubmit");
        event.preventDefault();
        //1-copy
        //const fruitsCopy = [...fruits];

        //2-manipulation de la copy
        const id = new Date().getTime();
        const name = newFruit;
        const fruitToAdd = {id, name}
        //fruitsCopy.push(fruitToAdd);

        //3-modif du state
        //setFruits(fruitsCopy);
        handleAdd(fruitToAdd);
        setNewFruit("");
    };

    const handleChange = (event) => {
        setNewFruit(event.target.value);
    };

    //affichage (render)
    return (
    <form action="submit" onSubmit={handleSubmit}>
        <input 
        value={newFruit} 
        type="text" 
        placeholder="Ajouter un fruit..."
        onChange={handleChange}
        />
        <button>Ajouter</button>
    </form>
        );
}