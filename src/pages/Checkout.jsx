import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

FaAngleUp

const Checkout = () => {
    const [billingToggle, setBillingToggle] = useState(true);
    const [ShippingToggle, setShippingToggle] = useState(false);
    const [PaymentToggle, setPaymentToggle] = useState(false);

    const [paymentMethod , setPaymentMethod] = useState("COD")
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
              <h3 className="text-lg font-semibold mb-2">Billing Total</h3>
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
              <h3 className="text-lg font-semibold mb-2">
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
                />
              </div>
            </div>
            <div className={`space-y-0 ${ShippingToggle ? "" : "hidden"}`}>
              <div className="">
                <label className="block text-gray-800">City</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your City...."
                  className="w-full px-2 py-2 border"
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
              <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
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
                <label className="block text-gray-800">Cash On Delivery</label>
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
                <label className="block text-gray-800">DEBIT CARD PAY</label>
              </div>
            </div>
            <div className={`space-y-0 ${PaymentToggle ? "" : "hidden"}`}>
                 {paymentMethod} 
            </div>
        </div>
        </div>
        <div className="md:w-1/3 bg-white p-6 rounded-1g shadow-md border"></div>
      </div>
    </div>
  );
}

export default Checkout
