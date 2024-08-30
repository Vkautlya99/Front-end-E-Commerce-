import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const products = useSelector((state) => state.cart.products);

  return (
    <nav className="bg-white shadow-xl p-2 relative">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 flex justify-between items-center">
        <div className="font-bold text-lg ml-2 mr-2">
          <Link to="/">v-KART</Link>
        </div>

        <div className="relative flex-1 mx-4 ">
          <form className="">
            <input
              type="search"
              placeholder="Search Product"
              className="w-full rounded-full px-3  py-3"
            />
            <FaSearch className="absolute top-4 right-3 text-red-600" />
          </form>
        </div>
        <div className="flex items-center space-x-4 ml-2">
          <Link to="/cart" className="relative">
            <FaShoppingCart className="text-lg" />
            {products.length > 0 && (
              <span className="absolute text-xs top-0 w-3 h-4 left-3 bg-red-700 rounded-full justify-center items-center text-white">
                {products.length}
              </span>
            )}
          </Link>
          <button className="hidden md:block font-semibold">LogIn | Register</button>
          <button className="block md:hidden">
            <FaUser />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-10 py-4 font-bold text-black">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/shop" className="hover:underline">
          Shop
        </Link>
        <Link to="/Contact" className="hover:underline">
          Contact
        </Link>
        <Link to="/About" className="hover:underline">
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
