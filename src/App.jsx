import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/index";
import Home from "./Pages/Home";
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import Footer from './Components/Footer/Footer.jsx';
import ProductModel from './Components/ProductModal/index.jsx';
import Listing from './Pages/Listing/index.jsx';
import Product1 from './Pages/Home/Products/Product1.jsx';
import Cart from "./Components/Cart/index.jsx";
import Contect from './Components/Contect/index.jsx';
import AboutUs from "./Components/AboutUs/index.jsx";
import Account from "./Components/Account/index.jsx"
import Buy from './Components/Buy/index.jsx';

const MyContext = createContext();

function App() {
  const [countryList, setcountryList] = useState([]);
  const [isOpenProductModel, setisOpenProductModel] = useState(false);
  const [cart, setCart] = useState([]); 

  const addToCart = (product) => {
    const exists = cart.some(item => item.id === product.id);
    if (exists) {
      alert("⚠️ Product already in cart!");
      return;
    }
    setCart(prev => [...prev, product]);
    console.log("✅ Cart Updated:", [...cart, product]);
  };

  const getCountry = async (url) => {
    const res = await axios.get(url);
    setcountryList(res.data.data);
    console.log(res.data.data);
  };

  useEffect(() => {
    getCountry('https://countriesnow.space/api/v0.1/countries/');
  }, []);

  const values = {
    countryList,
    setcountryList,
    isOpenProductModel,
    setisOpenProductModel,
    cart,
    setCart,
    addToCart 
  };

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/cat' element={<Listing />} />
          <Route path='/Contect' element={<Contect />} />
          <Route path='/Account' element={<Account />} />
          <Route path='/Buy' element={<Buy />} />
        </Routes>
        <Footer />
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext };
