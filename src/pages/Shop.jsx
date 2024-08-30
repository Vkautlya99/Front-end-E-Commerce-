import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const Shop = () => {
  // Fetch products from the Redux store
  const products = useSelector((state) => state.product.products);

  return (
    <div className="container mx-auto py-8 md:px-16 lg:px-24">
      <h2 className="text-2xl font-bold mb-8 text-center">Shop</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
        {products && products.length > 0 ? (
          products.map((product, index) => (
            <div key={index}>
              <ProductCard products={product} />
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
};

export default Shop;
