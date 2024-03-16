export default function Fruit({fruitInfo, onFruitDelete}) {
    //state
    //const fruitInfo = props.fruitInfo;
    //const onFruitDelete = props.onFruitDelete;
    //components

    //affichage (render)
    return (
    <li>
        {fruitInfo.name} <button onClick={() => onFruitDelete(fruitInfo.id)}>x</button>
        </li>);
}