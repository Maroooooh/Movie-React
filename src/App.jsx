import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home";
import About from "./pages/About As/about";
import Contact from "./pages/Contact As/contact";
import Product from "./pages/products/product";
import Notfound from "./pages/Not Found/notfound";
import Listproducts from "./pages/products/listproducts";
import Addproduct from "./pages/products/addproduct";
import Details from "./pages/products/details";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Product />} >
            <Route index element={<Listproducts/>}/>
            <Route path="addproduct" element={<Addproduct/>}/>
          </Route> 
          <Route path="/details/:id" element={<Details/>}/>
          <Route path="/login" element = {<Login/>}/>
          <Route path="/register" element = {<Register/>}/>
          <Route path="*" element={<Notfound/>}/>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
