import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-teal-700 text-white py-8 px-3 md:px-18 lg:px-24">
      <div className="container grid grid-cols-1 mx-auto md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-3">v-Kart</h2>
          <p className="font-medium">
            Discover a world of convenience, quality, and variety with V-kart,
            the one-stop online store for all your shopping needs. Whether you
            are searching for the latest electronics, trendy fashion, home
            essentials, or beauty products, V-kart has it all. With a vast
            selection of products across numerous categories, we bring the best
            deals right to your doorstep.
          </p>
        </div>
        <div className="flex flex-col md:items-center ">
          <h4 className="lg:font-semibold text-lg">Quick Links</h4>
          <ul className="mt-4 space-y-2">
            <li>
              <Link to="/shop" className="hover:underline font-medium">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline font-medium">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline font-medium">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline font-medium">
                Home
              </Link>
            </li>
          </ul>
        </div>
        <div className="lg:font-semibold text-lg justify-center items-right">
          <h4>Follow Us</h4>
          <div className="flex space-x-4 mt-4">
            <a href="" className="hover:text-gray-400">
              <FaFacebook />
            </a>
            <a href="" className="hover:text-gray-400">
              <FaTwitter />
            </a>
            <a href="" className="hover:text-gray-400">
              <FaGithub />
            </a>
            <a href="" className="hover:text-gray-400">
              <FaLinkedin />
            </a>
          </div>
          <form action="" className="flex items-center justify-center mt-8">
            <input
              type="email"
              placeholder="Enter Your Mail"
              className="Footer-input w-full p-2 rounded-lg bg-teal-600 text-black border-none"
            />
            <button className="bg-red-700 text-white rounded-md py-2 px-4 ml-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer
