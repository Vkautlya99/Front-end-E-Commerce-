import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";



// eslint-disable-next-line react/prop-types
const Checkout = ( {setOrder} ) => {
    const [billingToggle, setBillingToggle] = useState(true);
    const [ShippingToggle, setShippingToggle] = useState(false);
    const [PaymentToggle, setPaymentToggle] = useState(false);
    const navigate = useNavigate()
    const [paymentMethod, setPaymentMethod] = useState("COD")
    const [shippingInfo, setShippingInfo] = useState({
      address: "",
      city: "",
      zip : ""
    })

  const handleOrder = () => {
    const newOrder = {
      products: cart.products,
      orderNumber: "1234",
      shippingInformtion: shippingInfo,
      totalPrice : cart.totalPrice
    }
    setOrder(newOrder)
    navigate("/order-confirmation")
  }
  
  const cart = useSelector(state => state.cart);

  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 1g:px-24">
      <h3 className="text-2x1 font-semibold mb-4">CHECKOUT</h3>
      <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
        <div className="md:w-2/3">
          <div className="border p-2 mb-6">
            <div
              className="flex items-center justify-between "
              onClick={() => setBillingToggle(!billingToggle)}
            >
              <h3 className="text-lg font-semibold mb-2 cursor-pointer">
                Billing Total
              </h3>
              {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>

            <div className={`space-y-0 ${billingToggle ? "" : "hidden"}`}>
              <div>
                <label className="block text-gray-800">Name</label>
                <input
                  type="text"
                  name="Name"
                  placeholder="Enter Your Name...."
                  className="w-full px-2 py-2 border"
                />
              </div>
            </div>
            <div className={`space-y-0 ${billingToggle ? "" : "hidden"}`}>
              <div className="">
                <label className="block text-gray-800">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Mail...."
                  className="w-full px-2 py-2 border"
                />
              </div>
            </div>
            <div className={`space-y-0 ${billingToggle ? "" : "hidden"}`}>
              <div className="">
                <label className="block text-gray-800">Phone</label>
                <input
                  type="number"
                  name=""
                  placeholder="Enter Your Mobile...."
                  className="w-full px-2 py-2 border"
                />
              </div>
            </div>
          </div>

          {/* Shipping */}
          <div className="border p-2 mb-6">
            <div
              className="flex items-center justify-between "
              onClick={() => setShippingToggle(!ShippingToggle)}
            >
              <h3 className="text-lg font-semibold mb-2 cursor-pointer">
                Shipping Information
              </h3>
              {ShippingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>

            <div className={`space-y-0 ${ShippingToggle ? "" : "hidden"}`}>
              <div>
                <label className="block text-gray-800">Address</label>
                <input
                  type="text"
                  name="Address"
                  placeholder="Enter Your Address...."
                  className="w-full px-2 py-2 border"
                  onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value} )}
                />
              </div>
            </div>
            <div className={`space-y-0 ${ShippingToggle ? "" : "hidden"}`}>
              <div className="">
                <label className="block text-gray-800">City</label>
                <input
                  type="text"
                  name="city"
                  placeholder="Enter Your City...."
                  className="w-full px-2 py-2 border"
                  onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value} )}
                />
              </div>
            </div>
            <div className={`space-y-0 ${ShippingToggle ? "" : "hidden"}`}>
              <div className="">
                <label className="block text-gray-800">Zipcode</label>
                <input
                  type="number"
                  name="Zipcode"
                  placeholder="Enter Your Zipcode...."
                  className="w-full px-2 py-2 border"
                  onChange={(e) => setShippingInfo({ ...shippingInfo, zip: e.target.value} )}
                />
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="border p-2 mb-6">
            <div
              className="flex items-center justify-between "
              onClick={() => setPaymentToggle(!PaymentToggle)}
            >
              <h3 className="text-lg font-semibold mb-2 cursor-pointer">
                Payment Method
              </h3>
              {PaymentToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>

            <div className={`space-y-0 ${PaymentToggle ? "" : "hidden"}`}>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "COD"}
                  onChange={() => setPaymentMethod("COD")}
                  className="w-full px-2 py-2 border"
                />
                <label className="block bg-black text-white p-2 rounded-lg font-bold">
                  Cash On Delivery
                </label>
              </div>
            </div>
            <div className={`space-y-0 ${PaymentToggle ? "" : "hidden"}`}>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "Debit Card"}
                  onChange={() => setPaymentMethod("Debit Card")}
                  className="w-full px-2 py-2 border"
                />
                <label className="block bg-teal-700 text-teal-100 rounded-lg font-bold p-2">
                  DEBIT CARD PAY
                </label>
              </div>
              {paymentMethod === "Debit Card" && (
                <div className="bg-yellow-400 rounded-lg p-4 mb-4">
                  <h3 className="text-xl font-bold mb-3">
                    Debit Card Information
                  </h3>
                  <div className="">
                    <label
                      htmlFor=""
                      className="block text-gray-900 mb-1 font-semibold"
                    >
                      Card Number
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Your Card Number"
                      className="border-none outline-none w-full p-2 mb-2 rounded"
                    />
                  </div>
                  <div className="">
                    <label
                      htmlFor=""
                      className="block text-gray-900 mb-1 font-semibold"
                    >
                      Card Holder Number
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Card Holder Name"
                      className="border-none outline-none w-full mb-2 p-2 rounded"
                    />
                  </div>
                  <div className="">
                    <label
                      htmlFor=""
                      className="block text-gray-900 mb-1 font-semibold"
                    >
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="border-none outline-none w-full p-2 rounded mb-2"
                    />
                  </div>
                  <div className="">
                    <label
                      htmlFor=""
                      className="block text-gray-900 mb-1  font-semibold"
                    >
                      CVV
                    </label>
                    <input
                      type="text"
                      placeholder="CVV"
                      className="border-none outline-none w-full p-2 rounded mb-2"
                    />
                  </div>
                </div>
              )}
            </div>
            <div className={`space-y-0 ${PaymentToggle ? "" : "hidden"}`}></div>
          </div>
        </div>
        <div className="md:w-1/3 bg-white p-6 rounded-1g shadow-md border">
          <h3 className="text-lg mb-4 font-semibold">Order Summary</h3>
          <div className="space-y-4">
            {cart.products.map((product, index) => (
              <div key={index} className="flex justify-between">
                <div className="flex items-center">
                  <img
                    src={product.image}
                    alt=""
                    className="w-16 h-16 object-contain rounded-md"
                  />
                  <div className="ml-4">
                    <h4 className="text-md font-semibold"> {product.name} </h4>
                    <p className="text-gray-800">
                      & {product.price} * {product.quantity}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 border-t pt-4">
            <div className="text-zinc-900 text-left font-bold mt-4 flex justify-between">
              <span>Total Price </span>
              <span>${cart.totalPrice.toFixed(2)} </span>
            </div>
          </div>
          <button className="w-full bg-red-500 text-white font-bold py-2 mt-6 hover:bg-red-700 transform transition-transform duration-300 hover:scale-105 text-xl rounded-2xl"
          onClick={handleOrder}
          
          >
          
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout
