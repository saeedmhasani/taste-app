import { useContext } from "react";
import { FoodContext } from "../../context/foodContext";

const AddMaterial =()=>{
    const {materialData,}=useContext(FoodContext);
    return(
        <>
        <section>
            <form onSubmit={}>
                <input
                name="material"
                type="checkbox"
                value={materialData}
            </form>
        </section>
        </>
    );

}
export default AddMaterial;