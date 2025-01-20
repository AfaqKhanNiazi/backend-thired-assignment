import Banner from "./components/banner"
import Navbar from "./components/Navbar"
import Contact from "./pages/Contact";
import Home from "./pages/home"
import About from "./pages/About"
import Login from "./pages/login"
import { Routes, Route, Navigate} from "react-router-dom";
import Footer from "./components/Footer"
import Products from "./pages/Products"
import ProductDetail from "./pages/ProductDetail"
import AddProduct from "./pages/AddProduct"
import Search from "./pages/Search"
// import Signup from "./pages/signup"

// import { FcAbout } from "react-icons/fc";
// import { DiVim } from "react-icons/di";


function App() {
const isLoggedIn = false;


  return (
    
    <>
    <Banner/>
    <Navbar/>

    
  <Routes>
  <Route path="/" index element={<Home/>}/>
  <Route path="/about"element={<About/>}/>
  <Route path="/contact"element={<Contact/>}/>
  {/* <Route path="/signup"element={<Signup/>}/> */}
  <Route path="/not-found"element={<div>not founddd</div>}/>
  <Route path="/products"element={<Products/>}/>
  <Route path="/product/:id" element={<ProductDetail />} />
  <Route path="/product/add" element={<AddProduct/>} />
  <Route path="/search" element={<Search/>} />
  

  


  
   {isLoggedIn ? (
   <> 
  <Route path="/profile" element={<div>this is my profile page</div>}
  />

  <Route path="/login"element={<Navigate to="/" />}/>
  <Route path="/*"element={<Navigate to="/not-found" />}/>

   </>
    ) : (
      <>
  <Route path="/login" element={<Login/>}/>
  <Route path="*"element={<Navigate to="/login" />}/>
 
  </>
    )}
   </Routes>
   <Footer/>  
    </>
  )
}

export default App