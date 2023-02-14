import { useContext } from "react";
import { FoodContext } from "../../context/foodContext";
const FoodIndex = () => { 
    const{food}=useContext(FoodContext);
return (
    <form>
        {food.map((e) => {
            return (<>
                <hr />
                <input type={"text"} value={e.name}></input>
                <input type={"text"} value={e.contain}></input>
                <br />
                <input type={"text"} value={e.description}></input>
                <img src={e.image} width="300px" alt="food name"></img>
            </>)
        })}

    </form>
  
)}
export default FoodIndex;

  