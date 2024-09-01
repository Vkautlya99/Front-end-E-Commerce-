import { Cateogries, mockData } from "../assets/mockData";
import firstImg from "../assets/Images/firstImg.jpeg";
import InfoSection from "./../components/InfoSection";
import CateogrySection from "../components/CateogrySection";
import { setProducts } from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ProductCard from "../components/ProductCard";


const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products); // Correctly access the products array

  useEffect(() => {
    dispatch(setProducts(mockData));
  }, [dispatch]);

  return (
    <div className=" bg-white mx-auto px-4 md:px-16 lg:px-24 mt-4">
      <div className="container mx-auto py-4 flex flex-col md:flex-row">
        <div className="w-full md:w-3/12">
          <div className="bg-red-700 text-white font-xs font-bold px-4 py-2 mr-4">
            SHOP BY CATEOGRIES
          </div>
          <ul className="bg-gray-100 space-y-4 p-3 border mr-4 font-semibold cursor-pointer">
            {Cateogries.map((cateogry, index) => (
              <li key={index} className="flex items-center text-sm font-medium">
                <div className="w-2 h-2 mr-2 border border-red-600 rounded-full "></div>
                {cateogry}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full md:w-9/12 mt-8 md:mt-0 h-96 relative opacity-100">
          <img src={firstImg} alt="" className="h-full w-full " />
          <div className="absolute top-6 left-6">
            <p className="text-gray-500 mb-1 font-medium">Shop with v-KART</p>
            <h2 className="text-3xl font-bold">WELCOME TO V-SHOP</h2>
            <p className="text-xm mt-2 font-bold text-gray-800">
              MILLIONS + PRODUCTS
            </p>
            <button className="bg-red-700 text-white px-6 py-1 font-semibold rounded-full mt-4 hover:bg-red-600 transform transition-transform duration-300 hover:scale-105">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>

      <InfoSection />
      <CateogrySection />

      <div className="container mx-auto py-12">
        <h2 className="text-2xl font-bold mb-8 text-center">Top Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
          {products && products.slice(0, 10).map((product, index) =>
            <div key={index}>
              <ProductCard products={ product} />

            </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default Home;
