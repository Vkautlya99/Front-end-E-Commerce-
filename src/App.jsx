import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Shop from "./pages/Shop"
import Cart from "./pages/Cart"
import Contact from "./pages/Contact"
import Checkout from "./pages/Checkout"
import { useState } from "react"
import Order from "./pages/Order"
import About from "./pages/About"


const App = () => {
  const [order, setOrder] = useState(null)

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/shop" element={<Shop/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/checkout" element={<Checkout setOrder={setOrder } />}></Route>
        <Route path="/order-confirmation" element={<Order order={order } />}></Route>
      </Routes>
  
      <Footer/>
    </BrowserRouter>
  )
}

export default App
