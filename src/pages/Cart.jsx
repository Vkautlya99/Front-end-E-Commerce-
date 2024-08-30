import { useDispatch, useSelector } from "react-redux";
import EmptyCart from "../assets/Images/emptycart.jpg"
import { FaTrashAlt } from "react-icons/fa";
import { useState } from "react";
import Modal from './../components/Modal';
import ChangeAddress from './../components/ChangeAddress';
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";



const Cart = () => {
  const cart = useSelector(state => state.cart)
  const [address, setAddress] = useState("VaradShree Society, Pune, 411046")
  const [isModelOpen, setIsModelOpen] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()
 
  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 1g:px-24">
      {cart.products.length > 0 ? (
        <div className="">
          <h3 className="font-semibold text-2xl mb-4">SHOPPING DETAILS</h3>
          <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
            <div className="md:w-2/3 ">
              <div className="flex justify-between items-center border-b mb-4 text-xs font-bold">
                <h5>PRODUCTS</h5>
                <div className="flex gap-7">
                  <p>PRICE</p>
                  <p>QUANTITY</p>
                  <p>SUBTOTAL</p>
                  <p>REMOVE</p>
                </div>
              </div>
              <div>
                {cart.products.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center justify-between py-3 border-b mt-2"
                  >
                    <div className="md:flex space-x-4 ">
                      <img
                        src={product.image}
                        className="w-16 h-16 object-contain rounded "
                      />

                      <div className="flex-1 ml-4">
                        <h3 className="text-lg font-semibold mt-4">
                          {product.name}
                        </h3>
                      </div>
                    </div>
                    <div className="flex space-x-12 items-center">
                      <p>${product.price}</p>
                      <div className="flex items-center justify-center border">
                        <button
                          className="text-xl font-bold px-1 border-r"
                          onClick={() => dispatch(decreaseQuantity(product.id))}
                        >
                          -
                        </button>
                        <p className="text-xl px-2">{product.quantity}</p>
                        <button
                          className="text-xl px-1 border"
                          onClick={() => dispatch(increaseQuantity(product.id))}
                        >
                          +
                        </button>
                      </div>
                      <p>${(product.price * product.quantity).toFixed(2)}</p>
                      <button
                        className="text-red-600 hover:text-red-700"
                        onClick={() => dispatch(removeFromCart(product.id))}
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="md:w-1/3 bg-white rounded-lg shadow-md border mt-5">
                <h3 className="text-sm font-bold mb-5">Total Cart</h3>
                <div className="flex justify-between mb-5 border-b pb-1">
                  <span className="text-sm">Total Items :</span>
                  <span> {cart.totalQuantity} </span>
                </div>

                <div className="mb-2 border-b pb-2">
                  <p>Shippng :</p>
                  <p className="ml-4">
                    Shippng To{" "}
                    <span className="text-xs font-bold">{address}</span>
                  </p>
                  <button
                    className="text-blue-600 hover:underline mt-1 ml-2 "
                    onClick={() => setIsModelOpen(true)}
                  >
                    Change Address
                  </button>
                </div>

                <div className="mb-4 flex justify-between">
                  <h3>Total Price :</h3>
                  <span> ${cart.totalPrice.toFixed(2)} </span>
                </div>
                <button
                  className="w-full bg-red-500 text-white py-2 hover:bg-red-700 rounded-md"
                  onClick={() => navigate("/checkout")}
                >
                  Proceed To CheckOut
                </button>
              </div>
            </div>

            <Modal isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
              <ChangeAddress
                setAddress={setAddress}
                setIsModelOpen={setIsModelOpen}
              />
            </Modal>
          </div>
        </div>
      ) : (
        <div className="flex justify-center ">
          <img src={EmptyCart} alt="" className="h-full w-fit" />
        </div>
      )}
    </div>
  );
}

export default Cart;
