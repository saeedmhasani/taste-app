import { createContext } from "react";



export const FoodContext=createContext({
    foodsData:[],
    materialData:[],
    food:{},
    onFoodChange:()=>{},
    createFoodForm:()=>{},

});