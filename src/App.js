
import { useState, useContext, useEffect } from "react";
import FoodIndex from "./components/foods/foodIndex";

import { FoodContext } from "./context/foodContext";
const App = () => {
  const [food, setFood] = useState([{
    name: "polo",
    description: "lorem ipsonsdc asdvdsv dfbvdfsv sdvkmksdnv vcsdcvzdfv ncvknm nksdv 53sdfg.",
    contain: ["rice", "wather", "oil", "salt"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVMyhzwv2uPtYEdfoMZRXXOVdHevd0WXuN6A&usqp=CAU"
  },
  {
    name: "gorme",
    description: "lorem ipsonsdc asdvdsv dfbvdfsv sdvkmksdnv vcsdcvzdfv ncvknm nksdv 53sdfg.",
    contain: ["rice", "wather", "oil", "salt"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3WcgGWLYXzyCf-gzIQI-Hf7ndsdgrcm_TtQ&usqp=CAU"

  },
  {
    name: "kabab",
    description: "lorem ipsonsdc asdvdsv dfbvdfsv sdvkmksdnv vcsdcvzdfv ncvknm nksdv 53sdfg.",
    contain: ["rice", "wather", "oil", "salt"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr0pBKhy3S3Ad_JS7sUDuUWrPOqMpJk-nFSA&usqp=CAU"

  }
  ]);
  const [material, setMaterial] = useState(["rice", "oil", "salt"]);
  const contexValue = useContext(food, material);




  return (
    <FoodContext.Provider value={{
      food,
      material,

    }}>
      <FoodIndex />
    </FoodContext.Provider>



  )
}
export default App;