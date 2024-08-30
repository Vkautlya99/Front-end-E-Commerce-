import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Shop from "./pages/Shop"
import Cart from "./pages/Cart"
import Contact from "./pages/Contact"
import Checkout from "./pages/Checkout"


const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/shop" element={<Shop/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/checkout" element={<Checkout/>}></Route>
      </Routes>
  
      <Footer/>
    </BrowserRouter>
  )
}

export default App
