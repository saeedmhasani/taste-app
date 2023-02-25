import './App.css';
// import 'antd/dist/antd.css';
import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import { FoodContext } from "./context/foodContext";
import { AddFood, FoodIndex, Navbar } from './components'

import { Layout, Space } from 'antd';

const { Header, Footer, Sider, Content } = Layout;



const App = () => {
  // console.log(`===========${foodsData}=========`);
  const test = JSON.parse(localStorage.getItem('foodsData'));
  const [foodsData, setFoodsData] = useState(test || [
    {
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

  const [materialData, setMaterialData] = useState(["rice", "oil", "salt"]);
  const [food, setFood] = useState({});
  const [num, setNum] = useState();
  const navigate = useNavigate();

  /** NOTE => مقدار foodsData را وارد localStorage میکند**/
  useEffect(() => {
    // localStorage.clear('foodsData');   /**ریست کردن localstorage */
    localStorage.setItem('foodsData', JSON.stringify(foodsData));
  }, [foodsData]);

  /**برای اضافه کردن غذا  */
  const createFoodForm = (event) => {
    event.preventDefault();
    const allFoods = [...foodsData, food];
    setFoodsData(allFoods);
    setFood({});
    navigate("/foods");
  }
  /** با تایپ در کادر food فیلد های  foodمقدار دهی می شود*/
  const onFoodChange = (event) => {
    setFood({ ...food, [event.target.name]: event.target.value });
  }


  return (
    <FoodContext.Provider value={{
      foodsData,
      materialData,
      food,
      onFoodChange,
      createFoodForm,
    }}>
      <Layout>
        <Sider></Sider>
        <Layout>


          <div className="App">

            <Header>

              <Navbar />
            </Header>
            <Content>

              <Routes>

                <Route path='/' element={<Navigate to='/foods' />} />
                <Route path='/foods' element={<FoodIndex />} />
                <Route path='/addfood' element={<AddFood />} />

              </Routes>
            </Content>
            <Footer></Footer>
          </div>

        </Layout>
      </Layout>


    </FoodContext.Provider>



  )
}
export default App;