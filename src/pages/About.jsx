

const About = () => {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About V-kart & Founder</h1>
        <p className="text-lg text-gray-600 mb-8">
          Welcome to V-kart, your number one source for all things. We’re
          dedicated to providing you the very best of products, with an emphasis
          on quality, affordability, and customer satisfaction.
        </p>
        <img
          src="/src/assets/Images/myimg.jpg"
          alt="V-kart Logo"
          className="mx-auto mb-8 w-[600px] h-full"
        />
        <div className="text-left">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 bg-red-400 p-2">
            Our Mission
          </h2>
          <p className="text-lg text-gray-600 mb-8 font-semibold p-2">
            At V-kart, our mission is to offer a seamless online shopping
            experience, providing our customers with a vast selection of
            products at competitive prices, all from the comfort of their homes.
            We strive to become the go-to destination for online shopping by
            continuously improving our platform, expanding our product range,
            and enhancing customer service.
          </p>

          <h2 className="text-2xl text-gray-800 mb-4 font-bold bg-yellow-200 p-2">
            Why Choose Us?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our platform is designed with the customer in mind. We provide:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-600 mb-8">
            <li>Wide range of products across various categories.</li>
            <li>Easy and secure payment options.</li>
            <li>Fast and reliable delivery services.</li>
            <li>Exceptional customer support.</li>
            <li>User-friendly interface for a smooth shopping experience.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4 bg-teal-300 p-2">
            Our Story
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Founded in 2023 by Vikram Kumar, V-kart has come a long way from its
            beginnings as a small startup. When Vikram first started out, his
            passion for creating an efficient and affordable online shopping
            experience drove him to start his own business.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            We hope you enjoy our products as much as we enjoy offering them to
            you. If you have any questions or comments, please don’t hesitate to
            contact us.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4 bg-cyan-200 p-2">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600">
            Have questions? Reach out to us via our contact page, or connect
            with us on social media. We’d love to hear from you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
