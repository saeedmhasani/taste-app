import { useContext } from "react";
import { FoodContext } from "../../context/foodContext";
import { Form,Input,Button } from "antd";
const AddFood = () => {
    const { food, foodsData, materialData, onFoodChange, createFoodForm } = useContext(FoodContext);

    return (<>
        <section>
            <Form onSubmit={createFoodForm}>
<Input
name="name"
type="text"
value={food.name}
onChange={onFoodChange}
required={true}
placeholder="food name"
/>

            </Form>
            <form onSubmit={createFoodForm}>
                <input
                    name="name"
                    type="text"
                    value={food.name}
                    onChange={onFoodChange}
                    required={true}
                    placeholder="food name"
                />
                <input
                    name="description"
                    type="text"
                    value={food.description}
                    onChange={onFoodChange}
                    required={true}
                    placeholder="description"
                />
                <Button type="primary" >


<input type="submit" 
value="Create Food"
/>
</Button>

            </form>
        </section>
    </>);

}
export default AddFood;