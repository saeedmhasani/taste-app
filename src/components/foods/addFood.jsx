import { useContext } from "react";
import { FoodContext } from "../../context/foodContext";
import { Form, Input, Button } from "antd";
const AddFood = () => {
    const { food, foodsData, materialData, onFoodChange, createFoodForm } = useContext(FoodContext);

    return (<>
        <section>
            <Form onSubmit={createFoodForm} style={{maxWidth:"600px",margin:"25px"}} >
                <Input
                    name="name"
                    type="text"
                    value={food.name}
                    onChange={onFoodChange}
                    required={true}
                    placeholder="food name"
                />

                {/* <form onSubmit={createFoodForm}> */}
                <Input
                    name="contain"
                    type="text"
                    value={food.contain}
                    onChange={onFoodChange}
                    required={true}
                    placeholder="food contain"
                />
                <Input
                    name="description"
                    type="text"
                    value={food.description}
                    onChange={onFoodChange}
                    required={true}
                    placeholder="description"
                />
                <Input
                    name="image"
                    type="text"
                    value={food.image}
                    onChange={onFoodChange}
                    required={true}
                    placeholder="image"
                />

                <Button type="primary" onClick={createFoodForm}>

create Food
                </Button>
            </Form>
            {/* </form> */}
        </section>
    </>);

}
export default AddFood;