import './App.css';
// import 'antd/dist/antd.css';
import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import { FoodContext } from "./context/foodContext";
import { AddFood, FoodIndex, Navbar } from './components'

import { Layout,message } from 'antd';

const { Header, Footer, Sider, Content } = Layout;
const hederStyle={
  textAlign:'center',
  backgroundColor:'Azure',
  display:'flex',
  justifyContent:'space-between',
  alignItems:'center'
}



const App = () => {
  // console.log(`===========${foodsData}=========`);
  const test = JSON.parse(localStorage.getItem('foodsData'));
  const [foodsData, setFoodsData] = useState(test || [
    {
      id:1,
      name: "polo",
      description: "lorem ipsonsdc asdvdsv dfbvdfsv sdvkmksdnv vcsdcvzdfv ncvknm nksdv 53sdfg.",
      contain: ["rice", "wather", "oil", "salt"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVMyhzwv2uPtYEdfoMZRXXOVdHevd0WXuN6A&usqp=CAU"
    },
    {
      id:2,
      name: "gorme",
      description: "lorem ipsonsdc asdvdsv dfbvdfsv sdvkmksdnv vcsdcvzdfv ncvknm nksdv 53sdfg.",
      contain: ["rice", "wather", "oil", "salt"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3WcgGWLYXzyCf-gzIQI-Hf7ndsdgrcm_TtQ&usqp=CAU"

    },
    {
      id:3,
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
  const [filteredFoods,setFilteredFoods]=useState();

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
const removeFood=(e)=>{

  const alldata=foodsData;
const filter=alldata.filter(alldata=>alldata.name !== e);
  setFilteredFoods(filter);
  setFoodsData(filter);
  message.success('Item Deleted');
}



  return (
    <FoodContext.Provider value={{
      foodsData,
      materialData,
      food,
      onFoodChange,
      createFoodForm,
      removeFood,
    }}>
      <Layout>
        <Sider style={{backgroundColor:'aqua'}}></Sider>
        <Layout>
          <div className="App">
            <Header style={hederStyle}>
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