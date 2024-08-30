
import { FaStar } from 'react-icons/fa';
import { addToCart } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';



const ProductCard = ({ products }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (e) => {
    e.stopPropagation();
    e.preventDefault();

    dispatch(addToCart(products))


  }

  return (
    <div className="container bg-cyan-800 p-4 shadow rounded-md relative border transform transition-transform duration-300 hover:scale-105 ">
      <img
        src={products.image}
        alt=""
        className="h-48 w-full rounded-lg shadow-md"
      />

      <h3 className="text-lg font-semibold">{products.name}</h3>
      <p className="text-white ">${products.price} </p>
      <div className="flex items-center mt-2 text-sm">
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
      </div>
      <div className="absolute flex bottom-3 right-3 items-center justify-center w-5 h-5 bg-red-600 group text-white text-sm rounded-full hover:w-24 hover:bg-red-700 transition-all " onClick={(e) => handleAddToCart(e, products)}>
        <span className="group-hover:hidden -mt-1"> + </span>
        <span className="hidden group-hover:block font-semibold md:font-bold lg:font-semibold"> Add To cart </span>
      </div>
    </div>
  );
};

export default ProductCard;
