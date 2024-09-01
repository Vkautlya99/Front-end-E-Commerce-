import { useNavigate } from "react-router-dom";

const Order = ({ order }) => {

    const navigate = useNavigate()
  return (
    <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24">
      <h3 className="text-2xl font-semibold mb-4">Thank You For Yopur Order</h3>
      <p className="">
        Your Order Has been Placed Successfully & You Will Receive An Email
        Confirmation Soon....
      </p>
      <div className="mt-6 p-4 border rounded-lg bg-teal-800 text-teal-200">
        <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
        <p className="">Order Number : {order.orderNumber} </p>
      </div>
      <div className="mt-4">
        <h2 className="text-md font-semibold mb-4">Shipping Information</h2>
        <p className=""> {order.shippingInformtion.name} </p>
        <p className=""> {order.shippingInformtion.address} </p>
        <p className=""> {order.shippingInformtion.city} </p>
        <p className=""> {order.shippingInformtion.zip} </p>
      </div>

      <div className="mt-4">
        <h2 className="text-md font-semibold mb-2">Products Ordered</h2>
        {order.products.map((product) => (
          <div key={product.id} className="flex justify-between m-2">
            <p className="">
              {product.name} * {product.quantity}
            </p>
            <p className="">{product.price * product.quantity} </p>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-between">
        <span className="">Total Price :</span>
        <p className="font-semibold"> {order.totalPrice.toFixed(2)} </p>
      </div>
      <div className="mt-6">
        <button className="bg-red-600 text-white py-2 px-4 hover:bg-red-700 rounded-2xl gap-8 mr-2 font-bold">
          Order Tracking
        </button>
              <button className="bg-emerald-700 text-white py-2 px-4 hover:bg-emerland-700 rounded-2xl ml-2 font-bold"
              onClick={() => navigate("/")}
              >
          Continue Shopping{" "}
        </button>
      </div>
    </div>
  );
};

export default Order;
