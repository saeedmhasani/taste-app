import { useContext } from "react";
import { FoodContext } from "../../context/foodContext";
const FoodIndex = () => { 
    const{foodsData}=useContext(FoodContext);
return (
    <div>
        
       { foodsData.map((e) => {
            return (<>
                <hr />
                <input type={"text"} value={e.name}></input>
                <input type={"text"} value={e.contain}></input>
                <input type={"text"} value={e.description}></input>
                <img src={e.image} width="300px" height={"300px"} alt={"food image"}></img>
            </>)
        })}

    </div>
  
)}
export default FoodIndex;

  